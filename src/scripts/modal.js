import {deleteCard, handleOpenImage} from "./cardManager";
import {closeModal, openModal} from "./modals";

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
const cardList = document.querySelector('.places__list');
const popupImage = document.querySelector('.popup_type_image');




// Функция добавление карточки

function handleAadCard(nameCardValue, linkCardValue, handleLikeClick, handleOpenImage) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    const cardName = cardElement.querySelector('.card__title')
    const cardLink = cardElement.querySelector('.card__image')
    const likeButton = cardElement.querySelector('.card__like-button');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    // Установка значений для новой карточки
    cardLink.src = linkCardValue;
    cardName.textContent = nameCardValue;
    // Ставим лайк
    likeButton.addEventListener('click', handleLikeClick);
    //Открытие картинки
    cardLink.addEventListener('click', () => handleOpenImage(linkCardValue, nameCardValue));
    // Добавление карточки в список
    cardList.prepend(cardElement);
    // Добавление обработчика событий для удаления карточки
    deleteButton.addEventListener('click', deleteCard);
    // Закрытие попапа и очистка формы
    popupCard.classList.remove('popup_is-opened');
    formCardElement.reset();

}
function handleCardFormSubmit(evt) {
    evt.preventDefault();
    handleAadCard(nameCardInput.value, linkCardInput.value, handleLikeClick, handleOpenImage);
}
formCardElement.addEventListener('submit', handleCardFormSubmit);

// Функция Попуп редактирование профиля
function handleEditProfile(nameValue, descriptionValue) {
    profileTitleElement.textContent = nameValue;
    profileDescriptionElement.textContent = descriptionValue;
    popupEdit.classList.remove('popup_is-opened');
}
function handleFormSubmit(evt) {
    evt.preventDefault();
    handleEditProfile(nameInput.value, descriptionInput.value);
}
formElement.addEventListener('submit', handleFormSubmit);


// Открытие попупа
function handleOpenModal(modalWindow, element) {
    if (element === popupCard) {
        modalWindow.addEventListener('click', function () {
            openModal(element);
        });
    } else {
        modalWindow.addEventListener('click', function () {
            openModal(element);
            nameInput.value = profileTitleElement.textContent;
            descriptionInput.value = profileDescriptionElement.textContent;
        });
        }
}
handleOpenModal(popupAddCard, popupCard)
handleOpenModal(popupButtonEdit, popupEdit);

// Закрытие попупа на крестик

function handleCloseModal(modalWindow) {
    const popupCloses = modalWindow.querySelector('.popup__close');

    popupCloses.addEventListener('click', function() {
        closeModal(modalWindow);
    })
}
handleCloseModal(popupCard);
handleCloseModal(popupEdit);
handleCloseModal(popupImage);


// Клик по кнопке лайка
export function handleLikeClick(evt) {
    // Проверяем, что клик был именно по кнопке лайка
    if (evt.target.classList.contains('card__like-button')) {
        evt.target.classList.toggle('card__like-button_is-active');
    }
}