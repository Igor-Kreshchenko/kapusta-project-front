import React from "react";
import ContainerMain from "../../components/Container/ContainerMain";
import GoBackButton from "../../components/GoBackButton";
import Header from "../../components/Header";
import TransactionsExpForm from "../../components/TransactionsExpForm";

import styles from "./ExpensesFormPage.module.scss";

const ExpensesFormPage = () => {
  return (
    <ContainerMain>
      <Header />
      <div className={styles.container}>
        <GoBackButton />
        <TransactionsExpForm />
      </div>
    </ContainerMain>
  );
};

export default ExpensesFormPage;
