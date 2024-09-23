---
title: "Custom Parent Class"
---

# Custom Parent Class

Sometimes, inheriting from a core component like `UxrComponent` isn't viable due to existing class hierarchies in your codebase, as C# does not support multiple inheritance. In such cases, the `IUxrUnique`, `IUxrStateSave` and `IUxrStateSync` interfaces must be implemented directly in your class, typically at the common parent root. This section details how to achieve this using the provided implementers.

## Implementers

The Unique ID, StateSave, and StateSync functionalities are primarily encapsulated within the `UxrUniqueIdImplementer`, `UxrStateSaveImplementer`, and `UxrStateSyncImplementer` classes. The design ensures that implementing the interfaces mainly involves relaying calls to these classes and allowing them to handle the operations seamlessly.

This setup enables `UxrComponent` to implement these functionalities while also providing developers with a straightforward method to implement them in their own classes with minimal code.

## Full Base class

```c#
class CustomParentClass : MonoBehaviour
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

	public void RegisterIfNecessary()
	{
		UniqueIdImplementer.InitializeUniqueIdIfNecessary(this, c => c.UniqueIdImplementer, (c, id) => c.UniqueId = id);

		StateSaveImplementer.RegisterIfNecessary();
		StateSyncImplementer.RegisterIfNecessary();
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

		UxrComponent[] childComponents = GetComponentsInChildren<UxrComponent>(true);

		foreach (UxrComponent c in childComponents)
		{
			c.StateSaveImplementer.RegisterIfNecessary();
			c.StateSyncImplementer.RegisterIfNecessary();
		}
	}

	#endregion

	#region Explicit IUxrStateSave

	int               IUxrStateSave.StateSerializationVersion      => StateSerializationVersion;
	int               IUxrStateSave.SerializationOrder             => SerializationOrder;
	bool              IUxrStateSave.SaveStateWhenDisabled          => SaveStateWhenDisabled;
	bool              IUxrStateSave.SerializeActiveAndEnabledState => SerializeActiveAndEnabledState;
	UxrTransformSpace IUxrStateSave.TransformStateSaveSpace        => TransformStateSaveSpace;

	bool IUxrStateSave.RequiresTransformSerialization(UxrStateSaveLevel level)
	{
		return RequiresTransformSerialization(level);
	}

	bool IUxrStateSave.SerializeState(IUxrSerializer serializer, int stateSerializationVersion, UxrStateSaveLevel level, UxrStateSaveOptions options)
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
		UniqueIdImplementer.NotifyOnDestroy();
		StateSaveImplementer.NotifyOnDestroy();
		StateSyncImplementer.NotifyOnDestroy();
	}

	/// <summary>
	///     Unity <see cref="OnEnable" /> handling.
	/// </summary>
	protected virtual void OnEnable()
	{
		StateSaveImplementer.NotifyOnEnable();
		GlobalEnabled?.Invoke(this);
	}

	/// <summary>
	///     Unity <see cref="OnDisable" /> handling.
	/// </summary>
	protected virtual void OnDisable()
	{
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
}
```