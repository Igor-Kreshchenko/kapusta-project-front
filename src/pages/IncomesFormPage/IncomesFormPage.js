import React from "react";
import ContainerMain from "../../components/Container/ContainerMain";
import GoBackButton from "../../components/GoBackButton";
import Header from "../../components/Header";

import styles from "./IncomesFormPage.module.scss";

const IncomesFormPage = () => {
  return (
    <ContainerMain>
      <Header />
      <div className={styles.container}>
        <GoBackButton />
      </div>
    </ContainerMain>
  );
};

export default IncomesFormPage;
