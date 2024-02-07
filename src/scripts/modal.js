function openModal(popupElement) {
    popupElement.classList.add('popup_is-opened');

    popupElement.addEventListener('click', handleOverlayClose)
    document.addEventListener('keydown', handleEscClose);
}

function closeModal(popupElement) {
    popupElement.classList.remove('popup_is-opened');

    popupElement.removeEventListener('click', handleOverlayClose);
    document.removeEventListener('keydown', handleEscClose);
}

function handleEscClose(evt) {
    if (evt.key === "Escape") {
        const modalWindow = document.querySelector('.popup_is-opened');
        closeModal(modalWindow)
    }
}

export function handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
        closeModal(evt.currentTarget);
    }
}

export {openModal, closeModal}