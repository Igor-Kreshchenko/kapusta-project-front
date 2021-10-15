import styles from "./Footer.module.scss";
import logoGoIT from "../../images/logoGoIT.png";
import { ReactComponent as Kapusta } from "../../images/icons/kapusta-clean.svg";

const Footer = () => {
  const links1 = [
    "https://www.linkedin.com/in/yanahorbachova/",
    "https://www.linkedin.com/in/igorkreshchenko/",
    "https://www.linkedin.com/in/aleksandrs-barkancevs-235ab7212/",
    "https://www.linkedin.com/in/4marel/",
    "https://www.linkedin.com/in/denyskodak/",
    "https://www.linkedin.com/in/oleksandra-shelest-2b8898219/",
  ];
  const links2 = [
    "https://www.linkedin.com/in/oleksii-patsiuk-23300448/",
    "https://www.linkedin.com/in/nina-motorna",
    "",
    "",
    "",
    "",
  ];
  return (
    <footer>
      <ul className={styles.list}>
        {links1.map((link, index) => (
          <li key={index}>
            <a href={link}>
              <Kapusta width="35" height="35" className={styles.icon} />
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.thumb}>
        <a href="https://goit.ua/" className={styles.link}>
          <img src={logoGoIT} className={styles.logoGoIT} alt="logo" />
        </a>
      </div>
      <ul className={styles.list}>
        {links2.map((link, index) => (
          <li key={index}>
            <a href={link}>
              <Kapusta width="35" height="35" className={styles.icon} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;
