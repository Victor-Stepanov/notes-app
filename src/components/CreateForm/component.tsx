import React from 'react';

import styles from './form.module.css';

import { createNote } from '../../store/features/note';
import { useAppDispatch } from '../../store/store';
import { Button, Textarea } from '../ui';

export function CreateForm() {
  const [text, setText] = React.useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text) {
      dispatch(createNote({ id: Date.now().toString(), text }));
      setText('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Textarea
        placeholder="Новая заметка..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit">Сохранить</Button>
    </form>
  );
}
