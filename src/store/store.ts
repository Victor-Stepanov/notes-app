import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { noteReducer } from './features/note';

import { saveState } from './storage';

import type { TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer: {
    note: noteReducer,
  },
});

store.subscribe(() => {
  saveState(store.getState().note, 'notes');
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
