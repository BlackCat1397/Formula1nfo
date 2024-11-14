import { createSlice } from '@reduxjs/toolkit';

export const racesPageSlice = createSlice({
  name: 'RacesPage',
  initialState: {
    value: 0,
  },
  reducers: {
    reset: state => {
      state.value = 0;
    },
    incremented: state => {
      state.value += 1;
    },
    decremented: state => {
      state.value -= 1;
    },
  },
});

export const {
  reset: resetRacesPage,
  incremented: incrementRacesPage,
  decremented: decrementRacesPage,
} = racesPageSlice.actions;
