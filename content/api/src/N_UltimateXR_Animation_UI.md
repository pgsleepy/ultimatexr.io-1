# UltimateXR.Animation.UI Namespace

## Classes
&nbsp;<table><tr><th></th><th>Class</th><th>Description</th></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Animation_UI_UxrCanvasAlphaTween">UxrCanvasAlphaTween</a></td><td>
Tweening component to animate the alpha of a CanvasGroup component programatically or using the inspector.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Animation_UI_UxrColorTween">UxrColorTween</a></td><td>
Tweening component to animate the color of a Graphic component programatically or using the inspector.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Animation_UI_UxrGraphicTween">UxrGraphicTween</a></td><td>
Abstract base class for tweening animations on Unity Graphic components.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Animation_UI_UxrImageFillTween">UxrImageFillTween</a></td><td>
Tweening component to animate the fillAmount of an an Image component programatically or using the inspector.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Animation_UI_UxrPositionTween">UxrPositionTween</a></td><td>
Tweening component to animate anchoredPosition programatically or using the inspector.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Animation_UI_UxrRotationTween">UxrRotationTween</a></td><td>
Tweening component to animate [!:RectTransform.localRotation] programatically or using the inspector.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Animation_UI_UxrScaleTween">UxrScaleTween</a></td><td>
Tweening component to animate [!:RectTransform.localScale] programatically or using the inspector.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Animation_UI_UxrTextContentTween">UxrTextContentTween</a></td><td>
Tweening component to animate a UI text component programatically or using the inspector. Supports both Unity's Text and TMPro. The text interpolation can be used to create a typewriter kind of effect. Programatically it also offers the possibility to interpolate parameters in a text string.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween</a></td><td>

Base abstract class to create tweening components to animate Unity UI elements.

Tweens are <a href="T_UltimateXR_Core_Components_UxrComponent">UxrComponent</a> components to allow access to the global list of tweens or filter by type.

They are also <a href="T_UltimateXR_Core_Components_UxrComponent_2">UxrComponent(TP, TC)</a> to allow access to the global list of tweens in a given parent canvas.</td></tr></table>

## Enumerations
&nbsp;<table><tr><th></th><th>Enumeration</th><th>Description</th></tr><tr><td>![Public enumeration](media/pubenumeration.gif "Public enumeration")</td><td><a href="T_UltimateXR_Animation_UI_UxrTweenFinishedActions">UxrTweenFinishedActions</a></td><td>
Different actions that can be executed once a <a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween</a> animation finished.</td></tr></table>&nbsp;
