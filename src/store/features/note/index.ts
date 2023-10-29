import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Note, NotesState } from '../../../interfaces/note.interface';
import { loadState } from '../../storage';

const initialState: NotesState = loadState<NotesState>('notes') || {
  notes: [{ id: '1', text: 'Example note' }],
};
const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    createNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const { id, text } = action.payload;
      const note = state.notes.find((note) => note.id === id);
      if (note) {
        note.text = text;
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const { createNote, editNote, deleteNote } = noteSlice.actions;

export const noteReducer = noteSlice.reducer;
