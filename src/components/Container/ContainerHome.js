import styles from "./ContainerHome.module.scss";

const ContainerHome = ({ children }) => (
  <div className={styles.container}>
    {children}
    <div className={styles.gray}></div>
    <div className={styles.white}></div>
  </div>
);

export default ContainerHome;
