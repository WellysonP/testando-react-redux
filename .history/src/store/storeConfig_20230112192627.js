const { combineReducers, createStore } = require("redux");

const reducers = combineReducers({
    numeros: function(state, action){
        console.log(state, " ", action)
        return{
            min:1,
            max:10
        }
    }
})

function storeConfig(){
    return configStore(reducers)
}

export default storeConfig