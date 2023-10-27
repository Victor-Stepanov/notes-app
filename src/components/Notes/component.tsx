import styles from './Notes.module.css';

import { selectNoteModule } from '../../store/features/note/selectors';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { editNote, deleteNote } from '../../store/features/note';

export function Notes() {
  const { notes } = useAppSelector(selectNoteModule);
  const dispatch = useAppDispatch();

  const handleEdit = (id: string, newText: string) => {
    dispatch(editNote({ id, text: newText }));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteNote(id));
  };

  return (
    <section className={styles.section}>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <input
              defaultValue={note.text}
              onBlur={(e) => handleEdit(note.id, e.target.value)}
            />
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
