import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        product: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addproducts: (state, action) => {
            state.quantity += 1;
            state.product.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        }
    }
});

export const { addproducts } = cartSlice.actions;
export default cartSlice.reducer;