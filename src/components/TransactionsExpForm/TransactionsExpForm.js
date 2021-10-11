import React, { useState } from "react";
import MyDatePicker from "../MyDatePicker";
import CategoryInput from "../CategoryInput";
import styles from "./TransactionsExpForm.module.scss";

const TransactionsExpForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <form className={styles.form}>
      <MyDatePicker
        selectedDate={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <div className={styles.form_input}>
        <input
          className={styles.form_input_description}
          type="text"
          placeholder="Описание товара"
        />
        <CategoryInput />

        <input
          className={styles.form_input_amount}
          type="text"
          placeholder="0,00"
        />
      </div>
      <div className={styles.form__btn}>
        <button className={styles.form__btn_enter}>Ввод</button>
        <button className={styles.form__btn_clear}>Очистить</button>
      </div>
    </form>
  );
};

export default TransactionsExpForm;
