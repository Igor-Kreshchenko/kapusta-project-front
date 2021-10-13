import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.Loader__overlay}>
      <div className={styles.Loader}>
        <div className={styles.Kapuster}></div>
      </div>
    </div>
  );
};

export default Loader;
