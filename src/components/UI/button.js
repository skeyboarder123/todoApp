import styles from './button.module.css';

function Button(props) {
  const { onClick, title, children, disabled = false } = props;
  return (
    <button
      {...props}
      className={styles.btn_input}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
