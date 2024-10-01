---
title: "Guidelines"
---

# Guidelines

This section provides some easy guidelines to help maintain the quality and consistency of the documentation. We’re excited to see your contributions and appreciate your support!

## Basic Principles

When contributing to the UltimateXR documentation, please keep in mind the following principles:

- **Quality Content**: Ensure the information is accurate, clear, and helpful. Content should add value and be useful to developers using UltimateXR.
- **Clean Documentation**: Organize the documentation in a way that is easy to read and navigate. Keep sentences concise and use consistent formatting.
- **Common Style**: Follow the existing documentation as a reference for writing style and structure.
- **Spelling and Grammar**: Double-check for spelling, grammar, and punctuation errors. This ensures the documentation maintains a professional standard.
- **Images and Videos**: Use the .png format for images and .mp4 for videos. Check the [Embedded Videos](#embedded-videos) section for general rules.

## Use of Markdown

We use Markdown to format the UltimateXR documentation, as it's a simple and efficient way to create clean, structured content. Markdown allows you to add headers, lists, links, code snippets, and more without needing complex HTML.

If you're new to Markdown or need a refresher, check out this [Markdown guide](https://www.markdownguide.org/) for a complete guide on how to use it.

You can also click on the *Edit this page on GitHub* link on the right side of each documentation page to view the Markdown source. This can help you understand how specific sections are written:

![](/media/docs/contributing-to-the-guide/_common/CommunityMenu.png)

By following Markdown standards, we ensure that the documentation remains consistent and easy to maintain.

## Headings

Each page in this documentation starts with the following code:

```md
---
title: "Page Title"
---

# Page Title
```

The first part between the two `---` is used to include metadata for Hugo, the site generator. It should contain the `title` key with the name of the page.

The single `#` symbol marks the top level heading, which is reserved for the page name. Following this, there should usually be a brief introduction or overview.

Articles should be divided into a sequence of `##` level subheadings whenever possible. These subheadings should have descriptive titles and are important because they will appear as quick access items in the top right navigation menu. Each of these subsections represents a logical subdivision of the article, especially if the content is extensive and requires clear organization.

For example, the [Adding Multiplayer Support](/docs/multiplayer/adding-multiplayer-support) guide shows the following top right navigation menu:

![](/media/docs/contributing-to-the-guide/_common/OnThisPageMenu.png)

All headings/subheadings should use *title casing*:
- Capitalize the first and last word of the title.
- Capitalize all major words (nouns, pronouns, verbs, adjectives, adverbs).
- Do not capitalize minor words like articles (a, an, the), conjunctions (and, but, or), and prepositions (in, on, with, by), unless they are the first or last word of the title.

For example:
- Title case: The Quick Brown Fox Jumps Over the Lazy Dog
- Not title case: the quick brown fox jumps over the lazy dog

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
```md
{{%/* callout info */%}}
Use this callout to share helpful information or general facts.
{{%/* /callout */%}}
```

#### Tip

{{% callout tip %}}
This is for giving practical advice or shortcuts that can help the reader.
{{% /callout %}}

Source code:
```md
{{%/* callout tip */%}}
This is for giving practical advice or shortcuts that can help the reader.
{{%/* /callout */%}}
```

#### Caution

{{% callout caution %}}
Use this when there's something the reader should be careful about, like potential mistakes.
{{% /callout %}}

Source code:
```md
{{%/* callout caution */%}}
Use this when there's something the reader should be careful about, like potential mistakes.
{{%/* /callout */%}}
```

#### Warning

{{% callout warning %}}
This highlights something serious that could cause problems or risks.
{{% /callout %}}

Source code:
```md
{{%/* callout warning */%}}
This highlights something serious that could cause problems or risks.
{{%/* /callout */%}}
```

### Embedded Videos

Embedded videos are great for demonstrating step-by-step instructions or visual explanations that are hard to convey through text or images alone. They can also make articles more engaging by providing real-time examples of how something works.

Videos can be embedded by simply writing the path to the .mp4 file between two empty lines. The path should start with `/media/docs/`, which is where all article images and videos are stored, using a directory structure that mirrors the article hierarchy.

The `/media/docs/` directory is explained in detail in the [Submitting a New Article](/docs/contributing-to-the-guide/submitting-a-new-article) guide.

For example, the following code will embed the video below:

```md

TODO: Add path to video without being embedded inside the code block.

```

/media/docs/getting-started/what-is-ultimatexr/UltimateXR_lo.mp4

The `/media` directory is located directly under `/assets`, which is a root directory in the repository. As shown, the `/getting-started/what-is-ultimatexr/` subdirectories follow the same structure as the article hierarchy.

Limit video use to when it is truly necessary. For video exports, aim for a resolution between 720p and 1080p, or smaller if capturing a specific region instead of fullscreen. Use Variable Bit Rate (VBR) encoding, with a target bitrate of 1 Mbps, and a maximum bitrate of 2 Mbps.
 
## Directory Structure

Refer to the [Submitting a New Article](/docs/contributing-to-the-guide/submitting-a-new-article) guide for detailed explanations on the following directories:
- The `/data/docs.yaml` file. This file controls the content shown in the left navigation bar and includes links to all articles. If you are adding a new article, don't forget to update this file with the new entry.
- The `/content/docs` directory. This is where the articles are stored, following a subdirectory hierarchy that mirrors the structure of the left navigation bar.
- The `/assets/media/docs` directory. This directory stores images and videos, also organized in subdirectories matching the article hierarchy.

Navigate the [repository](https://github.com/VRMADA/ultimatexr.io) to familiarize yourself with how directories and articles are structured.

## Special Tutorial Considerations

Tutorials should keep a similar structure for consistency:

- The top level heading should be the tutorial's name (e.g., *Creating a Grabbable Ball*).
- Use the text right below the top level heading for a brief introduction/overview of the tutorial's goals.
- Consider adding a screenshot or short video of the final result. This visual will give users a clear idea of what they will accomplish.
- The first `##` subheading should be *Objectives*, containing a bullet point list of key learning outcomes.
- The third to last `##` subheading should be *Recap*. This section will provide a numbered summary of the major steps taken to get to the end result.
- The second to last `##` subheading should be *End Result*. Use this section to write some closing words, and consider adding a video or screenshot showcasing what has been accomplished. It can offer more detail or context than the introductory video. If it feels redundant, feel free to skip it.
- The last `##` subheading should be *Continue Reading*, when applicable. Link to relevant tutorials or sections where users can learn more. If there’s nothing to add, this section can be skipped.