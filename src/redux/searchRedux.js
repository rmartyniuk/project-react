export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

//selectors
export const stateSearchString = (searchString) => searchString;

//actions
const createActionName = (actionName) => `app/strings/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

const searchStringReducer = (statePart = '', action) => {
    switch (action.type) {
        case UPDATE_SEARCHSTRING:
            return action.payload
        default:
            return statePart;
    }
}

export default searchStringReducer