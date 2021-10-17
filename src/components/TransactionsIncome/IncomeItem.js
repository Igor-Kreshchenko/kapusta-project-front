import React from 'react';
import useModal from "../Modal/useModal";
import Modal from "../Modal/logoutModal";
import { useDispatch } from "react-redux";
import {transactionsOps} from "../../redux/transactions";
import styles from './TransactionsIncome.module.scss';

function IncomeItem({date, description, amount, id, category}){
    const dispatch = useDispatch();
    const { isShowingModal, toggle} = useModal();

    const deleteHandler = async () => {
        await dispatch(
          transactionsOps.deleteTransaction({
            type: "income",
            id,
          })
        );
    };

    return (
    <li className={styles.table_item}>
        <span>{date}</span>
        <span>{description}</span>

        <span>{category}</span>
        <span className={styles.table_income}>-{amount} грн.</span>
        <button
          type="button"
          onClick={()=>toggle()}
          className={styles.table_item_btn}>
        </button>

     {isShowingModal && <Modal text={'Вы уверены?'} toAgree={deleteHandler} onClose={toggle} />}
    </li>)
}

export default IncomeItem

