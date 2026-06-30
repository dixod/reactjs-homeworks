import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type AuthUser = {
  email: string | null;
  uid: string;
};

type AuthState = {
  user: AuthUser | null;
  loading: boolean;
};

const initialState: AuthState = {
  user: null,
  loading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
      state.loading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.loading = false;
    },
    finishLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { setUser, clearUser, finishLoading } = authSlice.actions;

export default authSlice.reducer;
