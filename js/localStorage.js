import {contactsList, emptyListTitle} from "./contactsList.js";

const handleStorage = (func, id='') => {
    switch(func) {
        case 'SAVE': {
            localStorage.setItem('contactsList', JSON.stringify(contactsList))

            if (!contactsList.length) {
                emptyListTitle.classList.add('contacts__list-empty-title--visible')
            } else {
                emptyListTitle.classList.remove('contacts__list-empty-title--visible')
            }

            break;
        }
    }
}

export default handleStorage