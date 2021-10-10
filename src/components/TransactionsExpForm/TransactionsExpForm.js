import React, { useState } from "react";
import MyDatePicker from "../MyDatePicker";
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
        <div className={styles.form_input_category_parent}>
          <input
            className={styles.form_input_category}
            id="datalist_input"
            type="text"
            placeholder="Категория товара"
          />
          <ul className={styles.form_category_list} data-value="list">
            <li className={styles.form_option}>
              <label>
                <input
                  hidden
                  value="food"
                  type="radio"
                  name="exp_category"
                  className={styles.radiobutton}
                />
                Продукты
              </label>
            </li>
            <li className={styles.form_option}>
              <label>
                <input
                  hidden
                  value="health"
                  type="radio"
                  name="exp_category"
                  className={styles.radiobutton}
                />
                Здоровье
              </label>
            </li>
            <li className={styles.form_option}>
              <label>
                <input
                  hidden
                  value="alcohol"
                  type="radio"
                  name="exp_category"
                  className={styles.radiobutton}
                />
                Алкоголь
              </label>
            </li>
            <li className={styles.form_option}>
              <label>
                <input
                  hidden
                  value="entertainment"
                  type="radio"
                  name="exp_category"
                  className={styles.radiobutton}
                />
                Развлечения
              </label>
            </li>
            <li className={styles.form_option}>
              <label>
                <input
                  hidden
                  value="allForHouse"
                  type="radio"
                  name="exp_category"
                  className={styles.radiobutton}
                />
                Всё для дома
              </label>
            </li>
            <li className={styles.form_option}>
              <label>
                <input
                  hidden
                  value="technic"
                  type="radio"
                  name="exp_category"
                  className={styles.radiobutton}
                />
                Техника
              </label>
            </li>
            <li className={styles.form_option}>
              <label>
                <input
                  hidden
                  value="utilities"
                  type="radio"
                  name="exp_category"
                  className={styles.radiobutton}
                />
                Коммуналка, связь
              </label>
            </li>
            <li className={styles.form_option}>
              <label>
                <input
                  hidden
                  value="hobby"
                  type="radio"
                  name="exp_category"
                  className={styles.radiobutton}
                />
                Спорт, хобби
              </label>
            </li>
            <li className={styles.form_option}>
              <label>
                <input
                  hidden
                  value="education"
                  type="radio"
                  name="exp_category"
                  className={styles.radiobutton}
                />
                Образование
              </label>
            </li>
            <li className={styles.form_option}>
              <label>
                <input
                  hidden
                  value="other"
                  type="radio"
                  name="exp_category"
                  className={styles.radiobutton}
                />
                Прочее
              </label>
            </li>
          </ul>
          <span className={styles.list_arrow} id="arrow"></span>
        </div>
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
