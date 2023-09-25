import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

const initialState = {
  cartItems: courseItems,
  quantity: 5,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity += 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity -= 1;
    },
    calcTotal: (state) => {
      let totalSum = 0;
      let totalQuantity = 0;
      state.cartItems.forEach((item) => {
        totalSum += item.quantity * item.price;
        totalQuantity += item.quantity;
      });
      state.quantity = totalQuantity;
      state.total = totalSum;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calcTotal } = cartSlice.actions;

export default cartSlice.reducer;
