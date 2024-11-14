import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { driversPageSlice } from './driversPageSlice';
import { racesPageSlice } from './racesPageSlice';

export const store = configureStore({
  reducer: combineReducers({
    driversPage: driversPageSlice.reducer,
    racesPage: racesPageSlice.reducer,
  }),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
