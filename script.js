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
    const dialogBox = document.querySelector('dialog');
    
    if (dialogBox.open == false) {
        dialogBox.show();
    } else {
        dialogBox.close();
    }
}