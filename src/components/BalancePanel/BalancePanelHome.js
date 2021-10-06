import GoReportsButton from '../GoReportsButton/GoReportsButton';
import Balance from '../Balance';
import BalanceButton from '../Balance/BalanceButton';
import styles  from './BalancePanelHome.module.scss'


export default function BalancePanelHome() {



    return (
        <div className={styles.BalancePanel_Home}>
            <Balance styles={styles}>
                <BalanceButton />
            </Balance>
            <GoReportsButton/>
        </div>
    );

};