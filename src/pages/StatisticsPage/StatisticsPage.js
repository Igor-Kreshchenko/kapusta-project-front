import React from "react";
import ToggleStatistics from "../../components/ToggleStatistics";
import UserSummary from "../../components/UserSummary";
import BalancePanelOfReports from "../../components/BalancePanel/BalancePanelOfReports";
import ContainerMain from "../../components/Container/ContainerMain";
import Header from "../../components/Header/Header";
import HeaderUserInfo from "../../components/HeaderUserInfo/HeaderUserInfo";
import Chart from "../../components/Chart";
import data from "../../components/Chart/data";

const StatisticsPage = () => {
  return (
    <ContainerMain>
      <Header>
        <HeaderUserInfo />
      </Header>
      <BalancePanelOfReports />
      <UserSummary />
      <ToggleStatistics />

      <Chart data={data}/>
      </ContainerMain>
    </>
  );
};

export default StatisticsPage;
