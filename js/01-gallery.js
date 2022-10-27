import { galleryItems } from "./gallery-items.js";

// Change code below this line

const boxForGalleryCard = document.querySelector(".gallery");

const galleryCard = galleryItems
  .map((image) => {
    const { preview, original, description } = image;
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

boxForGalleryCard.insertAdjacentHTML("beforeend", galleryCard);

const onImageClick = (event) => {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1200">
`);
  instance.show();

  window.addEventListener("keydown", closeImageKey);
};

function closeImageKey(event) {
  if (event.code === "Escape") {
    document
      .querySelector(".basicLightbox")
      .classList.remove("basicLightbox--visible");
    window.removeEventListener("keydown", closeImageKey);
  }

}

boxForGalleryCard.addEventListener("click", onImageClick);
// class="basicLightbox basicLightbox--img basicLightbox--visible"
