import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[]
    },
    reducers : {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearitem: (state, action) => {
            state.items.length = 0;
        }
    }
})

export const {addItem, removeItem, clearitem} = cartSlice.actions;
export default cartSlice.reducer;