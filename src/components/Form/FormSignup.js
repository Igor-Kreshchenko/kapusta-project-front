import ButtonSignup from "../Button/ButtonSignup";
import styles from "./Form.module.scss";

const FormLogin = () => {
  return (
    <form onSubmit={"handleSubmit"} className={styles.form} autoComplete="on">
      <h1 className={styles.title}>Регистрация</h1>
      <label className={styles.label}>
        Электронная почта:
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          // value={"email"}
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
          required
          // value={"password"}
          onChange={"handleChange"}
        />
      </label>
      <div className={styles.button__container__signup}>
        <ButtonSignup />
      </div>
    </form>
  );
};

export default FormLogin;
