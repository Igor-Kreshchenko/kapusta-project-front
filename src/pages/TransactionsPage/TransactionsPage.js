import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BalancePanelHome from "../../components/BalancePanel/BalancePanelHome";
import TransactionsExpenses from "../../components/TransactionsExpenses";
import TransactionsIncome from "../../components/TransactionsIncome";
import ContainerMain from "../../components/Container/ContainerMain";
import storePersistor from "../../redux/store.js";
import ZeroBalanceNotification from "../../components/ZerBalanceNotification/ZeroBalanceNotification";
import "./TransactionsPage.scss";

const TransactionsPage = () => {
  const [isModal, setIsToggleModal] = useState(true);
  const balance = storePersistor.store.getState().transactions.balance;

  const numberExpenses =
    storePersistor.store.getState().transactions.expenses.length;
  const onClose = () => {
    setIsToggleModal(!isModal);
  };

  return (
    <ContainerMain>
      <BalancePanelHome />

      {isModal && numberExpenses === 0 && balance === 0 && (
        <ZeroBalanceNotification onClose={onClose} />
      )}

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
  );
};

export default TransactionsPage;
