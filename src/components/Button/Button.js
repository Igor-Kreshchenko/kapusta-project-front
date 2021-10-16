import styles from "./Button.module.scss";

const Button = ({ type, buttonHandler, buttonText }) => {
  return (
    <button type={type} onClick={buttonHandler} className={styles.button}>
      {buttonText}
    </button>
  );
};

export default Button;
