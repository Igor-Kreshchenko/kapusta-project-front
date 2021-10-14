import { useDispatch, useSelector } from "react-redux";
import css from "./UserSummary.module.scss";
import line from "../../images/line.png";
import transactionsSelectors from "../../redux/transactions/transactionsSelectors";


const UserSummary = () => {

 const transactionsExp = useSelector(transactionsSelectors.getExpenses);   
 const transactionsInc = useSelector(transactionsSelectors.getIncomes);
    
    let totalSumExp = 0
    let totalSumInc = 0
    const totalSumByPeriod = () => {
        transactionsExp.map(el => { totalSumExp += el.amount });
         transactionsInc.map(el => { totalSumInc += el.amount });
    return ;
    };
    console.log(totalSumByPeriod ())
    return (
        <div className={css.wrapper}>
            <div className={css.item}>
                <p className={css.text}>Paсходы:</p>
                <span className={css.sum }>{`- ${totalSumExp}.00 грн`}</span>
                
            </div>
            <img className={css.img} src={line} alt="line" />
            <div className={css.item}>
                <p className={css.text}>Доходы:</p>
                <span className={css.sum1}>{`+ ${totalSumInc}.00 грн`}</span>
            </div>
        </div>
    )
}
export default UserSummary;