
const initialState = {
    data: false
};

// action.type, action.payload
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'USER:SET_DATA':
            return {
                ...state,
                data: payload,
            };
        default:
            return state;
    }
}