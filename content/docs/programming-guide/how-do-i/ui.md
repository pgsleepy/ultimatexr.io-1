---
title: "UI"
---

# UI

It is often useful to add UxrControlInput components to Unity UI elements such as images and buttons in order to use event handling programatically. 

How do I get notified when a button was clicked?

```c#
[SerializeField] private UxrControlInput _controlInput;

private void OnEnable()
{
    _controlInput.Clicked += Control_Clicked;
}

private void OnDisable()
{
    _controlInput.Clicked -= Control_Clicked;
}

private void Control_Clicked(UxrControlInput controlInput, PointerEventData eventData)
{
    Debug.Log("The button was clicked");
}
```

Are there any more UxrControlInput events that I can subscribe to?

```c#
DragStarted
Dragged
DragEnded
Dropped
Pressed
Released
Clicked
PressHeld
CursorEntered
CursorExited
UpdateSelected
InputSubmitted
```

Are there any static UxrControlInput events that I can subscribe to so that I get notified whenever any UxrControlInput generated the event?

```c#
GlobalPressed
GlobalReleased
GlobalClicked
GlobalDragStarted
GlobalDragged
GlobalDragEnded
```

How can I make a Unity Graphic component (Text, Image...) blink using the alpha value?

```c#
// Blink 8 times per second during 1 second and restore the original color value
UxrColorTween.AnimateBlinkAlpha(textComponent, 8.0f, 1.0f) .SetFinishedActions(UxrTweenFinishedActions.RestoreOriginalValue);
```

How can I fade in a CanvasGroup using tweening?

```c#
UxrCanvasAlphaTween.FadeIn(canvasGroup, fadeSeconds, delaySeconds).gameObject.SetActive(true);
```

How can I fade out a CanvasGroup starting with the current alpha and deactivate the GameObject when finished?

```c#
UxrCanvasAlphaTween.Animate(canvasGroup, canvasGroup.alpha, 0.0f, new UxrInterpolationSettings(fadeSeconds)).SetFinishedActions(UxrTweenFinishedActions.DeactivateGameObject);
```

How can I move Unity Graphic components (Text, Image...) in using tweening?

```c#
// Animate from right to left in cascade using an increasing delay

float startHorizontalOffset = 500.0f;

UxrPositionTween.MoveIn(image1, startHorizontalOffset, 0.0f, new UxrInterpolationSettings(durationSeconds, 0.0f, UxrEasing.EaseOutQuad));
UxrPositionTween.MoveIn(image2, startHorizontalOffset, 0.0f, new UxrInterpolationSettings(durationSeconds, 0.1f, UxrEasing.EaseOutQuad));
UxrPositionTween.MoveIn(image3, startHorizontalOffset, 0.0f, new UxrInterpolationSettings(durationSeconds, 0.2f, UxrEasing.EaseOutQuad));
UxrPositionTween.MoveIn(image4, startHorizontalOffset, 0.0f, new UxrInterpolationSettings(durationSeconds, 0.3f, UxrEasing.EaseOutQuad));
```

How can I create a typewriter effect to print the name of a user in a Unity Text or TextMeshPro component?

```c#
UxrTextContentTween.Animate(textComponent.gameObject, string.Empty, name, new UxrInterpolationSettings(durationSeconds, delaySeconds));
```

How can I create a text effect to print the score in a Unity Text or TextMeshPro component so that the score is increased numerically and rings a bell when it reaches the end?

```c#
UxrTextContentTween.Animate(textComponent.gameObject, new UxrInterpolationSettings(durationSeconds, delaySeconds), () => RingBell(), "Final score: {0:000000}", 0, finalScore);
```
