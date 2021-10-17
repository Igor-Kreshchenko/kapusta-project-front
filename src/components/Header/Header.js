import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.svg";
import routes from '../../routes';

import styles from "./Header.module.scss";

const Header = ({ children }) => (
  <NavLink
    to={routes.transactions}
    exact
    className={styles.header}
  >
    <img className={styles.logo} src={logo} alt="logo" />
    {children}
  </NavLink>
);

export default Header;
