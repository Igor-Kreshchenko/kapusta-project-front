import Balance from "../Balance/Balance";
import { Desktop } from '../../utils/mediaQuery'
import BalanceButton from "../Balance/BalanceButton";
import GoBackButton from "../GoBackButton";
import CurrentDatePicker from "../CurrentPeriod";
import styles from "./BalancePanelOfReports.module.scss";

export default function BalancePanelOfReports() {

  return (
    <div className={styles.BalancePanelOfReports}>
      <GoBackButton />
      <div className={styles.BalanceBox}>
        <Balance styles={styles}>
          <Desktop> <BalanceButton /> </Desktop>
        </Balance>
        <CurrentDatePicker />
      </div>
    </div>
  );
}
