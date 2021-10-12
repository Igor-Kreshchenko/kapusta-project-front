import React, { useState } from "react";
import GoReportsButton from "../GoReportsButton/GoReportsButton";
import Balance from "../Balance";
import BalanceButton from "../Balance/BalanceButton";
import { Mobile } from "../../utils/mediaQuery";
import styles from "./BalancePanelHome.module.scss";

import MyDatePicker from "../MyDatePicker";

export default function BalancePanelHome() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={styles.BalancePanel_Home}>
      <Mobile>
        <MyDatePicker
          selectedDate={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </Mobile>
      <Balance styles={styles}>
        <BalanceButton />
      </Balance>
      <GoReportsButton />
    </div>
  );
}
