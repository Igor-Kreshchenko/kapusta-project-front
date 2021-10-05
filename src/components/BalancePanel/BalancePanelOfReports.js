import Balance from '../Balance/Balance'
import BalanceButton from '../Balance/BalanceButton';
import GoBackButton from '../GoBackButton'
import styles from './BalancePanelOfReports.module.scss'

export default function BalancePanelOfReports() {

    const windowInnerWidth = window.innerWidth
    console.log(windowInnerWidth)

    return (
        <div className={styles.BalancePanelOfReports}>
            <GoBackButton/>
            <Balance styles={styles}>
                {windowInnerWidth > 1279 && (
                    <BalanceButton/>
                )}
            </Balance>

        </div>
    );

};