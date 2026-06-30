import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getMeals } from '../api/mealsApi';
import type { Meal } from '../types';

const STEP = 6;

type MenuState = {
  meals: Meal[];
  loading: boolean;
  error: string;
  selectedCategory: string | null;
  visibleCount: number;
};

const initialState: MenuState = {
  meals: [],
  loading: false,
  error: '',
  selectedCategory: null,
  visibleCount: STEP,
};

export const fetchMeals = createAsyncThunk<Meal[], void, { rejectValue: string }>(
  'menu/fetchMeals',
  async (_, { rejectWithValue }) => {
    try {
      return await getMeals();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to load meals');
    }
  },
);

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = state.selectedCategory === action.payload ? null : action.payload;
      state.visibleCount = STEP;
    },
    showMore: (state) => {
      state.visibleCount += STEP;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.loading = false;
        state.meals = action.payload;
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? action.error.message ?? 'Failed to load meals';
      });
  },
});

export const { selectCategory, showMore } = menuSlice.actions;

export default menuSlice.reducer;
