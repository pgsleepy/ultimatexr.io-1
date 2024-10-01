---
title: "Guidelines"
---

# Guidelines

This section provides some easy guidelines to help maintain the quality and consistency of the documentation. We’re excited to see your contributions and appreciate your support!

## Basic Principles

When contributing to the UltimateXR documentation, please keep in mind the following principles:

- Quality Content: Ensure the information is accurate, clear, and helpful. Content should add value and be useful to developers using UltimateXR.
- Clean Documentation: Organize the documentation in a way that is easy to read and navigate. Keep sentences concise and use consistent formatting.
- Common Style: Follow the existing documentation as a reference for writing style and structure.
- Spelling and Grammar: Double-check for spelling, grammar, and punctuation errors. This ensures the documentation maintains a professional standard.
- Images and Videos: Use the .png format for images and .mp4 for videos. Limit video use to when it is truly necessary. For video exports, aim for a resolution between 720p and 1080p, or smaller if capturing a specific region instead of fullscreen. Use Variable Bit Rate (VBR) encoding, with a target bitrate of 1 Mbps, and a maximum bitrate of 2 Mbps.

## Use of Markdown

We use Markdown to format the UltimateXR documentation, as it's a simple and efficient way to create clean, structured content. Markdown allows you to add headers, lists, links, code snippets, and more without needing complex HTML.

If you're new to Markdown or need a refresher, check out this [Markdown guide](https://www.markdownguide.org/) for a complete guide on how to use it.

You can also click on the "Edit this page on GitHub" link on the right side of each documentation page to view the Markdown source. This can help you understand how specific sections are written.

By following Markdown standards, we ensure that the documentation remains consistent and easy to maintain.

## Headers

Each page in this documentation starts with the following code:

```
---
title: "Page Title"
---

# Page Title
```

The first part between the two `---` is used to include metadata for Hugo, the site generator. It should contain the `title` key with the name of the page.

The single `#` symbol marks the top level heading, which is reserved for the page name. Following this, there should usually be a brief introduction or overview.

Articles should be divided into a sequence of `##` level subheadings whenever possible. These subheadings should have descriptive titles and are important because they will appear as quick access items in the top right menu titled "ON THIS PAGE." Each of these subsections represents a logical subdivision of the article, especially if the content is extensive and requires clear organization.

As always, we recommend visiting existing articles to use as references when creating new content.

## Advanced Features

In addition to standard Markdown, we provide some cool extensions that are used to improve the quality of articles:

### Callouts

Callouts are used to highlight important information, tips, warnings, or notes within the text. They appear as visually distinct blocks that draw the reader's attention.

We support the following callouts:

#### Info

{{% callout info %}}
Use this callout to share helpful information or general facts.
{{% /callout %}}

Source code:
```
{{% callout info %}}
Use this callout to share helpful information or general facts.
{{% /callout %}}
```

#### Tip

{{% callout tip %}}
This is for giving practical advice or shortcuts that can help the reader.
{{% /callout %}}

Source code:
```
{{% callout tip %}}
This is for giving practical advice or shortcuts that can help the reader.
{{% /callout %}}

#### Caution

{{% callout caution %}}
Use this when there's something the reader should be careful about, like potential mistakes.
{{% /callout %}}

Source code:
```
{{% callout caution %}}
Use this when there's something the reader should be careful about, like potential mistakes.
{{% /callout %}}

#### Warning

{{% callout warning %}}
This highlights something serious that could cause problems or risks.
{{% /callout %}}

Source code:
```
{{% callout warning %}}
This highlights something serious that could cause problems or risks.
{{% /callout %}}

### Embedded Videos
 
## Directory Structure

TODO: Reminder of directory structure. Reference "submitting a new article".

## Special Tutorial Considerations

TODO: Begin with Objectives, end with Recap and Continue Reading after that.

