import styles from "./MainLogo.module.css";
// import logo from "./logo.png";

function MainLogo() {
  return (
    <div className={styles.logo_wrapper}>
      <div className={styles.logo}></div>
    </div>
  );
}

export default MainLogo;
