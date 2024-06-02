import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState={
    counter:0,
    showCounter:true
}
const authInitialState={
    login: false,
}
createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers:{
    login(state){
        state.authenticated = true
    },
    logout(state){
        state.authenticated = false 
    }
  }  
})

const theCounterSlice= createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state, action){
            state.counter = state.counter+ action.payload
           

        },
        toggle(state){
            state.showCounter = !state.showCounter
        }
    }
})

const store =configureStore({
    reducer:{ theCounterSlice.reducer}
})

export const counterActions =theCounterSlice.actions
export default store

