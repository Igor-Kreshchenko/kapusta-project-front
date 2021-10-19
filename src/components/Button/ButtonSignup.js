import styles from "./ButtonSignup.module.scss";

const ButtonSignup = ({ buttonHandler }) => {
  return (
    <button
      type="submit"
      onClick={buttonHandler}
      className={styles.button__signup}
    >
      РЕГИСТРАЦИЯ
    </button>
  );
};

export default ButtonSignup;
