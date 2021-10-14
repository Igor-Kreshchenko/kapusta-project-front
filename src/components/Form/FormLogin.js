import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { authOperations } from "../../redux/auth";

import ButtonLogin from "../Button/ButtonLogin";
import ButtonToSignup from "../Button/ButtonToSignup";
import styles from "./Form.module.scss";
import google from "../../images/google.png";

const FormLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [required, setRequired] = useState(false);

  const onLogIn = () => dispatch(authOperations.logIn({ email, password }));

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setRequired(true);
      return;
    } else {
      setRequired(false);
    }
    onLogIn();
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="on">
      <p className={styles.textGoogle}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <div className={styles.buttonGoogleStyle}>
        <img
          title="my-img"
          src={google}
          alt="logo"
          className={styles.formRegistGoogle}
        />
        <a
          href="https://kapusta-app.herokuapp.com/api/users/google"
          className={styles.button__Google}
        >
          Google
        </a>
      </div>
      <p className={styles.text}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
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
      <div className={styles.button__container}>
        <ButtonLogin />
        <ButtonToSignup />
      </div>
    </form>
  );
};

export default FormLogin;
