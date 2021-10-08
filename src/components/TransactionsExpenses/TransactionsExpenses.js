import React from "react";
import TransactionMonthSummary from "../TransactionMonthSummary";
import TransactionsExpForm from "../TransactionsExpForm";

import styles from "./TransactionsExpenses.module.scss";

const TransactionsExpenses = () => {
  return (
    <>
      <TransactionsExpForm />

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
              <span>
                Метро (Lorem ipsum dolor sit amet, consectetur adipiscing elit.)
              </span>
              <span>Транспорт</span>
              <span className={styles.table_expenses}>-30.00 грн.</span>
            </li>
            <li className={styles.table_item}>
              <span>05.09.2019</span>
              <span>Бананы</span>
              <span>Продукты</span>
              <span className={styles.table_expenses}>-30.00 грн.</span>
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

        <TransactionMonthSummary type="Expenses" />
      </div>
    </>
  );
};

export default TransactionsExpenses;
