import {drawContact} from "./drawContact.js";
import {closeModal, showModal} from "./modal.js";
import handleStorage from "./localStorage.js";
import {contactForm} from "./getContactData.js";

export const contactsListElement = document.querySelector('.contacts__list')
export const emptyListTitle = document.querySelector('.contacts__list-empty-title')

export let contactsList = JSON.parse(localStorage.getItem("contactsList")) || [];

export const renderContacts = () => {
    if (!contactsList.length) {
        emptyListTitle.classList.add('contacts__list-empty-title--visible');
    } else {
        contactsList.forEach(contact => {
            drawContact(contact)
        })
    }
}

let editId = '';

export const saveContact = (contact) => {

    if (contactsList.find(contactElement => contactElement.id === editId) && contactForm.elements['saveButton'].dataset.edit === 'true') {
        const index = contactsList.findIndex(item => item.id === editId);
        contact['id'] = editId;
        contactsList[index] = contact

        const contactElement = document.getElementById(editId);
        const contactDataElements = contactElement.querySelectorAll('[data-logo], [data-name-surname], [data-phone], [data-email]')

        contactElement.classList.add('contact-change');

        contactDataElements[0].textContent = `${contact.name[0].toUpperCase()}${contact.surname[0].toUpperCase()}`
        contactDataElements[1].textContent = `${contact.name} ${contact.surname}`
        contactDataElements[2].textContent = `${contact.phone}`
        contactDataElements[3].textContent = `${contact.email}`

        setTimeout(() => {
            contactElement.classList.remove('contact-change');
        }, 200)
    } else {
        const element = drawContact(contact)
        element.classList.add('contacts__list-item--add')
        contactsList.push(contact)

        setTimeout(() => {
            element.classList.remove('contacts__list-item--add')
        }, 300)
    }

    handleStorage('SAVE')
    closeModal()
}

const editContact = (contactId) => {
    const contactData = contactsList.find(contact => contact.id === contactId);

    contactForm.elements['saveButton'].dataset.edit = 'true'

    Object.keys(contactData).forEach(key => {
        const formElement = contactForm.elements[key]

        if (formElement) {
            formElement.value = contactData[key];
        }
    });

    showModal()

    return contactData.id
}

const deleteContact = (contactId) => {
    const contactElement = document.getElementById(contactId);
    const deleteContactIndex = contactsList.indexOf(contactsList.find(contact => contact.id === contactElement.id));
    contactElement.classList.add('contacts__list-item--delete');

    setTimeout(() => {
        contactsList.splice(deleteContactIndex, 1);
        contactElement.remove()
        handleStorage('SAVE')
    }, 300)
}

const changeContact = (event) => {
    const pressedButton = event.target.closest('[data-button-func]')
    const pressedButtonId = pressedButton.dataset.contactId;

    if (pressedButton.dataset.buttonFunc === 'delete') {
        deleteContact(pressedButtonId);
    }
    if (pressedButton.dataset.buttonFunc === 'edit') {
        editId = editContact(pressedButtonId)
    }
}

contactsListElement.addEventListener('click', changeContact)