import React, {useState} from "react";
import ToggleStatistics from "../../components/ToggleStatistics";
import UserSummary from "../../components/UserSummary";
import BalancePanelOfReports from "../../components/BalancePanel/BalancePanelOfReports";
import ContainerMain from "../../components/Container/ContainerMain";
import Header from "../../components/Header/Header";
import HeaderUserInfo from "../../components/HeaderUserInfo/HeaderUserInfo";
import Chart from "../../components/Chart";

const StatisticsPage = () => {
  const [selectedСategory, setSelectedCategory] = useState('');
  const [type, setType] = useState('');


  return (
    <ContainerMain>
      <Header>
        <HeaderUserInfo />
      </Header>
      <BalancePanelOfReports />
      <UserSummary />
      <ToggleStatistics data={setSelectedCategory} setType={setType} />
      {selectedСategory.length === 0
        ? <></> 
        : <Chart category={selectedСategory} type={type}/> }
    </ContainerMain>
  );
};

export default StatisticsPage;
