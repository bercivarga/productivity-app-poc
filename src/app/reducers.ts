import { createReducer, PayloadAction } from "@reduxjs/toolkit";

export const noteReducer = createReducer(0, {
  logStuff: (state, action: PayloadAction) => {
    if (action.type === "HEY") {
      console.log("hey");
      return state;
    }
  },
});
