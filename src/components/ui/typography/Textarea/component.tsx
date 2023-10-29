import React from 'react';

import styles from './text-area.module.css';
export interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export function Textarea({ children, ...rest }: TextareaProps) {
  return (
    <textarea className={styles.root} {...rest}>
      {children}
    </textarea>
  );
}
