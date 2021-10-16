import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    counter: (state = {value: 0}) => state,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
