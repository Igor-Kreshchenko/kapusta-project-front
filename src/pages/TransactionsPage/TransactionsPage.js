import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { NavLink } from "react-router-dom";
import { Mobile, Default } from "../../utils/mediaQuery";
import BalancePanelHome from "../../components/BalancePanel/BalancePanelHome";
import TransactionsExpenses from "../../components/TransactionsExpenses";
import TransactionsIncome from "../../components/TransactionsIncome";
import ContainerMain from "../../components/Container/ContainerMain";
import Header from "../../components/Header/Header";
import HeaderUserInfo from "../../components/HeaderUserInfo/HeaderUserInfo";
import TransactionsExpForm from "../../components/TransactionsExpForm";
import TransactionsIncForm from "../../components/TransactionsIncForm";

import "./TransactionsPage.scss";

const TransactionsPage = () => {
  return (
    <>
      <ContainerMain>
        <Header>
          <HeaderUserInfo />
        </Header>
        <BalancePanelHome />

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
      </ContainerMain>
    </>
  );
};

export default TransactionsPage;
