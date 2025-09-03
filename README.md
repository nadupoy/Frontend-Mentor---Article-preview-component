# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS3
- CSS Grid
- Mobile-first workflow

### What I learned

**1. I was introduced to the HTML [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element and managed to use it in an earlier [commit](https://github.com/nadupoy/Frontend-Mentor---Article-preview-component/commit/f050c8012441b27b6439214069b87610f42d8393) of my code**

```html
<dialog>
  <p>SHARE</p>
  <ion-icon class="social-media-icons" name="logo-facebook"></ion-icon>
  <ion-icon class="social-media-icons" name="logo-twitter"></ion-icon>
  <ion-icon class="social-media-icons" name="logo-pinterest"></ion-icon>
</dialog>
```

**2. Adding `<svg>` elements in HTML to enable styling and manipulation in CSS and JavaScript**

```html
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
  <path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" id="path2">
</svg>
```

**3. Using the [`.toggle()`](https://www.w3schools.com/howto/howto_js_toggle_class.asp) method to toggle between CSS classes, enabling switching between CSS properties**

```javascript
function toggleDialog() {
  ...
  shareButton.classList.toggle('toggle-share-icons');
  shareIcon.classList.toggle('share-icon-color');
  michelleAppleton.classList.toggle('michelle-appleton-hidden');
  socialMediaIcons.classList.toggle('social-media-icons');
  shareBackground.classList.toggle('share');
  dialogArrow.classList.toggle('dialog-arrow');
}
```

**4. `git pull origin main --allow-unrelated-histories` command**

This was a past project that I decided to update using **_Vite_**. I opened a new folder on my pc, initialized [Git]() and cloned the existing repository from **_Github_**.

After making the updates, commiting the changes and running the `git push` command, I encountered the following error in my **_VS Code_** terminal:

```
fatal: refusing to merge unrelated histories
```

After much effort trying to resolve the issue on my own by referring to Git documentation, I opted to prompt **_Gemini AI_** which outlined the issue I was facing in exactly the same way I was experiencing it as follows:

```
This happens because the repository on GitHub and your local repository were created independently and have no shared commit history. Git, by default, is designed to prevent you from merging two completely separate projects by accident.

For example, this occurs if:

You created a new repository on GitHub (which adds a README.md or a .gitignore file and creates a first commit).

You then ran git init on your local computer in a folder that already had files in it and created a first commit.

When you try to git pull, Git sees two different "first commits" that have no common ancestor, so it refuses to merge them.
```

I resolved the issue by using the `--allow-unrelated-histories-flag` when running the `git pull` command as suggested by **_Gemini AI_**:

```
git pull origin main --allow-unrelated-histories
```

### Continued development

- Element positioning in CSS.

_N/B: The positioning of the share icons on desktop devices still needs correction. I can't seem to get them to stay in place across varying screen sizes on desktop. ☹️_

- [classList](https://www.w3schools.com/jsref/prop_element_classlist.asp) Property

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [W3 Schools](https://www.w3schools.com/)

## Author

- LinkedIn - [Grace Sampao](https://www.linkedin.com/in/grace-sampao-49a3129b/)
- Frontend Mentor - [@nadupoy](https://www.frontendmentor.io/profile/nadupoy)
- Github - [@nadupoy](https://github.com/nadupoy)
