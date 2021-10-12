import styles from "./Header.module.scss";
import logo from "../../images/logo.svg";

const Header = ({ children }) => (
  <div className={styles.header}>
    <img className={styles.logo} src={logo} alt="logo" />
    {children}
  </div>
);

export default Header;

