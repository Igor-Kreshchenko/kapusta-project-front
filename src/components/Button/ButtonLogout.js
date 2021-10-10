import styles from "./ButtonLogout.module.scss";

const ButtonLogout = ({ buttonHandler }) => {
  return (
    <button
      type="button"
      onClick={buttonHandler}
      className={styles.button__logout}
    > Выйти
    </button>
  );
};

export default ButtonLogout;
