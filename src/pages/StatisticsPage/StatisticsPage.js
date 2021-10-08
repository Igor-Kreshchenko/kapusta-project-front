import React from "react";
import ToggleStatistics from "../../components/ToggleStatistics";
import UserSummary from "../../components/UserSummary";
import BalancePanelOfReports from "../../components/BalancePanel/BalancePanelOfReports";
import ContainerMain from "../../components/Container/ContainerMain";


const StatisticsPage = () => {
  return (
    <>
      <ContainerMain>
      <BalancePanelOfReports />
      <UserSummary />
      <ToggleStatistics />
      </ContainerMain>
    </>
  );
};

export default StatisticsPage;
