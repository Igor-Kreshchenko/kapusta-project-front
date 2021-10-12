import { createPortal } from "react-dom";
import { useEffect } from "react";
import styles from "./ZeroBalanceNotification.module.scss";
const modalRoot = document.querySelector("#modal-root");

const ZeroBalanceNotification = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.removeEventListener("keydown", handleKeyDown);
  });

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={styles.Modal__backdrop} onClick={handleBackdropClick}>
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
    </div>,
    modalRoot
  );
};
export default ZeroBalanceNotification;
