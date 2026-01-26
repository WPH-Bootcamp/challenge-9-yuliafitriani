import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Omit<CartItem, "quantity">>) {
      const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({
          ...action.payload,
          qty: 1,
        });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
