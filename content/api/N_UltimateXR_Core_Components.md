# UltimateXR.Core.Components Namespace

## Classes
&nbsp;<table><tr><th></th><th>Class</th><th>Description</th></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Core_Components_UxrComponent">UxrComponent</a></td><td>
Base class for components in UltimateXR. Has functionality to access the global lists of UltimateXR components, cache Unity components, access initial transform values and some other common utilities. To enumerate all components use the static properties <a href="P_UltimateXR_Core_Components_UxrComponent_AllComponents">AllComponents</a> and <a href="P_UltimateXR_Core_Components_UxrComponent_EnabledComponents">EnabledComponents</a>.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Core_Components_UxrComponent_1">UxrComponent(T)</a></td><td>
Like <a href="T_UltimateXR_Core_Components_UxrComponent">UxrComponent</a> but it allows to enumerate all components of a specific type.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Core_Components_UxrComponent_2">UxrComponent(TP, TC)</a></td><td>

Like <a href="T_UltimateXR_Core_Components_UxrComponent_1">UxrComponent(T)</a> but the component belongs to a hierarchy with a parent that has a component of a certain type *TP*. This allows to enumerate and keep track of only the components that hang from the hierarchy under each parent component separately.

In the case of keeping track of all components of a same type that are in or hang from an avatar ( <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a>) there is a special component for that in <a href="T_UltimateXR_Core_Components_Composite_UxrAvatarComponent_1">UxrAvatarComponent(T)</a>.</td></tr></table>&nbsp;
