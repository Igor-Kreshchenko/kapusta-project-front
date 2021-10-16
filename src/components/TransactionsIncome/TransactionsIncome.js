import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  transactionsOps,
  transactionsSelectors,
} from "../../redux/transactions";
import { authSelectors } from "../../redux/auth";
import TransactionMonthSummary from "../TransactionMonthSummary";
import IncomeItem from "./IncomeItem";
import styles from "./TransactionsIncome.module.scss";

const TransactionsIncome = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const incomeArray = useSelector(transactionsSelectors.getIncomes);
  const sortedArray = [...incomeArray].sort((prevIncome, nextIncome) => {
    const prevDateArr = prevIncome.date.split(".");
    const nextDateArr = nextIncome.date.split(".");
    return new Date(`${nextDateArr[1]}.${nextDateArr[0]}.${nextDateArr[2]}`) - new Date(`${prevDateArr[1]}.${prevDateArr[0]}.${prevDateArr[2]}`)
  });

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(transactionsOps.getTransactionsByType({ type: "income" }));
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

          <div>
            <ul className={styles.table_list}>
            {sortedArray.map(({date, description, amount, id, category}) => (
              <IncomeItem date={date} description={description} amount={amount} key={id} id={id} category={category}/>
              ))}
            </ul>
          </div>
        </div>

        <TransactionMonthSummary type="Incomes" />
      </div>
    </>
  );
};

export default TransactionsIncome;
