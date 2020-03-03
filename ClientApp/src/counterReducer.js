const initialState = {
    count: 0
};

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_COUNT':
            return Object.assign({}, { count: action.data });
        default:
            return state;
    }
}  