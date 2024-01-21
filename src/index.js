import './styles/index.css';

const addIconImage = new URL('./images/add-icon.svg', import.meta.url);
const avatarImage = new URL('./images/avatar.jpg', import.meta.url);
const card1Image = new URL('./images/card_1.jpg', import.meta.url)
const card2Image = new URL('./images/card_2.jpg', import.meta.url)
const card3Image = new URL('./images/card_3.jpg', import.meta.url)
const closeImage = new URL('./images/close.svg', import.meta.url)
const deleteIconImage = new URL('./images/delete-icon.svg', import.meta.url)
const editIconImage = new URL('./images/edit-icon.svg', import.meta.url)
const likeActiveImage = new URL('./images/like-active.svg', import.meta.url)
const likeInactiveImage = new URL('./images/like-inactive.svg', import.meta.url)
const logoImage = new URL('./images/logo.svg', import.meta.url)

const whoIsTheGoat = [
    { name: 'Add Icon', link: addIconImage },
    { name: 'Avatar Image', link: avatarImage },
    { name: 'Card One', link: card1Image },
    { name: 'Card Two', link: card2Image },
    { name: 'Card Three', link: card3Image },
    { name: 'Close Image', link: closeImage },
    { name: 'Delete Icon', link: deleteIconImage },
    { name: 'Edit Icon', link: editIconImage },
    { name: 'Like Active', link: likeActiveImage },
    { name: 'Like Inactive', link: likeInactiveImage },
    { name: 'Logo Image', link: logoImage },
];

const initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

const template = document.querySelector('#card-template').content;
const placesContainer = document.querySelector('.places');
const list = placesContainer.querySelector('.places__list');
function createCard (element, deleteCard) {
    const templateCopy = template.cloneNode(true);
    templateCopy.querySelector('.card__title').textContent = element.name;
    templateCopy.querySelector('.card__image').src = element.link;
    templateCopy.querySelector('.card__image').alt = element.alt;
    templateCopy.querySelector('.card__delete-button').addEventListener('click', deleteCard);
    return templateCopy;
}
function deleteCard(element) {
    const item = element.target.closest('.card');
    item.remove();
}
initialCards.forEach(function (element) {
    const card = createCard(element, deleteCard);
    list.append(card);
});