---
title: "Contributing to the Guide"
---

# Contributing to the Guide

In this guide, we'll walk you through the process of contributing to the documentation by editing .md pages using the [Hugo Framework](https://gohugo.io/). The guide targets mainly beginners to contribution, but can be used by anyone.

Markdown allows us to format text easily, making it accessible to both seasoned developers and newcomers alike.

There are multiple ways that you can apply changes to our documentation, as well as just using GitHub to make minor changes like typos, etc.

If you have your own ways of implementing changes to the documentation, feel free to [edit this page](https://github.com/VRMADA/ultimatexr.io/edit/dev/content/docs/guides/contributing-to-the-guide.md)!

## What to edit, where?

Documentation pages reside in the `content/docs` folder in the repository. Each category on the website corresponds to a folder in `content/docs`, containing `.md` files representing individual pages.

Additionally, the `media` folder within each category holds necessary media files. The left-hand menu can be edited in `data/docs.yaml`.

## Using Visual Studio Code and Git

This guide covers everything using Visual Studio Code and Git for a fast and efficient workflow.

We're going to make our own fork, clone said fork to our local machine, edit the files, and finally make a pull request for the owners to pull your additions.

You will need to have [Visual Studio Code](https://code.visualstudio.com/), [Hugo](https://gohugo.io/installation/) and [Git](https://git-scm.com/downloads) installed and you will need to have Git logged into your GitHub account. If you haven't done that yet, [please follow the steps to set up Git.](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git)

## Forking the Repository

First things foremost, we will need to fork the repository.
You do this using the fork button on the [GitHub repository](https://github.com/VRMADA/ultimatexr.io).
![](/docs/guides/media/contributing/01ForkButton.png)

Here you'll be greeted with a page to create a new fork of the repository, choose the profile you would want to give ownership of the fork repository, deselect `Copy the master branch only` and click `Create fork.`.

We deselect the option to copy the master branch only in case there's a development branch we might use in the future.
It should've redirected you to the new ultimatexr.io repository on your very own profile.

From here you can make changes to the documentation, you could do this through GitHub, however, it's far more convenient to have a folder on your computer where you can make local changes and push those to your repository.

## Cloning the forked repository

Next up, we're going to clone the repository we've just created.
We will do this using Git and the command prompt.

First things foremost, open up your Command Prompt / PowerShell / Terminal and navigate to the location where you want to clone the repository in.

For Windows, you can do this by copying the link to the folder in your File Explorer, typing `cd ` in your command line and finally pasting the link there.
It would look something like this:
![](/docs/guides/media/contributing/02CmdCd.png)

From there, we will need to actually clone the repository here.

To do this use the following command:

```html
git clone https://github.com/VRMADA/ultimatexr.io.git
```

## Setting up the Hugo framework

To be able to see your changes directly, you can compile Hugo in combination with the server it also provides.

This will "watch" the folder for any changes being made. This means that whenever you make a change to the site, it will directly show up, apart from media additions since those aren't eligible for a "hot reload".

To do this, you will need to navigate to the `ultimatexr.io` folder using `cd ` and type use the following command to make a server for the Hugo Framework.

```html
hugo server
```

Finally, after it's done compiling you will see the pages it has rendered but more importantly, it gives you the URL where you can see the compiled website.
Your command prompt should look something like this.

![](/docs/guides/media/contributing/03CmdHugoServer.png)

On the bottom part it shows you what the web server address is.
In this example it's `http://localhost:1313/` which is the default for the Hugo server.

Within the command prompt on Windows, you can `CTRL + Click` the link and it'll open on your browser. Alternatively you can copy it over by selecting it and pressing `CTRL + C`.

Having done that, you should be greeted with the UltimateXR website which means you've successfully compiled the website and are currently running the server.

Any time you modify any of the source files, it will reload the page automatically and the console should output `Change detected, rebuilding site (#0)`

That concludes setting up the Hugo server! Closing out of this window will simultaneously close the server too.

## Using Visual Studio Code

Visual Studio Code comes with a great amount of features that prove very useful especially for modifying the documentation.

Visual Studio Code has built-in Git features, which allows you to easily commit your changes to your own fork by using the `.git` folder inside of the cloned repository folder.

Simply with Visual Studio Code, you can open the `ultimatexr.io` folder up, and you're able to start making the necessary changes.

On the left bar, which has all the icons in it, you can find the Git icon.
It looks like this:

![](/docs/guides/media/contributing/04SourceControl.png)

You can also press `CTRL + SHIFT + G`, which opens this menu up too.

You will see all the files you've changed. You are able to directly commit this with a message to your fork repository.

Communication is key, especially in an open-source project, so we would highly advise using clear and concise commit messages and if you're fixing one of the issues to include the keyword `fix`, `fixed`, or `fixes` and then the number of the issue ID.

You can find this on the issues page on GitHub at the start of the second text as shown below:

![](/docs/guides/media/contributing/05GitHubIssueNo.png)

In this case it's #4 so the commit should contain `fixed #4`.

### Separating commits

One of the keys to properly communicating your changes is by staging the commits. Staged files are files that are ready to be committed to the repository.

You can stage a change by clicking the plus button, this will add it to the staged changes, as shown below:

![](/docs/guides/media/contributing/06StageChanges.png)

When you've staged the proper changes, click the `Commit` button to set up your next staged changes and when you finally feel like it's ready for publishing, press the `Sync Changes` button, which will publish this to your repository over on GitHub.

That concludes the contributing guide for Visual Studio Code.
We appreciate your efforts in contributing to UltimateXR!
