import {contactForm} from "./getContactData.js";

const modalOverlay = document.querySelector('.modal-overlay');
const addContactButton = document.querySelector(".contacts__add-button");
const closeModalButton = document.querySelector('.modal-add-contact__close-button');

export const closeModal = () => {
    modalOverlay.classList.remove('modal-overlay--visible');

    addContactButton.addEventListener('click', showModal)
    closeModalButton.removeEventListener('click', closeModal)

    Object.entries(contactForm).forEach((element) => {
        element[1].value = ''
    })
}

export const showModal = () => {
    modalOverlay.classList.add('modal-overlay--visible');

    closeModalButton.addEventListener('click', closeModal)
    addContactButton.removeEventListener('click', showModal)
}

export {addContactButton};