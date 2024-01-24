import './styles/index.css';
import {createCard, deleteCard, list} from "./scripts/cardManager";
import initialCards from "./scripts/cards";
// import whoIsTheGoat from "./scripts/imageAssets";
//
// whoIsTheGoat.forEach(function (element) {
//     const header = document.querySelector('.header');
//     const imgElement = document.createElement('img');
//     imgElement.src = element.link.href;
//     imgElement.alt = element.name;
//     header.appendChild(imgElement);
// });

initialCards.forEach(function (element) {
    const card = createCard(element, deleteCard);
    list.append(card);
});