---
title: "Custom Parent Class"
---

# Custom Parent Class

Sometimes, inheriting from a core component like `UxrComponent` isn't viable due to existing class hierarchies in your codebase, as C# does not support multiple inheritance. In such cases, the `IUxrUnique`, `IUxrStateSave` and `IUxrStateSync` interfaces must be implemented directly in your class, typically at the common parent root. This section details how to achieve this using the provided implementers.

## Implementers

The Unique ID, StateSave, and StateSync functionalities are primarily encapsulated within the `UxrUniqueIdImplementer`, `UxrStateSaveImplementer`, and `UxrStateSyncImplementer` classes. The design ensures that implementing the interfaces mainly involves relaying calls to these classes and allowing them to handle the operations seamlessly.

This setup enables `UxrComponent` to implement these functionalities while also providing developers with a straightforward method to implement them in their own classes with minimal code.

## Full Base class

Integrate the following implementation into your base class to make it fully UltimateXR-compliant.

```c#
class CustomParentClass : MonoBehaviour, IUxrStateSave, IUxrStateSync
{
	[SerializeField] [HideInNormalInspector] private string _uxrUniqueId = string.Empty;
	[SerializeField] [HideInNormalInspector] private string __prefabGuid = string.Empty;
	[SerializeField] [HideInNormalInspector] private bool   __isInPrefab;
	
	#region Implicit IUxrStateSave

	public UxrStateSaveMonitor StateSaveMonitor => StateSaveImplementer.Monitor;

	#endregion

	#region Implicit IUxrStateSync

	public event EventHandler<UxrSyncEventArgs> StateChanged;

	public void SyncState(UxrSyncEventArgs e)
	{
		StateSyncImplementer.SyncState(e, SyncStateInternal);
	}

	#endregion

	#region Implicit IUxrUniqueId

	public Guid UniqueId
	{
		get
		{
			if (_cachedGuid == default && !string.IsNullOrEmpty(_uxrUniqueId))
			{
				_cachedGuid = new Guid(_uxrUniqueId);
			}

			return _cachedGuid;
		}

		private set
		{
			_uxrUniqueId = value.ToString();
			_cachedGuid  = value;
		}
	}

	public event Action<IUxrUniqueId> Destroying;

	public void RegisterIfNecessary()
	{
		UniqueIdImplementer.InitializeUniqueIdIfNecessary(this, c => c.UniqueIdImplementer, (c, id) => c.UniqueId = id);

		StateSaveImplementer.RegisterIfNecessary();
		StateSyncImplementer.RegisterIfNecessary();
	}

	public void Unregister()
	{
		UniqueIdImplementer.Unregister();
		StateSaveImplementer.Unregister();
		StateSyncImplementer.Unregister();
	}

	public Guid ChangeUniqueId(Guid newUniqueId)
	{
		Guid uniqueId = UniqueIdImplementer.ChangeUniqueId(newUniqueId, c => c.UniqueIdImplementer, (c, id) => c.UniqueId = id);

		StateSaveImplementer.RegisterIfNecessary();
		StateSyncImplementer.RegisterIfNecessary();
		return uniqueId;
	}

	/// <inheritdoc />
	public void CombineUniqueId(Guid guid, bool recursive = true)
	{
		UniqueIdImplementer.CombineUniqueId(guid, c => c.UniqueIdImplementer, (c, id) => c.UniqueId = id, null, null, null, null, recursive);

		if (recursive)
		{
			UxrComponent[] childComponents = GetComponentsInChildren<UxrComponent>(true);

			foreach (UxrComponent c in childComponents)
			{
				c.StateSaveImplementer.RegisterIfNecessary();
				c.StateSyncImplementer.RegisterIfNecessary();
			}
		}
		else
		{
			StateSaveImplementer.RegisterIfNecessary();
			StateSyncImplementer.RegisterIfNecessary();
		}
	}

	#endregion

	#region Explicit IUxrStateSave

	int               IUxrStateSave.SerializationOrder             => SerializationOrder;
	bool              IUxrStateSave.SaveStateWhenDisabled          => SaveStateWhenDisabled;
	bool              IUxrStateSave.SerializeActiveAndEnabledState => SerializeActiveAndEnabledState;
	UxrTransformSpace IUxrStateSave.TransformStateSaveSpace        => TransformStateSaveSpace;

	bool IUxrStateSave.RequiresTransformSerialization(UxrStateSaveLevel level)
	{
		return RequiresTransformSerialization(level);
	}

	bool IUxrStateSave.SerializeState(IUxrSerializer serializer, UxrStateSaveLevel level, UxrStateSaveOptions options)
	{
		int serializeCounter = StateSaveImplementer.SerializeCounter;

		_stateSerializer = serializer;
		StateSaveImplementer.SerializeState(serializer, level, options, SerializeState);

		return StateSaveImplementer.SerializeCounter != serializeCounter;
	}

	void IUxrStateSave.InterpolateState(in UxrStateInterpolationVars vars, float t)
	{
		StateSaveImplementer.InterpolateState(vars, t, InterpolateState, ((IUxrStateSave)this).GetInterpolator);
	}

	UxrVarInterpolator IUxrStateSave.GetInterpolator(string varName)
	{
		UxrVarInterpolator interpolator = GetInterpolator(varName);
		return interpolator ?? StateSaveImplementer.GetDefaultInterpolator(varName);
	}

	#endregion

	#region Explicit IUxrUniqueId

	Guid       IUxrUniqueId.CombineIdSource    => this != null ? UniqueIdImplementer.CombineIdSource : Guid.Empty;
	Behaviour  IUxrUniqueId.Component          => this;
	string     IUxrUniqueId.UnityPrefabId      => this != null ? __prefabGuid : null;
	GameObject IUxrUniqueId.GameObject         => this != null ? gameObject : null;
	Transform  IUxrUniqueId.Transform          => this != null ? transform : null;
	bool       IUxrUniqueId.UniqueIdIsTypeName => UniqueIdIsTypeName;
	bool       IUxrUniqueId.PreferForTracking  => PreferForTracking;

	#endregion
	
	#region Unity

	protected virtual void Awake()
	{
		if (!Application.isPlaying)
		{
			// Only store data in play mode
			return;
		}

		// Register component
		RegisterIfNecessary();
	}

	protected virtual void OnDestroy()
	{
		if (!Application.isPlaying)
		{
			return;
		}

		Destroying?.Invoke(this);
		Unregister();
	}

	/// <summary>
	///     Unity <see cref="OnEnable" /> handling.
	/// </summary>
	protected virtual void OnEnable()
	{
		if (!Application.isPlaying)
		{
			return;
		}

		StateSaveImplementer.NotifyOnEnable();
		GlobalEnabled?.Invoke(this);
	}

	/// <summary>
	///     Unity <see cref="OnDisable" /> handling.
	/// </summary>
	protected virtual void OnDisable()
	{
		if (!Application.isPlaying)
		{
			return;
		}

		StateSaveImplementer.NotifyOnDisable();
		GlobalDisabled?.Invoke(this);
	}

	/// <summary>
	///     Unity <see cref="Reset" /> handling.
	/// </summary>
	protected virtual void Reset()
	{
	}

	/// <summary>
	///     Unity <see cref="Start" /> handling.
	/// </summary>
	protected virtual void Start()
	{
	}

	/// <summary>
	///     Unity <see cref="OnValidate" /> handling.
	///     Compute unique ID for network/state-save syncing.
	/// </summary>
	protected virtual void OnValidate()
	{
		UniqueIdImplementer.NotifyOnValidate((c, id) => c.UniqueId = id, ref __isInPrefab, ref __prefabGuid);
	}

	#endregion

	#region Event Trigger Methods

	private void OnStateChanged(UxrSyncEventArgs e)
	{
		StateChanged?.Invoke(this, e);
	}

	#endregion

	#region Protected Types & Data

	protected virtual bool UniqueIdIsTypeName             => false;
	protected virtual bool PreferForTracking              => false;
	protected virtual int SerializationOrder              => UxrConstants.Serialization.SerializationOrderDefault;
	protected virtual bool SaveStateWhenDisabled          => false;
	protected virtual bool SerializeActiveAndEnabledState => false;
	protected virtual UxrTransformSpace TransformStateSaveSpace => UxrTransformSpace.World;

	#endregion

	#region Protected Methods

	protected static object[] SyncParams(params object[] parameters)
	{
		return parameters;
	}

	protected virtual bool RequiresTransformSerialization(UxrStateSaveLevel level)
	{
		return false;
	}

	protected virtual void SerializeState(bool isReading, UxrStateSaveLevel level, UxrStateSaveOptions options)
	{
		StateSaveImplementer.SerializeStateVersion(_stateSerializer, level, options, StateSerializationVersion, out int effectiveVersion);
	}

	protected virtual void InterpolateState(in UxrStateInterpolationVars vars, float t)
	{
	}

	protected virtual UxrVarInterpolator GetInterpolator(string varName)
	{
		return StateSaveImplementer.GetDefaultInterpolator(varName);
	}

	protected virtual void SyncStateInternal(UxrSyncEventArgs e)
	{
	}

	protected void SerializeStateVersion(UxrStateSaveLevel level, UxrStateSaveOptions options, int version, out int effectiveVersion)
	{
		StateSaveImplementer.SerializeStateVersion(_stateSerializer, level, options, version, out effectiveVersion);
	}

	protected void SerializeStateValue<T>(UxrStateSaveLevel level, UxrStateSaveOptions options, string varName, ref T value)
	{
		StateSaveImplementer.SerializeStateValue(_stateSerializer, level, options, varName, ref value);
	}

	protected void BeginSync(UxrStateSyncOptions options = UxrStateSyncOptions.Default)
	{
		StateSyncImplementer.BeginSync(options);
	}

	protected void CancelSync()
	{
		StateSyncImplementer.CancelSync();
	}

	protected void EndSyncProperty(in object value, [CallerMemberName] string propertyName = null)
	{
		StateSyncImplementer.EndSyncProperty(OnStateChanged, value, propertyName);
	}

	protected void EndSyncMethod(object[] parameters = null, [CallerMemberName] string methodName = null)
	{
		StateSyncImplementer.EndSyncMethod(OnStateChanged, parameters, methodName);
	}

	protected void EndSyncState(UxrSyncEventArgs e)
	{
		StateSyncImplementer.EndSyncState(OnStateChanged, e);
	}

	#endregion

	#region Private Types & Data

	private const int StateSerializationVersion = 0;

	private UxrUniqueIdImplementer<CustomParentClass> UniqueIdImplementer
	{
		get
		{
			if (_uniqueIdImplementer == null)
			{
				_uniqueIdImplementer = new UxrUniqueIdImplementer<CustomParentClass>(this);
			}

			return _uniqueIdImplementer;
		}
	}

	private UxrStateSaveImplementer<CustomParentClass> StateSaveImplementer
	{
		get
		{
			if (_stateSaveImplementer == null)
			{
				_stateSaveImplementer = new UxrStateSaveImplementer<CustomParentClass>(this);
			}

			return _stateSaveImplementer;
		}
	}

	private UxrStateSyncImplementer<CustomParentClass> StateSyncImplementer
	{
		get
		{
			if (_stateSyncImplementer == null)
			{
				_stateSyncImplementer = new UxrStateSyncImplementer<CustomParentClass>(this);
			}

			return _stateSyncImplementer;
		}
	}

	private Guid                                        _cachedGuid;
	private UxrUniqueIdImplementer<CustomParentClass>   _uniqueIdImplementer;
	private UxrStateSaveImplementer<CustomParentClass>  _stateSaveImplementer;
	private UxrStateSyncImplementer<CustomParentClass>  _stateSyncImplementer;
	private IUxrSerializer                              _stateSerializer;

	#endregion
}
```
