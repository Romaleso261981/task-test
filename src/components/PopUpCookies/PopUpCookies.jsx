import PropTypes from "prop-types";
import styles from "./PopUpCookies.module.css";

function PopUpCookies({ togglePopUpCookies }) {
  return (
    <div className={styles.popup_wrapper}>
      <p className={styles.popup_text}>
        Використовуючи цей сайт, ви даєте згоду на роботу з файлами
        <span className={styles.popup_span}>сookies</span>.
      </p>
      <button className={styles.popup_btn} onClick={togglePopUpCookies}>
        Згоден
      </button>
    </div>
  );
}

export default PopUpCookies;

PopUpCookies.propTypes = {
  togglePopUpCookies: PropTypes.func,
};
