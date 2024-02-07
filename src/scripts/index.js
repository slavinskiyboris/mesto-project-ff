import '../styles/index.css';
import './imageAssets'
import initialCards from "./cards";
<<<<<<< HEAD
import {createCard, deleteCard, list, handleOpenImage, handleLikeClick} from "./cardManager";
=======
import {createCard, deleteCard, list, handleLikeClick} from "./cardManager";
>>>>>>> d131715 (Refactoring code.)
import {closeModal, openModal} from "./modal";

const popupCard = document.querySelector('.popup_type_new-card');
const popupAddCard = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupButtonEdit = document.querySelector('.profile__edit-button');
const profileTitleElement = document.querySelector('.profile__title');
const profileDescriptionElement = document.querySelector('.profile__description');
const formElement = document.forms['edit-profile'];
const nameInput = formElement.elements.name;
const descriptionInput = formElement.elements.description;
const formCardElement = document.forms['new-place'];
const nameCardInput = formCardElement.elements['place-name'];
const linkCardInput = formCardElement.elements.link;
const closeButtons = document.querySelectorAll('.popup__close');
<<<<<<< HEAD
=======
const popupImage = document.querySelector('.popup_type_image');
const imageElement = document.querySelector('.popup__image');
const captionElement = document.querySelector('.popup__caption');
>>>>>>> d131715 (Refactoring code.)

initialCards.forEach(function (element) {
    const card = createCard(element, deleteCard, handleLikeClick, handleOpenImage);
    list.append(card);
});

function handleCardFormSubmit(evt) {
    evt.preventDefault();

    const nameCardValue = nameCardInput.value;
    const linkCardValue = linkCardInput.value;

    const newCard = createCard({
        name: nameCardValue,
        link: linkCardValue,
        alt: nameCardValue
    }, deleteCard, handleLikeClick, handleOpenImage);

    list.prepend(newCard);

    closeModal(popupCard);
    formCardElement.reset();
}
formCardElement.addEventListener('submit', handleCardFormSubmit);
function handleEditProfile(nameValue, descriptionValue) {
    profileTitleElement.textContent = nameValue;
    profileDescriptionElement.textContent = descriptionValue;
}
function handleFormSubmit(evt) {
    evt.preventDefault();
    handleEditProfile(nameInput.value, descriptionInput.value);
    closeModal(popupEdit);
}
<<<<<<< HEAD
=======

export function handleOpenImage(imageLink, imageName) {

    imageElement.src = imageLink;
    imageElement.alt = imageName;

    captionElement.textContent = imageName;

    openModal(popupImage);
}
>>>>>>> d131715 (Refactoring code.)
formElement.addEventListener('submit', handleFormSubmit);
popupAddCard.addEventListener('click', function () {
    openModal(popupCard);
});
popupButtonEdit.addEventListener('click', function () {
    openModal(popupEdit);
    nameInput.value = profileTitleElement.textContent;
    descriptionInput.value = profileDescriptionElement.textContent;
});
closeButtons.forEach(function (button)  {
    button.addEventListener('click', function () {
        const popupElement = button.closest('.popup');
        closeModal(popupElement);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.classList.add('popup_is-animated');
    });
});

// import whoIsTheGoat from "./scripts/imageAssets";
//
// whoIsTheGoat.forEach(function (element) {
//     const header = document.querySelector('.header');
//     const imgElement = document.createElement('img');
//     imgElement.src = element.link.href;
//     imgElement.alt = element.name;
//     header.appendChild(imgElement);
// });