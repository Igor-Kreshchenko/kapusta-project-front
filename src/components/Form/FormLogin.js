import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GoogleLogin } from 'react-google-login';
import GoogleButton from 'react-google-button'
import { authOperations } from "../../redux/auth";
import axios from 'axios';
import ButtonLogin from "../Button/ButtonLogin";
import ButtonToSignup from "../Button/ButtonToSignup";
import styles from "./Form.module.scss";
//import google from "../../images/google.png";
import authActions from "../../redux/auth/authActions";
const { GOOGLE_CLIENT_ID,  GOOGLE_CLIENT_SECRET} = require('../../config')

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

  const responseGoogle = async (response) => {
    try {
      const tokenData = await axios({
        url: "https://oauth2.googleapis.com/token",
        method: "post",
        data: {
            client_id: GOOGLE_CLIENT_ID,
            client_secret: GOOGLE_CLIENT_SECRET,
            // redirect_uri: 'http://localhost:3000',
            redirect_uri: 'https://kapusta-app.netlify.app',
            grant_type: "authorization_code",
            code: response.code,
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
        }
      })
      console.log('tokenData:')
      console.log(tokenData.data)
      const userData = await axios({
        url: "https://www.googleapis.com/oauth2/v2/userinfo",
        method: "get",
        headers: {
            Authorization: `Bearer ${tokenData.data.access_token}`
        }
      })
      console.log('userData:')
      console.log(userData.data)
      const email = userData.data.email
      let password
      if (userData.data.verified_email) {
        password = 'google'
      } else {
        password = ''
      }
      console.log(email, password)
      dispatch(authOperations.logIn({ email, password }))
    } catch (error) {
      dispatch(authActions.loginError(error.message));
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="on">
      <p className={styles.textGoogle}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <div>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          responseType={'code'}
          accessType={'offline'}
          prompt={'consent'}
          render={renderProps => (
            <GoogleButton
            label='Google'
            type="light"
            onClick={renderProps.onClick}
             disabled={renderProps.disabled}
             style={{
               width: "148px",
               borderRadius: "26px",
               display: "flex",
               justifyContent: "center",
               textlign: "center",
               marginTop: "20px",
               marginBottom: "auto",
               marginLeft: "auto",
               marginRight: "auto",
               fontWeight: "700",
               color: "#000000",
               paddingRight: "15px",
               }}>Google</GoogleButton>
          )}
        />
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

// изначальный вариант "кнопки" Google (через ссылку)
/*    <div className={styles.buttonGoogleStyle}>
        <img
          title="my-img"
          src={google}
          alt="logo"
          className={styles.formRegistGoogle}
        />
        <a
          href="http://localhost:4000/api/users/google"
          className={styles.button__Google}
        >
          Google
        </a>
      </div>*/

// вариант кастомной кнопки (через render --> button)
// клик отрабатывает только при нажатии непосредственно на button
/*     <div className={styles.buttonGoogleStyle}>
        <img
          title="my-img"
          src={google}
          alt="logo"
          className={styles.formRegistGoogle}
        />
        <GoogleLogin
          clientId="767015575745-4g2a5nd35cbsjtkuaj0qjnh6lvih7joi.apps.googleusercontent.com"
          render={renderProps => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}>
              Google
            </button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          responseType={'code'}
          accessType={'offline'}
          prompt={'consent'}
        />
      </div>*/

export default FormLogin;
