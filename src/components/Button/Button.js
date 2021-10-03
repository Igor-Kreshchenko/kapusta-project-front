import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ Button, buttonText }) => {
  return (
    <button type="button" onClick={Button} className={styles.button}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  Button: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Button;
