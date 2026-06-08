import {saveContact} from "./contactsList.js";

const contactForm = document.querySelector('[data-contact-form]')

const getData = (event) => {
    event.preventDefault()

    const formData = new FormData(contactForm)
    const objectData = Object.fromEntries(formData)

    if (contactForm.elements['saveButton'].dataset.edit === 'true') {
        saveContact(objectData)
        contactForm.elements['saveButton'].dataset.edit = 'false'
    } else {
        objectData['id'] = crypto.randomUUID() ?? Date.now();
        saveContact(objectData)
    }
}

export {contactForm, getData}