import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  transactionsOps,
  transactionsSelectors,
} from "../../redux/transactions";
import { authSelectors } from "../../redux/auth";
import TransactionMonthSummary from "../TransactionMonthSummary";

import styles from "./TransactionsIncome.module.scss";

const TransactionsIncome = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const incomeArray = useSelector(transactionsSelectors.getIncomes);
  console.log(incomeArray);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(transactionsOps.getTransactionsByType({ type: "income" }));
    }
  }, [dispatch, isAuthenticated]);

  const onDeleteIncomes = async (id) => {
    await dispatch(
      transactionsOps.deleteTransaction({
        type: "income",
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

          <div>
            <ul className={styles.table_list}>
              <li className={styles.table_item}>
                <span>05.09.2019</span>
                <span>Моя зп</span>

                <span>ЗП</span>
                <span className={styles.table_income}>20000.00 грн.</span>
                <button
                  type="button"
                  onClick={() => onDeleteIncomes()}
                  className={styles.table_item_btn}
                ></button>
              </li>
            </ul>
          </div>
        </div>

        <TransactionMonthSummary type="Incomes" />
      </div>
    </>
  );
};

export default TransactionsIncome;
