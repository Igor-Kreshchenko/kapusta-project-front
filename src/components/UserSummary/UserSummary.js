import React from "react";
import css from "./UserSummary.module.scss";
import line from "../../images/line.png";

const UserSummary = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.item}>
                <p className={css.text}>Paсходы:</p>
                <span className={css.sum }> -&nbsp;{55500.00}&nbsp;EUR</span>
                
            </div>
            <img className={css.img} src={line} alt="line" />
            <div className={css.item}>
                <p className={css.text}>Доходы:</p>
                <span className={css.sum1}>+&nbsp;{200000.00}&nbsp;EUR</span>
            </div>
        </div>
    )
}
export default UserSummary;