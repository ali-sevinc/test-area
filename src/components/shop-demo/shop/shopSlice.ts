import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ItemType } from "./Shop";

export type CartItem = ItemType & { quantity: number };
export interface ShopState {
  cart: CartItem[];
  showCart: boolean;
  searchTerm: string;
}

const initialState: ShopState = {
  cart: [],
  showCart: false,
  searchTerm: "all",
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existedItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (existedItem) {
        state.cart = state.cart.map((item) =>
          item.id === existedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      const existedItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (!existedItem) return;

      if (existedItem?.quantity > 1) {
        state.cart = state.cart.map((item) =>
          item.id === existedItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      } else {
        state.cart = state.cart.filter((item) => item.id !== existedItem.id);
      }
    },
    clearItem(state, action: PayloadAction<{ id: number }>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    showCartModal(state) {
      state.showCart = true;
    },
    hideCartModal(state) {
      state.showCart = false;
    },
    searhHandle(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  addItem,
  removeItem,
  searhHandle,
  showCartModal,
  hideCartModal,
  clearItem,
} = shopSlice.actions;

export default shopSlice.reducer;
