import styles from './Home.module.css';

import { Notes } from '../../components/Notes';

export function HomePage() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.title}>Notes App</h1>
      </header>
      <Notes />
    </div>
  );
}
