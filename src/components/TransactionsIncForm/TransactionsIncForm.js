import React, { useState } from "react";
import MyDatePicker from "../MyDatePicker";

import styles from "./TransactionsIncForm.module.scss";

const TransactionsIncForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <form className={styles.form}>
      <MyDatePicker
        selectedDate={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <div className={styles.form_input}>
        <input type="text" placeholder="Описание дохода" />
        <input type="text" placeholder="Категория дохода" />
        <input type="text" placeholder="0,00" />
      </div>

      <div className={styles.form_btn}>
        <button className={styles.form__btn_enter}>Ввод</button>
        <button className={styles.form__btn_clear}>Очистить</button>
      </div>
    </form>
  );
};

export default TransactionsIncForm;
