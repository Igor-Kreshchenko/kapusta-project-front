import React from "react";
import  css from "../CategoriesList/CategoriesList.module.scss"
import sprite from "../../images/icons/sprite_categories.svg";

const Income = () => {
    return (
        <div className={css.container}>
          
            <ul className={css.list}>
        
                <li className={css.item}>
                    <p className={css.text}>5000</p>
                    <div className={css.svg_wrapper}>
                        <svg
                            className={css.icon}
                            width="58"
                            height="58"
                        >
                            <use xlinkHref={`${sprite}#icon-Продукты`} />
                        </svg>
                    </div>
                    <h3 className={css.title}>ЗП</h3>
                </li>
                <li className={css.item}>

                    <p className={css.text}>5000</p>
                    <div className={css.svg_wrapper}>
                        <svg
                            className={css.icon}
                            width="58"
                            height="58"
                        >
                            <use xlinkHref={`${sprite}#icon-Продукты`} />
                        </svg>
                    </div>
                    <h3 className={css.title}>Прочее</h3>
                </li>
            </ul>
        </div>
     
        
    )
};
export default Income;
  