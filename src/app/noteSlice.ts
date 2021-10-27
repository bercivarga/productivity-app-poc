import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

const lipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function createNote(title: string, content: string) {
  return {
    id: nanoid(),
    title,
    content,
  };
}

const initialState = [
  createNote("Journal", lipsum),
  createNote("Practice", lipsum),
];

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ title: string; content: string }>) => {
      state.push(createNote(action.payload.title, action.payload.content));
    },
    remove: (state, action: PayloadAction<string>) => {
      state = state.filter((note) => note.id !== action.payload);
      return state;
    },
  },
});
