import NumerosReducer from "./reducers/numerosReducer";

const { combineReducers, createStore } = require("redux");

const reducers = combineReducers({
    numeros: function (state, action) {
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
                NumerosReducer
        }
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig