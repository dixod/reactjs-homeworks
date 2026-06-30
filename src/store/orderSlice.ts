import { createSlice } from '@reduxjs/toolkit';

type OrderState = {
  submitted: boolean;
};

const initialState: OrderState = {
  submitted: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    submitOrder(state) {
      state.submitted = true;
    },
    clearOrder(state) {
      state.submitted = false;
    },
  },
});

export const { submitOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
