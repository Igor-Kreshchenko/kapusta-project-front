import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { NavLink } from "react-router-dom";
import { Mobile, Default } from "../../utils/mediaQuery";
import BalancePanelHome from "../../components/BalancePanel/BalancePanelHome";
import TransactionsExpenses from "../../components/TransactionsExpenses";
import TransactionsIncome from "../../components/TransactionsIncome";
import ContainerMain from "../../components/Container/ContainerMain";
import storePersistor from "../../redux/store.js";
import ZeroBalanceNotification from "../../components/ZerBalanceNotification/ZeroBalanceNotification";
import Header from "../../components/Header/Header";
import HeaderUserInfo from "../../components/HeaderUserInfo/HeaderUserInfo";
import TransactionsExpForm from "../../components/TransactionsExpForm";
import TransactionsIncForm from "../../components/TransactionsIncForm";
import transactionsSelectors from "../../redux/transactions/transactionsSelectors";
import Loader from "../../components/Loader";

import "./TransactionsPage.scss";

const TransactionsPage = () => {
  const isLoading = useSelector(transactionsSelectors.getLoading);
  const [isModal, setIsToggleModal] = useState(true);
  const balance = storePersistor.store.getState().transactions.balance;

  const numberExpenses =
    storePersistor.store.getState().transactions.expenses.length;
  const onClose = () => {
    setIsToggleModal(!isModal);
  };

  return (
    <>
      <ContainerMain>
        <Header>
          <HeaderUserInfo />
        </Header>
        <BalancePanelHome />

        {isModal && numberExpenses === 0 && balance === 0 && (
          <ZeroBalanceNotification onClose={onClose} />
        )}

        <Default>
          <Tabs>
            <TabList>
              <Tab>Расход</Tab>
              <Tab>Доход</Tab>
            </TabList>

            <TabPanel>
              <TransactionsExpForm />
              <TransactionsExpenses />
            </TabPanel>

            <TabPanel>
              <TransactionsIncForm />
              <TransactionsIncome />
            </TabPanel>
          </Tabs>
        </Default>

        <Mobile>
          <Tabs>
            <TabList>
              <Tab>Расход</Tab>
              <Tab>Доход</Tab>
            </TabList>

            <TabPanel>
              <NavLink to="/transactions_expenses_form" className="Add_button">
                Добавить
              </NavLink>
              <TransactionsExpenses />
            </TabPanel>

            <TabPanel>
              <NavLink to="/transactions_incomes_form" className="Add_button">
                Добавить
              </NavLink>
              <TransactionsIncome />
            </TabPanel>
          </Tabs>
        </Mobile>

        {isLoading && <Loader />}
      </ContainerMain>
    </>
  );
};

export default TransactionsPage;
