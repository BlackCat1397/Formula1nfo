import { createSlice } from '@reduxjs/toolkit';

export const driversPageSlice = createSlice({
  name: 'driversPage',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const {
  increment: incrementDriversPage,
  decrement: decrementDriversPage,
} = driversPageSlice.actions;
