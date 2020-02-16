
const initialState = {
    items: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'FILES:SET_FILES':
            return {
                ...state,
                items: payload
            };
        case 'FILES:REMOVE_FILE': 
            return {
                ...state,
                items: state.items.filter(file => file.uid !== payload.uid)
            }
        default:
            return state;
    }
}