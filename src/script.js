const shareButton = document.getElementById("share-button");
const hideButton = document.getElementById("hide-button");
const nameCard = document.querySelector(".name-card");
const nameCardDetails = document.querySelector(".name-card-details");
const socialMediaContainer = document.querySelector(
  ".social-media-container-hidden",
);
const avatar = document.querySelector(".avatar");
const name = document.querySelector(".name");
const date = document.querySelector(".date");

let screenWidth = screen.width;

shareButton.addEventListener("click", show);
hideButton.addEventListener("click", hide);

function show() {
  if (screenWidth >= 320 && screenWidth <= 768) {
    nameCard.classList.toggle("name-card-active");
    avatar.classList.toggle("hide");
    name.classList.toggle("hide");
    date.classList.toggle("hide");
    socialMediaContainer.classList.toggle("social-media-container");
  }
}

function hide() {}

console.log(shareButton);
console.log(hideButton);
console.log(nameCard);
console.log(nameCardDetails);
console.log(socialMediaContainer);
console.log(screenWidth);
