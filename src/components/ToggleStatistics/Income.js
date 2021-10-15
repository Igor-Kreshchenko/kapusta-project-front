import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import CategoriesList from "../CategoriesList";
import Item from "../Item/Item";
import css from "../../components/CategoriesList/CategoriesList.module.scss";
import sprite from "../../images/icons/sprite_categories.svg";
import transactionsSelectors from "../../redux/transactions/transactionsSelectors";
import transactionsOps from "../../redux/transactions/transactionsOps";
import { CATEGORIES_LIST } from "../../redux/transactions/transactionsReducer";

const Income = () => {
  const transactions = useSelector(transactionsSelectors.getIncomes);
  
    // const onClick = () => {
  // console.log("Привет статистика ") // вызывает функцию   для отрисовки графиков ниже на странице
// }

    const totalSumByCategory = (type, category) => {
    let total = 0;
    transactionsOps.getTransactionsByType(type)
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
            ? <div className={css.wrapperImg}> <Item/></div>
             : CATEGORIES_LIST.incomes.map(item => {
            let sum = totalSumByCategory("incomes", item.category);
            if (sum === 0) {
              return;
            }
             
            return (
              <li className={css.item}
                key={item.id}
               //   onClick={() => onClick( console.log(item.category))}
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
export default Income;

