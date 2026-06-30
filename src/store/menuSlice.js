import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMeals } from '../api/mealsApi';
import { getOrders } from '../api/ordersApi';

const STEP = 6;

export const fetchMenu = createAsyncThunk('menu/fetchMenu', async (request) => {
  const [meals, orders] = await Promise.all([getMeals(request), getOrders(request)]);

  return { meals, orders };
});

const initialState = {
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
    selectCategory(state, action) {
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
