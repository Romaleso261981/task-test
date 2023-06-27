import styles from "./PopUp.module.css";
import PropTypes from "prop-types";
import Icon from "../../assets/images/quality.png";

function PopUp({ text, title, togglePopUp }) {
  setTimeout(() => togglePopUp(), 2000);
  return (
    <div className={styles.wpapper}>
      <img src={Icon} className={styles.icon} alt="icon" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

PopUp.propTypes = {
  text: PropTypes.string,   
  btnText: PropTypes.string,
  togglePopUp: PropTypes.func,
  title: PropTypes.string,
};

export default PopUp;
