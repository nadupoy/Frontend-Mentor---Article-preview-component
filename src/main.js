const shareButton = document.getElementById("share-button");
const nameCard = document.querySelector(".name-card");
const author = document.querySelector(".author");
const socialMedia = document.querySelector(".hide");
const shareIcon = document.querySelector(".share-icon");

let screenWidth = screen.width;

shareButton.addEventListener("click", toggleShare);

function toggleShare() {
  if (screenWidth >= 320 && screenWidth <= 768) {
    nameCard.classList.toggle("name-card-active");
    author.classList.toggle("hide");
    socialMedia.classList.toggle("social-media-icons");
    shareButton.classList.toggle("share-button-active");
    shareIcon.classList.toggle("share-icon-active");
  }
}
