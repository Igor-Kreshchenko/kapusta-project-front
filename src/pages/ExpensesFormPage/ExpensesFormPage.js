import React from "react";
import ContainerMain from "../../components/Container/ContainerMain";
import GoBackButton from "../../components/GoBackButton";
import Header from "../../components/Header";

import styles from "./ExpensesFormPage.module.scss";

const ExpensesFormPage = () => {
  return (
    <>
      <Header />
      <ContainerMain>
        <div className={styles.container}>
          <GoBackButton />
        </div>
      </ContainerMain>
    </>
  );
};

export default ExpensesFormPage;
