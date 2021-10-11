import React from "react";
import sprite from "../../images/icons/sprite_categories.svg";
import css from "./CategoriesList.module.scss";


const CategoriesList = ({obj} ) => {
    return (

         <div className={css.container}>
            <ul className={css.list}>
                {obj.map((obj) => ( 
                    <li className={css.item}
                        key={obj._id}
                        // onClick={() => onClick(obj.category)}
                    >
                        <p className={css.text}>{obj.amount}</p>
                        <div className={css.svg_wrapper}>
                            <svg
                                className={css.icon}
                                width="58"
                                height="58"
                            >
                                <use xlinkHref={`${sprite}#icon-${obj.category}`} />
                            </svg>
                        </div>
                        <h3 className={css.title}>{obj.category}</h3>
                    </li>
                ))
                }
            
            </ul>
            </div>
       
    );
};
export default CategoriesList;
