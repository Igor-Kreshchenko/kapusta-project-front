import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ buttonHandler, buttonText }) => {
  return (
    <button type="button" onClick={buttonHandler} className={styles.button}>
      {buttonText}
    </button>
  );
};

/* Button.propTypes = {
  buttonHandler: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
}; */

export default Button;
