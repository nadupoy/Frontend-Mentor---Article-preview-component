const nameCard = document.querySelector(".name-card-default");
const defaultState = document.querySelector(".default-state");
const shareButton = document.querySelector(".share-icon-default");
const socialMedia = document.querySelector(".active-state-hidden");
const hideButton = document.querySelector(".share-icon-active");

function showIcons() {
  nameCard.classList.toggle("name-card-active");
  defaultState.classList.toggle("default-state-hidden");
  socialMedia.classList.toggle("active-state");
}

function hideIcons() {
  nameCard.classList.remove("name-card-active");
  defaultState.classList.remove("default-state-hidden");
  socialMedia.classList.remove("active-state");
}

shareButton.addEventListener("click", showIcons);
hideButton.addEventListener("click", hideIcons);
