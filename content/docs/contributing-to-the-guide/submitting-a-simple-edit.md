---
title: "Submitting a Simple Edit"
---

# Submitting a Simple Edit

Every article on the documentation site has an **Edit this page on GitHub** link in the right-hand sidebar. This is the quickest way to fix a typo, correct a factual error, or improve a sentence. No local setup required.

This guide walks through the full process from clicking that link to having your change accepted.

## 1. Find the Typo and Click Edit

In this example there is a typo, "eihter", that needs to be corrected to "either".
On the the **Community** section in the right sidebar. Click **Edit this page on GitHub**.

![](/media/docs/contributing-to-the-guide/submitting-a-simple-edit/Typo.png)

## 2. Fork the Repository

GitHub will inform you that you cannot edit the repository directly. Click **Fork this repository** to create your own copy where you can freely make changes.

![](/media/docs/contributing-to-the-guide/submitting-a-simple-edit/Fork.png)

GitHub creates the fork automatically and drops you straight into the web editor for that file.

## 3. Make the Fix

The GitHub web editor opens with the file ready to edit. Find the typo and correct it.

![](/media/docs/contributing-to-the-guide/submitting-a-simple-edit/Fix.png)

The blue banner at the top confirms that any changes you save will go to a new branch in your fork, not directly into the main repository.

When you are happy with the change, click **Commit changes...**.

## 4. Propose the Changes

A dialog appears asking for a commit message and an optional description. Fill in a short, clear message describing what you changed, then click **Propose changes**.

![](/media/docs/contributing-to-the-guide/submitting-a-simple-edit/ProposeChanges.png)

## 5. Review the Diff

GitHub shows a comparison page with the exact difference between the original file and your edit. Confirm the change looks correct, then click **Create pull request**.

![](/media/docs/contributing-to-the-guide/submitting-a-simple-edit/CreatePullRequest.png)

## 6. Open the Pull Request

Fill in the pull request title and description. A good description explains what you changed and why, so the maintainer reviewing it has the context they need. Click **Create pull request** to submit.

![](/media/docs/contributing-to-the-guide/submitting-a-simple-edit/SendPullRequest.png)

## 7. Wait for a Maintainer to Merge

Your pull request is now in the queue. A maintainer will review the change and, if approved, merge the pull request to apply it to the site.

{{% callout tip "Need to make bigger changes?" %}}
For edits that span multiple files, or when writing a new article entirely, the [Previewing New Articles](/docs/contributing-to-the-guide/previewing-new-articles) guide covers setting up a local Hugo server so you can see your changes before submitting them.
{{% /callout %}}
