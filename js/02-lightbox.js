import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listOfGalleryCard = document.querySelector(".gallery");

const galleryImage = galleryItems
  .map((image) => {
    const { preview, original, description } = image;
    return `<li><a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a></li>`;
  })
  .join("");

listOfGalleryCard.insertAdjacentHTML("beforeend", galleryImage);

const onImageClickToSlider = (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
};

listOfGalleryCard.addEventListener("click", onImageClickToSlider);
