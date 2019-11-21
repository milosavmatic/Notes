import { ADD_NOTE, REMOVE_NOTE, STORE_DRAFT } from './actions';
import notes from '../data/notes.json';
import { objectToStorage } from '../storageHelper'

const initialState = {
    notes: notes,
    draft: {},
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE:
            return {
                notes: [...state.notes, action.payload],
                draft: objectToStorage('draft', [...state.notes, action.payload])
            };
        case REMOVE_NOTE:
            return {
                notes: state.notes.filter((note, index) => index !== action.id)
            };
        case STORE_DRAFT:        
            return { ...state, draft: action.payload };

        default:
            return state;
    }
}
export default reducer;
