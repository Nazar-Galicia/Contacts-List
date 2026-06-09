import {contactsListElement} from "./contactsList.js";

export const drawContact = ({email, phone, name, surname, id}) => {
    const contactsListItem = document.createElement("li");
    contactsListItem.classList.add('contacts__list-item')
    contactsListItem.setAttribute("id", id);

    contactsListItem.innerHTML = `
        <div class="contacts__list-item-logo-container">
            <div data-logo class="contacts__list-item-logo">${name[0].toUpperCase()}${surname[0].toUpperCase()}</div>
            <p data-name-surname class="contacts__list-item-name-surname">${name} ${surname}</p>
        </div>
        <p data-phone class="contacts__list-item-contact-info">${phone}</p>
        <p data-email class="contacts__list-item-contact-info">${email}</p>
        <div class="contacts__list-item-edit-buttons-container">
           <button data-contact-id="${id}" data-button-func="edit" class="contacts__list-item-edit-button"><img class="contacts__list-item-edit-button-icon" src="/assets/icons/edit.png" alt="edit"></button>
           <button data-contact-id="${id}" data-button-func="delete" class="contacts__list-item-edit-button contacts__list-item-edit-button--delete-button"><img class="contacts__list-item-edit-button-icon" src="/assets/icons/delete.png" alt="delete"></button>
        </div>
    `;

    contactsListElement.append(contactsListItem);

    return contactsListItem;
}