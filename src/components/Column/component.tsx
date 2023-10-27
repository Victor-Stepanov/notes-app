import styles from './Column.module.css';

export function Column({ columnTitle }: { columnTitle: string }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{columnTitle}</h2>
    </div>
  );
}
