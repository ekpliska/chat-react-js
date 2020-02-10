
const initialState = {
    items: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'FILES:ADD_FILE':
            return {
                ...state,
                items: [...state.items, payload]
            };
        case 'FILES:REMOVE_FILE': 
            return {
                ...state,
                items: state.items.filter(file => file._id !== payload)
            }
        default:
            return state;
    }
}