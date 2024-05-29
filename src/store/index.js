import { createStore } from 'redux';



const counterReducer =(state ={counter:0, increaseBy:0}, action)=>{
    if(action.type === "INCREMENT"){
    return{
        counter: state.counter +1,
        increaseBy: state.increaseBy + action.payload
        }
}
    if(action.type === "DECREMENT"){
    return{
        counter: state.counter -1,
        increaseBy: state.increaseBy + action.payload
    }
}
    if(action.type === "INCREASEBY10"){
    return{
        counter: state.counter -1,
        increaseBy: state.increaseBy + action.payload
    }
}
    return state

}
const store =createStore(counterReducer)


export default store

