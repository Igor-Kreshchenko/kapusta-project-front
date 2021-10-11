import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from "./ButtonToSignup.module.scss";

const ButtonToSignup = () => (
  <NavLink
    to={routes.signup}
    exact
    className={styles.button__tosignup}
  > РЕГИСТРАЦИЯ
  </NavLink>
)
 

export default ButtonToSignup;
