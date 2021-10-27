import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {noteSlice} from "./noteSlice";

export const store = configureStore({
  reducer: {
    notes: noteSlice.reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
