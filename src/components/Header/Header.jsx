import styles from "./Header.module.css";
import MainLogo from "../../components/MainLogo/MainLogo";
import Navigation from "../../components/Navigation/Navigation";

function Header() {
  return (
    <>
      <div className={styles.logo_wrapper}>
        <MainLogo />
      </div>
      <div className={styles.navigation_wrapper}>
        <Navigation />
      </div>
    </>
  );
}

export default Header;
