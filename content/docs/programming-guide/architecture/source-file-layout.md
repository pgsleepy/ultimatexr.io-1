---
title: "Source File Layout"
---

# Source File Layout

## Regions

UltimateXR source files follow a standardized layout, organized into `#region` blocks of code where elements are classified depending on accessibility and role. This consistent layout facilitates collaboration among multiple contributors, as they can quickly understand the structure of each file, facilitating efficient development and maintenance.

Commonly used `#region` blocks are, in order of appearance:
- Inspector Properties/Serialized Fields
- Public Types & Data
- Constructors & Finalizer
- Implicit Interface Implementations
- Explicit Interface Implementations
- Public Overrides
- Public Properties
- Public Methods
- Unity Methods
- Coroutines
- Event Handling Methods
- Event Trigger Methods
- Protected Overrides
- Protected Methods
- Protected Types & Data
- Private Methods
- Private Types & Data

## Collapsed view

{{% callout tip %}}
Use Ctrl+M followed by Ctrl+O to collapse definitions.
{{% /callout %}}

The collapsed view provides an overview of available elements and the file's organization. Public properties, events, and methods are prioritized at the top, giving immediate understanding of component usage and functionality.

![](/media/docs/programming-guide/architecture/source-file-layout/01Collapsed.png)

## Expanded view

{{% callout tip %}}
Use Ctrl+M followed by Ctrl+L to expand the definitions.
{{% /callout %}}

The expanded view provides a full view of the whols sourcecode.
Alternating between the two views will help to quickly navigate through the code.

![](/media/docs/programming-guide/architecture/source-file-layout/02Expanded.png)

## Code completion

Use the autocompletion and tooltips available in your Integrated Development Environment (IDE), such as Intellisense in Visual Studio or the built-in capabilities in Rider. The framework provides extensive XML documentation, which will be displayed as you write code.

![](/media/docs/programming-guide/architecture/source-file-layout/03AutoCompletion.png)
