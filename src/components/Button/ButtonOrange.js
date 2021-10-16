import styles from "./ButtonOrange.module.scss";

const ButtonOrange = ({ type, buttonHandler, buttonText }) => {
  return (
    <button
      type={type}
      onClick={buttonHandler}
      className={styles.button__orange}
    >
      {buttonText}
    </button>
  );
};

export default ButtonOrange;
