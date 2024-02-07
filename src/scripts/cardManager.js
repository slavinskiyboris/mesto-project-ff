import initialCards from "./cards";
import {handleLikeClick} from "./modal";
import {openModal} from "./modals";

const template = document.querySelector('#card-template').content;
const placesContainer = document.querySelector('.places');
const list = placesContainer.querySelector('.places__list');
const popupImage = document.querySelector('.popup_type_image');


function createCard (element, deleteCard, handleLikeClick, handleOpenImage) {
    const templateCopy = template.cloneNode(true);
    const cardImage = templateCopy.querySelector('.card__image');
    const cardTitle = templateCopy.querySelector('.card__title');
    const deleteButton = templateCopy.querySelector('.card__delete-button');
    const likeButton = templateCopy.querySelector('.card__like-button');



    cardTitle.textContent = element.name;
    cardImage.src = element.link;
    cardImage.alt = element.alt;

    cardImage.addEventListener('click', () => handleOpenImage(cardImage.src, cardTitle.textContent));


    deleteButton.addEventListener('click', deleteCard);
    likeButton.addEventListener('click', handleLikeClick);

    return templateCopy;
}

function deleteCard(element) {
    const item = element.target.closest('.card');
    item.remove();
}
initialCards.forEach(function (element) {
    const card = createCard(element, deleteCard, handleLikeClick, handleOpenImage);
    list.append(card);
});

function handleOpenImage(imageLink, imageName) {
    const imageElement = document.querySelector('.popup__image');
    const captionElement = document.querySelector('.popup__caption');

    imageElement.src = imageLink;
    imageElement.alt = imageName;

    captionElement.textContent = imageName;

    openModal(popupImage);
}

export {createCard, deleteCard, list, handleOpenImage};