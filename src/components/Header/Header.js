import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.svg";
import routes from '../../routes';

import styles from "./Header.module.scss";

const Header = ({ children }) => (
  <div className={styles.header}>
    <NavLink
      to={routes.transactions}
      exact
    >
      <img className={styles.logo} src={logo} alt="logo" />
    </NavLink>
    {children}
  </div>
);

export default Header;
