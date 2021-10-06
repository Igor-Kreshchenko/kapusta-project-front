import styles from "./Notification.module.scss";

const Notification = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_box}>
        <p className={styles.first_text}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={styles.second_text}>
          Ты не можешь тратить деньги пока их у тебя нет :)
        </p>
      </div>
    </div>
  );
};
export default Notification;
