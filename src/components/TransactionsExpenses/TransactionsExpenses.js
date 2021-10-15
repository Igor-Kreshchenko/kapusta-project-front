import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  transactionsOps,
  transactionsSelectors,
} from "../../redux/transactions";
import { authSelectors } from "../../redux/auth";
import TransactionMonthSummary from "../TransactionMonthSummary";
import useModal from "../Modal/useModal";
import Modal from "../Modal/logoutModal";

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

  const onDeleteExpense = async (e) => {
    const { id } = e.target.dataset;

    await dispatch(
      transactionsOps.deleteTransaction({
        type: "expense",
        id,
      })
    );
  };

  const { isShowingModal, toggle} = useModal();

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
              <li key={id} className={styles.table_item}>
                <span>{date}</span>
                <span>{description}</span>

                <span>{category}</span>
                <span className={styles.table_expenses}>-{amount} грн.</span>
                <button
                  type="button"
                  data-id={id}
                  onClick={toggle}
                  className={styles.table_item_btn}></button>
              </li>
            ))}
          </ul>
        </div>
        {isShowingModal && <Modal text={'Вы уверенны?'} data-id={'id'} toAgree={onDeleteExpense} onClose={toggle} />}

        <TransactionMonthSummary type="Expenses" />
      </div>
    </>
  );
};

export default TransactionsExpenses;
