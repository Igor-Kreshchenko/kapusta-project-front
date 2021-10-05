import React from "react";
import ContainerMain from "../../components/Container/ContainerMain";
import ToggleStatistics from "../../components/ToggleStatistics/ToggleStatistics";
import UserSummary from "../../components/UserSummary/UserSummary";
import css from "./StatisticsPage.module.scss";

const StatisticsPage = () => {
  return (
    <ContainerMain>
      <UserSummary />
      <ToggleStatistics />
    </ContainerMain>
  );
};

export default StatisticsPage;
