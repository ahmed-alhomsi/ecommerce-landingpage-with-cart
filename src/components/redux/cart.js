import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: {
    items: [],
    totalPrice: 0
  },
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.count += 1
    // },
    // decrement: (state) => {
    //   state.count -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.count += action.payload
    // },
    addItem: (state, item) => {
        console.log(state);
        state.cart.items = state.cart.items.push(item);
        state.cart.totalPrice = state.cart.totalPrice + item.price;
    },
    increaseItem: (state, id) => {
        const newItems = state.items
    }
  },
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer