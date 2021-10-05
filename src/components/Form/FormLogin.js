import Button from "../Button/Button";
import styles from "./FormLogin.module.scss";

const FormLogin = () => {
  return (
    <form onSubmit={"handleSubmit"} className={styles.form} autoComplete="on">
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
          placeholder="your@email.com"
          value={"email"}
          onChange={"handleChange"}
        />
      </label>
      <label className={styles.label}>
        Пароль:
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Пароль"
          value={"password"}
          onChange={"handleChange"}
        />
      </label>
      <div className={styles.button__container}>
        <Button
          // buttonHandler={"buttonHandler"}
          buttonText={"ВОЙТИ"}
        />
        <Button
          // buttonHandler={"buttonHandler"}
          buttonText={"РЕГИСТРАЦИЯ"}
        />
      </div>
    </form>
  );
};

export default FormLogin;
