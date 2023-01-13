const { combineReducers, createStore } = require("redux");

const reducers = combineReducers({
    numeros: function(state, action){
        // console.log(state, " ", action)
        return{
            min:1,
            max:3
        }
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig