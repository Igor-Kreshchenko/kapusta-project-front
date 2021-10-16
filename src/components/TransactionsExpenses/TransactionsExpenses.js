import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  transactionsOps,
  transactionsSelectors,
} from "../../redux/transactions";
import { authSelectors } from "../../redux/auth";
import TransactionMonthSummary from "../TransactionMonthSummary";
import ExpenseItem from "./ExpenseItem";
import styles from "./TransactionsExpenses.module.scss";

const TransactionsExpenses = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const expenseArray = useSelector(transactionsSelectors.getExpenses);
  const sortedArray = [...expenseArray].sort((prevExpense, nextExpense) => {
    const prevDateArr = prevExpense.date.split(".");
    const nextDateArr = nextExpense.date.split(".");
    return (
      new Date(`${nextDateArr[1]}.${nextDateArr[0]}.${nextDateArr[2]}`) -
      new Date(`${prevDateArr[1]}.${prevDateArr[0]}.${prevDateArr[2]}`)
    );
  });

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(transactionsOps.getTransactionsByType({ type: "expense" }));
    }
  }, [dispatch, isAuthenticated]);

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
            {sortedArray.map(({ date, description, amount, id, category }) => (
             <ExpenseItem date={date} description={description} amount={amount} key={id} id={id} category={category}/>
            ))}
          </ul>
        </div>

        <TransactionMonthSummary type="Expenses" />
      </div>
    </>
  );
};

export default TransactionsExpenses;
