import Header from "../Header";
import styles from "./ContainerHome.module.scss";

const ContainerHome = ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
    <div className={styles.gray}></div>
    <div className={styles.white}></div>
  </div>
);

export default ContainerHome;
