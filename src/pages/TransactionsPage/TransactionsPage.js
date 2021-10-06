import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BalancePanelHome from "../../components/BalancePanel/BalancePanelHome";
import TransactionsExpenses from "../../components/TransactionsExpenses";
import TransactionsIncome from "../../components/TransactionsIncome";

import "./TransactionsPage.scss";

const TransactionsPage = () => {
  return (
    <div className="transactions__container">
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
    </div>
  );
};

export default TransactionsPage;
