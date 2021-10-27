import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: false,
  reducers: {
    switchTheme: (state) => {
      return !state;
    },
  },
});
