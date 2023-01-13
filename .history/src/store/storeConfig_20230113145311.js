import NumerosReducer from "./reducers/numerosReducer";

const { combineReducers, createStore } = require("redux");

const reducers = combineReducers({
    numeros: NumerosReducer
})

function storeConfig() {
    // return configureStore(reducers)
    return configureStore(reducers)
}

export default storeConfig