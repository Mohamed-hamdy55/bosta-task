// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import shipmentReducer from './itemForShipment/shipingItemSlice';
import languageReducer from './language/languageSlice';

const store = configureStore({
  reducer: {
    shipment: shipmentReducer,
    language: languageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
