import React from "react";
import TransactionMonthSummary from "../TransactionMonthSummary";
import TransactionsIncForm from "../TransactionsIncForm";

import styles from "./TransactionsIncome.module.scss";

const TransactionsIncome = () => {
  return (
    <>
      <TransactionsIncForm />

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
                <span className={styles.table_income}>20 000.00 грн.</span>
              </li>
              <li className={styles.table_item}>
                <span>05.09.2019</span>
                <span>% на остаток на карте</span>
                <span>Доп. доход</span>
                <span className={styles.table_income}>500.00 грн.</span>
              </li>

              <li className={styles.table_item}></li>
              <li className={styles.table_item}></li>
              <li className={styles.table_item}></li>
              <li className={styles.table_item}></li>
              <li className={styles.table_item}></li>
              <li className={styles.table_item}></li>
              <li className={styles.table_item}></li>
              <li className={styles.table_item}></li>
            </ul>
          </div>
        </div>

        <TransactionMonthSummary type="Incomes" />
      </div>
    </>
  );
};

export default TransactionsIncome;
