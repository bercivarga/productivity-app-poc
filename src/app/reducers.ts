import { createReducer, PayloadAction } from "@reduxjs/toolkit";

export const noteReducer = createReducer({count: 0}, {
  increment: (state, action: PayloadAction) => {
      console.warn('hey')
    if (action.type === "HEY") {
      return {count: state.count++};
    }
  },
});
