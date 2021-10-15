import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authOperations } from '../../redux/auth';
import ButtonSignup from "../Button/ButtonSignup";
import styles from "./Form.module.scss";
import routes from "../../routes"

const FormSignup = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const signUp = () => dispatch(authOperations.signUp({ email, password }));
  
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const history = useHistory();
  
  const handleSubmit = e => {
    e.preventDefault();
    signUp();
    reset();
    history.push(routes.login);
    };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="on">
      <h1 className={styles.title}>Регистрация</h1>
      <label className={styles.label}>
        Электронная почта:
        <input
          className={styles.input}
          type="email"
          name="email"
          value={email}
          placeholder="your@email.com"
          required
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Пароль:
        <input
          className={styles.input}
          type="password"
          name="password"
          value={password}
          placeholder="Пароль"
          required
          onChange={handleChange}
        />
      </label>
      <div className={styles.button__container__signup}>
        <ButtonSignup />
      </div>
    </form>
  );
};

export default FormSignup;
