import {addContactButton, showModal} from "./modal.js";
import {contactForm, getData} from "./getContactData.js";
import {renderContacts} from "./contactsList.js";

addContactButton.addEventListener("click", showModal)
contactForm.addEventListener('submit', getData)

document.addEventListener("DOMContentLoaded", renderContacts)