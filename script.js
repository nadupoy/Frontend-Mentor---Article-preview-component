"use strict";

/*
- In a nutshell, the social media icons become visible when the share icon is clicked.
- Actions to be performed:
    1. Display the share icons
    2. Change the background color of the share icon
    3. Change the color of the share icon itself
- The styling & positioning of the share icons is different on mobile & desktop devices.
*/

const shareButton = document.querySelector('button');

shareButton.addEventListener('click', toggleDialog);

function toggleDialog() {
    const shareIcon = document.querySelector('#path2');
    const michelleAppleton = document.querySelector('.michelle-appleton');
    const socialMediaIcons = document.querySelector('.social-media-icons-hidden');
    const shareBackground = document.querySelector('section > div');
    const dialogArrow = document.querySelector('#svg1');

    shareButton.classList.toggle('toggle-share-icons');
    shareIcon.classList.toggle('share-icon-color');
    michelleAppleton.classList.toggle('michelle-appleton-hidden');
    socialMediaIcons.classList.toggle('social-media-icons');
    shareBackground.classList.toggle('share');
    dialogArrow.classList.toggle('dialog-arrow');
}