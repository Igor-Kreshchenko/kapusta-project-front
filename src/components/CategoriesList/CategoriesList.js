import React from "react";
import sprite from "../../images/icons/sprite_categories.svg";
import css from "./CategoriesList.module.scss";


console.log(sprite )
const CategoriesList = ({} ) => {
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
                    <h3 className={css.title}>Продукты</h3>
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
                    <h3 className={css.title}>Продукты</h3>
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
                    <h3 className={css.title}>Продукты</h3>
                </li>
                <span className={css.border}></span>
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
                    <h3 className={css.title}>Продукты</h3>
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
                    <h3 className={css.title}>Продукты</h3>
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
                    <h3 className={css.title}>Продукты</h3>
                </li>
                 <span className={css.border}></span>
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
                    <h3 className={css.title}>Продукты</h3>
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
                    <h3 className={css.title}>Продукты</h3>
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
                    <h3 className={css.title}>Продукты</h3>
                </li>
                 <span className={css.border}></span>
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
                    <h3 className={css.title}>Продукты</h3>
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
                    <h3 className={css.title}>Продукты</h3>
                </li>
                <span className={css.border}></span>
            </ul>
        </div> 
    );
};
export default CategoriesList;
