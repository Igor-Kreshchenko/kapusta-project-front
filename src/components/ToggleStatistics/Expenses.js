import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import CategoriesList from "../CategoriesList";
import AnimExp from "../AnimExp/AnimExp";
import css from "../../components/CategoriesList/CategoriesList.module.scss";
import sprite from "../../images/icons/sprite_categories.svg";
import transactionsSelectors from "../../redux/transactions/transactionsSelectors"
import transactionsOps from "../../redux/transactions/transactionsOps"
import { CATEGORIES_LIST } from "../../redux/transactions/transactionsReducer";


const Expenses = ({setCategory,setType}) => {
  const transactions = useSelector(transactionsSelectors.getExpenses);
  // console.log(transactions)
  // const transactions = [] на случай если с бека вернулся пустой масив 


  const onClick = (category) => {    
    setCategory(category) // вызывает функцию   для отрисовки графиков ниже на странице
    setType('expenses')
  }


  const totalSumByCategory = (type, category) => {
    let total = 0;
    transactionsOps.getTransactionsByType(type)
    // console.log(type)
    transactions.filter(transaction => transaction.category === category)
      .map(el => {
        total += el.amount;
      });
    return total;
  };
  
  return (
    <>
      <div className={css.container}>
        <ul className={css.list}>
          {transactions.length === 0
            ? <div className={css.wrapper_message}><AnimExp/></div>
            :CATEGORIES_LIST.expenses.map(item => {
            
            let sum = totalSumByCategory("expenses", item.category);
            if (sum === 0) {
              return;
            }
             
            return (
              <li className={css.item}
                key={item.id}
                onClick={() => onClick(item.category)}
              >
                <p className={css.text}>{sum}</p>
                <div className={css.svg_wrapper}>
                  <svg
                    className={css.icon}
                    width="58"
                    height="58"
                  >
                    <use xlinkHref={`${sprite}#icon-${item.category}`} />
                  </svg>
                </div>
                <h3 className={css.title}>{item.category}</h3>
              </li>
            )
          })
          }
            
        </ul>
      </div>
       
    </>
  )
};
export default Expenses;
