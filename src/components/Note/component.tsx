import { useState } from 'react';

import styles from './note.module.css';

import { editNote, deleteNote } from '../../store/features/note';
import { useAppDispatch } from '../../store/store';
import { EditIcon, DeleteIcon, IconButton, Textarea, Button } from '../ui';

export function Note({ id, text }: { id: string; text: string }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editNote({ id, text: editText }));
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteNote(id));
  };

  return (
    <div className={styles.note}>
      <div className={styles.control}>
        <IconButton onClick={handleEdit}>
          <EditIcon />
        </IconButton>
      </div>
      {isEditing ? (
        <>
          <Textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <Button onClick={handleEdit}>Edit</Button>
        </>
      ) : (
        <p className={styles.text}>{text}</p>
      )}
      <div className={styles.control}>
        <IconButton onClick={() => handleDelete(id)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}
