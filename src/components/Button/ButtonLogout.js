import styles from "./ButtonLogout.module.scss";

const ButtonLogout = ({ buttonHandler }) => {
  return (
    <button
      type="button"
      onClick={buttonHandler}
      className={styles.button__logout}
    > <span className={styles.button__text}>Выйти</span>
    </button>
  );
};

export default ButtonLogout;
