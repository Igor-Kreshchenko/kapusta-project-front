import React from "react";
import ToggleStatistics from "../../components/ToggleStatistics/ToggleStatistics";
import UserSummary from "../../components/UserSummary/UserSummary";
import css from "./StatisticsPage.module.scss";

const StatisticsPage = () => {
  return (
    <>
      <UserSummary />
      <ToggleStatistics />
    </>
  );
};

export default StatisticsPage;
