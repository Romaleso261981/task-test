import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={styles.navigation__container}>
      <Link to="#" className={styles.navigation__link}>
        Компанія
      </Link>
      <Link to="#" className={styles.navigation__link}>
        Продукція
      </Link>
      <Link to="#" className={styles.navigation__link}>
        Статті
      </Link>
      <Link to="#" className={styles.navigation__link}>
        Рішення
      </Link>
      <Link to="#" className={styles.navigation__link}>
        Контакти
      </Link>
    </div>
  );
}

export default Navigation;
