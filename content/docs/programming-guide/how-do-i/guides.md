---
title: "Guides"
---

# Guides

How can I show a guiding arrow that instructs the user to look at a specific object?

```c#
// Enable
UxrCompass.Instance.SetTarget(myObject.transform, UxrCompassDisplayMode.Look);

// Same but when the object is in sight it won't show the blinking eye icon
UxrCompass.Instance.SetTarget(myObject.transform, UxrCompassDisplayMode.OnlyCompass);

// Disable
UxrCompass.Instance.SetTarget(null);
```

How can I instruct the user to go to a certain place?

```c#
// Enable
UxrCompass.Instance.SetTarget(floor.transform, UxrCompassDisplayMode.Location);

// Disable
UxrCompass.Instance.SetTarget(null);
```

How can I instruct the user to grab a certain object?

```c#
// Enable
UxrCompass.Instance.SetTarget(hammer.transform, UxrCompassDisplayMode.Grab);

// Disable
UxrCompass.Instance.SetTarget(null);
```

How can I instruct the user to use a certain tool?

```c#
// Enable
UxrCompass.Instance.SetTarget(tool.transform, UxrCompassDisplayMode.Use);

// Disable
UxrCompass.Instance.SetTarget(null);
```