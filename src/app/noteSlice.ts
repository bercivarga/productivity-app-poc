import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface ITime {
  minute: number;
  hour: number;
  day: number;
  month: number;
  year: number;
  creationTime: number
}

export interface INote {
  id: string;
  title: string;
  content: string;
  time: ITime;
}

export function getTimeObject(): ITime {
  return {
    minute: new Date().getMinutes(),
    hour: new Date().getHours(),
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    creationTime: Date.now()
  };
}

const lipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function createNote(title: string, content: string, time: ITime): INote {
  return {
    id: nanoid(),
    title,
    content,
    time,
  };
}

const initialState = [
  createNote("Journal", lipsum, getTimeObject()),
  createNote("Practice", lipsum, getTimeObject()),
];

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    add: (
      state,
      action: PayloadAction<{ title: string; content: string; time: ITime }>
    ) => {
      return [
        ...state,
        createNote(
          action.payload.title,
          action.payload.content,
          action.payload.time
        )
      ]
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter((note) => note.id !== action.payload);
    },
    changeTitle: (state, action: PayloadAction<{id: string, newTitle: string }>) => {
      const selectedNote = state.find(note => note.id === action.payload.id);
      if (selectedNote) selectedNote.title = action.payload.newTitle;
    },
    changeContent: (state, action: PayloadAction<{id: string, newContent: string}>) => {
      const selectedNote = state.find(note => note.id === action.payload.id);
      if (selectedNote) selectedNote.content = action.payload.newContent;
    }
  },
});
