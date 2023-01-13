import NumerosReducer from "./reducers/numerosReducer";

const { combineReducers, createStore } = require("redux");

const reducers = combineReducers({
    numeros: NumerosReducer
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig