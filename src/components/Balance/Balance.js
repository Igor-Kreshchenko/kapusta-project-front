import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import transactionsOps from "../../redux/transactions/transactionsOps";
import transactionsSelectors from "../../redux/transactions/transactionsSelectors";

export default function Balance({ children, styles }) {
  const currentBalance = useSelector(transactionsSelectors.getBalance);
  const dispatch = useDispatch();
  const [balance, setBalance] = useState("");

  const handleChange = (evt) => {
    const balance = evt.target.value;
    setBalance(balance);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(`получен баланс ${balance}`)
    dispatch(transactionsOps.addBalance(+balance));
    setBalance("");
  };

  return (
    <form className={styles.balance_form} onSubmit={handleSubmit}>
      <label className={styles.form_label}>
        <span className={styles.form_title}>Баланс:</span>
        <span className={styles.input_box}>
          <input
            className={styles.input}
            type="text"
            placeholder={`${currentBalance} UAH`}
            value={balance}
            name="balance"
            onChange={handleChange}
            pattern="\d+(\.\d{2})"
            title="Баланс должен состоять из цифр, разделителя 'точка' и не более двух цифр после точки"
            required
          />
          {children}
        </span>
      </label>
    </form>
  );
}
