import React from "react";
import { useSelector } from "react-redux";
import { transactionsSelectors } from "../../redux/transactions";
import createMonthsWithSum from "./utils.js";
import styles from "./TransactionMonthSummary.module.scss";

const TransactionMonthSummary = ({ type }) => {
  const selectorType = `get${type}`;
  const transactions = useSelector(transactionsSelectors[selectorType]);

  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const normalizedMonthNumber =
    currentMonth > 9 ? currentMonth : `0${currentMonth}`;

  const sortedTransactions = createMonthsWithSum(
    transactions,
    normalizedMonthNumber
  );

  return (
    <div className={styles.summary}>
      <h4>Сводка</h4>
      <ul className={styles.summary_list}>
        {sortedTransactions.map(({ name, sum }, index) => (
          <li key={index} className={styles.summary_item}>
            <span>{name}</span>
            <span>{`${sum}.00`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionMonthSummary;
