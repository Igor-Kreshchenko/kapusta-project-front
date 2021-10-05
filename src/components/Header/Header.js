import styles from "./Header.module.scss";
import logo from "../../images/logo.png";

const Header = () => (
  <div className={styles.header}>
    <img className={styles.logo} src={logo} alt="logo" />
  </div>
);

export default Header;
