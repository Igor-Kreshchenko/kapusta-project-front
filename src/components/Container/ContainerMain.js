import Header from "../Header";
import styles from "./ContainerMain.module.scss";

const ContainerMain = ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
    <div className={styles.gray}></div>
    <div className={styles.white}></div>
  </div>
);

export default ContainerMain;
