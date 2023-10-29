import styles from './button.module.css';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className={styles.root} {...rest}>
      {children}
    </button>
  );
}
