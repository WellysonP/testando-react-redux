const initialState = {
    min: 1,
    max: 3
}

export default function (state, action) {
    switch (action.type) {
        case "NUM_MIN_ALTERADO":
            return {
                ...state,
                min: action.payload
            }
            case "NUM_MAX_ALTERADO":
                return{
                    ...state,
                    max: action.payload
                }
        default:
            return initialState
    }
}