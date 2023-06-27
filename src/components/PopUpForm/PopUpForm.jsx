import PropTypes from "prop-types";

import styles from "./PopUpForm.module.css";

function PopUpForm({ togglePopUp, togglePopUpForm }) {
  function toggle() {
    togglePopUp();
    togglePopUpForm();
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.popUpForm}>
        <button className={styles.ecross} onClick={togglePopUpForm} />
        <h2 className={styles.popUpForm_title}>Залишайте заявку</h2>
        <p className={styles.popUpForm_subTitle}>
          Ми зв’яжемося з вами найближчим часом.
        </p>
        <input className={styles.name} placeholder="Ваше ім'я*" type="text" />
        <input
          className={styles.phone}
          placeholder="+380-00-000-00-00*"
          type="text"
        />
        <button className={styles.btn} onClick={toggle}>
          Відправить
        </button>
        <p className={styles.text}>
          Натискаючи кнопку “Надіслати”, ви погоджуєтесь з Правилами обробки
          персональних даних.
        </p>
      </div>
    </div>
  );
}

export default PopUpForm;

PopUpForm.propTypes = {
  togglePopUpForm: PropTypes.func,
  togglePopUp: PropTypes.func,
};
