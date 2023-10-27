import styles from './Home.module.css';

import { Form } from '../../components/Form';
import { Notes } from '../../components/Notes';

export function HomePage() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>Notes App</h1>
        </header>
        <Notes />
        <Form />
      </div>
    </div>
  );
}
