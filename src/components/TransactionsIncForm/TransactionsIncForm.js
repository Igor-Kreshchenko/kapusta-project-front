import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MyDatePicker from "../MyDatePicker";
import CategoryInput from "../CategoryInput";
import transactionsOps from "../../redux/transactions/transactionsOps";
// import styles from "./TransactionsIncForm.module.scss";
import styles from "../TransactionsExpForm/TransactionsExpForm.module.scss";

const TransactionsIncForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0.0);
  const dispatch = useDispatch();

  const reset = () => {
    setStartDate(new Date());
    setCategory("");
    setDescription("");
    setAmount(0);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const date = [
      startDate.getDate(),
      startDate.getMonth() + 1,
      startDate.getFullYear(),
    ].join(".");
    const body = {
      type: "income",
      date,
      amount: +amount,
      category,
      description,
    };
    dispatch(transactionsOps.addTransaction(body));
    reset();
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <div className={styles.form__input_wrapper}>
        <MyDatePicker
          selectedDate={startDate}
          handleChange={(date) => setStartDate(date)}
        />
        <div className={styles.form_input}>
          <input
            className={styles.form_input_description}
            type="text"
            placeholder="Описание дохода"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <CategoryInput
            type="income"
            categoryPick={category}
            setCategory={setCategory}
          />
          <input
            className={styles.form_input_amount}
            type="text"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.form__btn}>
        <button type="submit" className={styles.form__btn_enter}>
          Ввод
        </button>
        <button
          type="button"
          onClick={reset}
          className={styles.form__btn_clear}
        >
          Очистить
        </button>
      </div>
    </form>
  );
};

export default TransactionsIncForm;
