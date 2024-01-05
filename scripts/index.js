const template = document.querySelector('#card-template').content;
const placesContainer = document.querySelector('.places');
const list = placesContainer.querySelector('.places__list');
function addCard (element, deleteCard) {
    const templateCopy = template.cloneNode(true);
    templateCopy.querySelector('.card__title').textContent = element.name;
    templateCopy.querySelector('.card__image').src = element.link;
    templateCopy.querySelector('.card__delete-button').addEventListener('click', deleteCard);
    list.append(templateCopy);
}
function deleteCard(element) {
    const item = element.target.closest('.card');
    item.remove();
}
initialCards.forEach(function (element) {
    addCard(element, deleteCard);
});