import React from "react";
import ToggleStatistics from "../../components/ToggleStatistics";
import UserSummary from "../../components/UserSummary";
import BalancePanelOfReports from "../../components/BalancePanel/BalancePanelOfReports";
import ContainerMain from "../../components/Container/ContainerMain";
import Header from "../../components/Header/Header";
import HeaderUserInfo from "../../components/HeaderUserInfo/HeaderUserInfo";

const StatisticsPage = () => {
  return (
    <ContainerMain>
      <Header>
        <HeaderUserInfo />
      </Header>
      <BalancePanelOfReports />
      <UserSummary />
      <ToggleStatistics />
    </ContainerMain>
  );
};

export default StatisticsPage;
