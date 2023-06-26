import styles from "./Header.module.css";
import MainLogo from "../../components/MainLogo/MainLogo";
import Navigation from "../../components/Navigation/Navigation";

function Header() {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.logo_wrapper}>
        <MainLogo />
      </div>
      <div className={styles.navigation_wrapper}>
        <Navigation />
      </div>
      <div className={styles.contact_wrapper}>
        <a href="tel:+380003333333" className={styles.contact__phone}>
          0 (800) 00-33-33
        </a>
        <button className={styles.contact__btn}>Замовити</button>
      </div>
    </div>
  );
}

export default Header;
