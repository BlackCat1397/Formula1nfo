import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE, Storage } from 'redux-persist';
import { MMKV } from 'react-native-mmkv';

import { driversPageSlice } from './driversPageSlice';
import { racesPageSlice } from './racesPageSlice';

const MMKVstorage = new MMKV();
const storage: Storage = {
  setItem: async (name, value) => {
    return MMKVstorage.set(name, JSON.stringify(value));
  },
  getItem: async (name) => {
    const value = MMKVstorage.getString(name);
    return (value && JSON.parse(value)) ?? null;
  },
  removeItem: async (name) => {
    return MMKVstorage.delete(name);
  },
};

const driversPageReducerPersistConfig = {
  key: 'driversPageReducer',
  storage,
};

export const store = configureStore({
  reducer: combineReducers({
    driversPage: persistReducer(driversPageReducerPersistConfig, driversPageSlice.reducer),
    racesPage: racesPageSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
