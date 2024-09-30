---
title: "UxrLaserPointer"
---

# UxrLaserPointer

The *UxrLaserPointer* shows the following parameters:

![](/media/docs/ui-interaction/uxrlaserpointer/07LaserPointerComponent.jpg)
 
### General properties

- *Hand*: Selects which controller will be used to control the laser.
- *Click Input*: Which controller button will be used to perform clicks on UI elements.

### Laser enabling

- *Enable Laser Input*: Selects which controller button will be used to enable the laser.
- *Enable Laser Button Event*: Tells which controller button input event will be needed to enable the laser.
- *Optionally Enable Object*: Optional additional object that will be enabled/disabled at the same time the laser is enabled or disabled.

### Laser rendering

- *Use Controller Forward*: When the avatar is rendered in controllers mode, will the laser use the controller's forward vector instead of its own?
- *Invisible*: Should the laser be invisible? This does not affect any raycasts, they still would be performed but the ray itself will be invisible.
- *Ray Length*: Laser ray length.
- *Ray Width*: Laser ray width.
- *Ray Color Interactive*: Laser color when hovering over interactive UI elements.
- *Ray Color Non-Interactive*: Laser color when hovering over non-interactive UI elements.
- *Ray Hit Material*: Material that will be used to render the quad representing the hit with the scenario or UI elements.
- *Ray Hit Size*: Size of the quad representing the hit with the scenario or UI elements.