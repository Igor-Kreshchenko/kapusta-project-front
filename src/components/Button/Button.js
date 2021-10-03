import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ Button }) => {
  return (
    <button type="button" onClick={Button} className={styles.button}>
      ВОЙТИ
    </button>
  );
};

Button.propTypes = {
  Button: PropTypes.func.isRequired,
};

export default Button;
