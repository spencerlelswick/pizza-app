import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action);
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart && state.cart.length !== 0) {
        itemInCart.quantity += action.payload.quantity;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload);
      itemInCart.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity === 1 ? (item.quantity = 1) : item.quantity--;
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItem, increaseQuantity, decreaseQuantity, removeItem } =
  cartSlice.actions;
