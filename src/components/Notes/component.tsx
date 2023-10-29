import styles from './Notes.module.css';

import { selectNoteModule } from '../../store/features/note/selectors';
import { useAppSelector } from '../../store/store';

import { CreateForm } from '../CreateForm';
import { Note } from '../Note/component';

export function Notes() {
  const { notes } = useAppSelector(selectNoteModule);

  return (
    <section className={styles.section}>
      <ul className={styles.noteList}>
        {notes.map((note) => (
          <li key={note.id}>
            <Note id={note.id} text={note.text} />
          </li>
        ))}
        <CreateForm />
      </ul>
    </section>
  );
}
