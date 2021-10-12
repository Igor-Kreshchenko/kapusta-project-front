import PropTypes from "prop-types";
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

/* Button.propTypes = {
  buttonHandler: PropTypes.func.isRequired,
}; */

export default ButtonSignup;
