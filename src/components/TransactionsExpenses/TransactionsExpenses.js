import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  transactionsOps,
  transactionsSelectors,
} from "../../redux/transactions";
import { authSelectors } from "../../redux/auth";
import TransactionMonthSummary from "../TransactionMonthSummary";

import styles from "./TransactionsExpenses.module.scss";

const TransactionsExpenses = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const expenseArray = useSelector(transactionsSelectors.getExpenses);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(transactionsOps.getTransactionsByType({ type: "expense" }));
    }
  }, [dispatch, isAuthenticated]);

  const onDeleteExpense = async (id) => {
    await dispatch(
      transactionsOps.deleteTransaction({
        type: "expense",
        id,
      })
    );
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.table}>
          <div className={styles.table_head}>
            <div className={styles.table_title}>Дата</div>
            <div className={styles.table_title}>Описание</div>
            <div className={styles.table_title}>Категория</div>
            <div className={styles.table_title}>Сумма</div>
            <div className={styles.table_title} />
          </div>

          <ul className={styles.table_list}>
            <li className={styles.table_item}>
              <span>05.09.2019</span>
              <span>Метро</span>

              <span>Транспорт</span>
              <span className={styles.table_expenses}>-30.00 грн.</span>
              <button
                type="button"
                onClick={() => onDeleteExpense()}
                className={styles.table_item_btn}></button>
            </li>
            <li className={styles.table_item}>
              <span>05.09.2019</span>
              <span>Метро</span>

              <span>Транспорт</span>
              <span className={styles.table_expenses}>-30.00 грн.</span>
              <button
                type="button"
                onClick={() => onDeleteExpense()}
                className={styles.table_item_btn}></button>
            </li>
          </ul>
        </div>

        <TransactionMonthSummary type="Expenses" />
      </div>
    </>
  );
};

export default TransactionsExpenses;
