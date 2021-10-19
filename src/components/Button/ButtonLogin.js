import styles from "./ButtonLogin.module.scss";

const ButtonLogin = ({ buttonHandler }) => {
  return (
    <button
      type="submit"
      onClick={buttonHandler}
      className={styles.button__login}
    >
      ВОЙТИ
    </button>
  );
};

export default ButtonLogin;
