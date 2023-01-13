const { combineReducers } = require("redux");

const reducers = combineReducers({
    numeros: function(state, action){
        console.log(state, " ", action)
        return{
            min:1,
            max:10
        }
    }
})