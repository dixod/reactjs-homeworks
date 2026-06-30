import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getMeals } from '../api/mealsApi';
import { getOrders } from '../api/ordersApi';
import type { FetchRequest, Meal, Order } from '../types';

const STEP = 6;

export const fetchMenu = createAsyncThunk<{ meals: Meal[]; orders: Order[] }, FetchRequest>(
  'menu/fetchMenu',
  async (request) => {
  const [meals, orders] = await Promise.all([getMeals(request), getOrders(request)]);

  return { meals, orders };
  },
);

type MenuState = {
  meals: Meal[];
  orders: Order[];
  visibleCount: number;
  cartCount: number;
  loading: boolean;
  error: string;
  selectedCategory: string | null;
};

const initialState: MenuState = {
  meals: [],
  orders: [],
  visibleCount: STEP,
  cartCount: 0,
  loading: false,
  error: '',
  selectedCategory: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    addToCart(state) {
      state.cartCount += 1;
    },
    selectCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload === state.selectedCategory ? null : action.payload;
      state.visibleCount = STEP;
    },
    showMore(state) {
      state.visibleCount += STEP;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.meals = action.payload.meals;
        state.orders = action.payload.orders;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load data';
      });
  },
});

export const { addToCart, selectCategory, showMore } = menuSlice.actions;
export default menuSlice.reducer;
