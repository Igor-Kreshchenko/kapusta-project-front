import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { authOperations } from "../../redux/auth";
import ButtonSignup from "../Button/ButtonSignup";
import styles from "./Form.module.scss";
import routes from "../../routes";

const FormSignup = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [required, setRequired] = useState(false);

  const signUp = () => dispatch(authOperations.signUp({ email, password }));

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };
  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setRequired(true);
      return;
    } else {
      setRequired(false);
    }

    signUp();
    reset();
    history.push(routes.login);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="on">
      <h1 className={styles.title}>Регистрация</h1>
      <label className={styles.label}>
        {required && <span className={styles.span_star}>*</span>}
        Электронная почта:
        <input
          className={styles.input}
          type="email"
          name="email"
          value={email}
          placeholder="your@email.com"
          onChange={handleChange}
        />
        {required && (
          <span className={styles.span_required}>это обязательное поле</span>
        )}
      </label>
      <label className={styles.label}>
        {required && <span className={styles.span_star}>*</span>}
        Пароль:
        <input
          className={styles.input}
          type="password"
          name="password"
          value={password}
          placeholder="Пароль"
          onChange={handleChange}
        />
        {required && (
          <span className={styles.span_required}>это обязательное поле</span>
        )}
      </label>
      <div className={styles.button__container__signup}>
        <ButtonSignup />
      </div>
    </form>
  );
};

export default FormSignup;
