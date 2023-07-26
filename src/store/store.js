import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartItemCountSlice } from "./cartItemCounter";
import { productCartSlice } from "./productCart";




const rootReducer = combineReducers({
    cartItemCount: cartItemCountSlice.reducer,
    productCart: productCartSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})