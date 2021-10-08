import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { authOperations } from '../../redux/auth';

import ButtonLogin from "../Button/ButtonLogin";
import ButtonSignup from "../Button/ButtonSignup";
import styles from "./Form.module.scss";

const FormLogin = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogIn = () => dispatch(authOperations.logIn({ email, password }));

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

  const handleSubmit = e => {
    e.preventDefault();
    onLogIn();
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="on">
      <p className={styles.textGoogle}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <button type="button" className={styles.button__Google}>
        Google
      </button>
      <p className={styles.text}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
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
      <div className={styles.button__container}>
        <ButtonLogin />
        <ButtonSignup />
      </div>
    </form>
  );
};

export default FormLogin;
