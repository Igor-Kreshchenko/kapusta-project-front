import GoReportsButton from '../GoReportsButton/GoReportsButton';
import Balance from '../Balance';
import BalanceButton from '../Balance/BalanceButton';
import styles from './BalancePanel.module.scss'


export default function BalancePanelHome() {



    return (
        <div className={styles.BalancePanel_Home}>
            <Balance>
                <BalanceButton/>
            </Balance>
            <GoReportsButton/>
        </div>
    );

};