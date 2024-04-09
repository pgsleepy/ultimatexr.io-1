---
title: "Source File Layout"
---

# Source File Layout

UltimateXR source files follow a standardized layout, organized into regions where elements are classified depending on accessibility and role. Each element is thoroughly documented using XML tags, serving as the source for documentation generation. This consistent layout facilitates collaboration among multiple contributors, as they can quickly understand the structure of each file, facilitating efficient development and maintenance.

Commonly used #region sections are, in order of appearance:
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

Use Ctrl+M followed by Ctrl+O to collapse definitions. The collapsed view provides an overview of available elements and the file's organization. Public properties, events, and methods are prioritized at the top, giving immediate understanding of component usage and functionality.

![](/docs/guides/media/scripting/01Collapsed.png)

## Expanded view

Use Ctrl+M followed by Ctrl+L to expand the definitions. The collapse and expand shortcuts will help you alternate between the two views to quickly navigate through the code. 

![](/docs/guides/media/scripting/02Expanded.png)

## Code completion

Use the autocompletion and tooltips available in your Integrated Development Environment (IDE), such as Intellisense in Visual Studio or the built-in capabilities in Rider. The framework provides extensive XML documentation, which will be displayed as you write code.

![](/docs/guides/media/scripting/03AutoCompletion.png)