const initialState = {
    items: [],
    currentDialogId: null
};

// action.type, action.payload
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DIALOGS:SET_ITEMS':
            return {
                items: payload
            };
        case 'DIALOGS:SET_CURRENT_DIALOG_ID':
            return {
                ...state,
                currentDialogId: payload
            };
        default:
            return state;
    }
}