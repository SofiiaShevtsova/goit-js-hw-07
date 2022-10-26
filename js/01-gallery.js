import { galleryItems } from "./gallery-items.js";

// Change code below this line
console.log(galleryItems);

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

    if (instance.visible()) {
    window.addEventListener("keydown", (event) => {
            if (event.code === "Escape") {
             instance.close()
            } 
        })
    }   
};


boxForGalleryCard.addEventListener("click", onImageClick);
