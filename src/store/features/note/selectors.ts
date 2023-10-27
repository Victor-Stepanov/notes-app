import { RootState } from '../../store';

export const selectNoteModule = (state: RootState) => state.note;
