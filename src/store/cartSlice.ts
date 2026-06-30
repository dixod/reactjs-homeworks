import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, Meal } from '../types';

type CartState = {
  items: CartItem[];
};

type AddToCartPayload = {
  meal: Meal;
  quantity: number;
};

type UpdateQuantityPayload = {
  id: string;
  quantity: number;
};

const initialState: CartState = {
  items: [],
};

function normalizeQuantity(quantity: number) {
  if (!Number.isFinite(quantity)) {
    return 1;
  }

  return Math.max(1, Math.floor(quantity));
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const quantity = normalizeQuantity(action.payload.quantity);
      const existingItem = state.items.find((item) => item.meal.id === action.payload.meal.id);

      if (existingItem) {
        existingItem.quantity += quantity;
        return;
      }

      state.items.push({
        meal: action.payload.meal,
        quantity,
      });
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.meal.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const existingItem = state.items.find((item) => item.meal.id === action.payload.id);

      if (!existingItem) {
        return;
      }

      existingItem.quantity = normalizeQuantity(action.payload.quantity);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
