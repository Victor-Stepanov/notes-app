import React from 'react';

import { createNote } from '../../store/features/note';
import { useAppDispatch } from '../../store/store';

export function Form() {
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}
