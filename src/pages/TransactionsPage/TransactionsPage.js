import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BalancePanelHome from "../../components/BalancePanel/BalancePanelHome";
import TransactionsExpenses from "../../components/TransactionsExpenses";
import TransactionsIncome from "../../components/TransactionsIncome";
import ContainerMain from "../../components/Container/ContainerMain";
import Header from "../../components/Header/Header";
import HeaderUserInfo from "../../components/HeaderUserInfo/HeaderUserInfo";

import "./TransactionsPage.scss";

const TransactionsPage = () => {
  return (
    <>
      <Header>
        <HeaderUserInfo />
      </Header>
      <ContainerMain>
        <BalancePanelHome />
        
        <Tabs>
          <TabList>
            <Tab>Расход</Tab>
            <Tab>Доход</Tab>
          </TabList>
          <TabPanel>
            <TransactionsExpenses />
          </TabPanel>
          <TabPanel>
            <TransactionsIncome />
          </TabPanel>
        </Tabs>
      </ContainerMain>
    </>
  );
};

export default TransactionsPage;
