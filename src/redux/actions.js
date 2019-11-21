import { objectFromStorage } from '../storageHelper'

export const ADD_NOTE = 'ADD_NOTE';
export const STORE_DRAFT = 'STORE_DRAFT';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const SEARCH_NOTE = 'SEARCH_NOTE';


export function addNote(title, description, author) {
    return {
        type: ADD_NOTE,
        payload: { 
            title, 
            description,
            author, 
            date: new Date().toISOString() 
        }
    };
}

export function storeDraft(title, description, author) {
    objectFromStorage('draft', [].push({title, description, author}))
    return {
        type: STORE_DRAFT,
        payload: { 
            title, 
            description,
            author,
        }
    };
}

export function removeNote(id) {
    return { type: REMOVE_NOTE, id: id };
}

export const searchNote = searchText => ({
    type: SEARCH_NOTE,
    payload: searchText
});
