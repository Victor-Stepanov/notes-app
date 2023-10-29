import React from 'react';

import styles from './icon-button.module.css';

interface IconButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function IconButton({ children, ...rest }: IconButtonProps) {
  return (
    <button className={styles.root} {...rest}>
      {children}
    </button>
  );
}
