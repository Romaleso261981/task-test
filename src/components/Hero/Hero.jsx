import PropTypes from "prop-types";

import styles from "./Hero.module.css";
import Container from "./../Container/Container";

function Hero({ togglePopUpForm }) {
  return (
    <Container>
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.content_title}>Meltem</h1>
          <p className={styles.content_text}>
            Meltem – це гарантовано якісне вентиляційне обладнання від
            німецького заводу.
          </p>
          <button className={styles.content_btn}>Продукція</button>
        </div>
        <div className={styles.hero_images} />
        <div className={styles.info}>
          <p className={styles.info_text}>Відцентровий витяжний вентилятор</p>
          <h3 className={styles.info_title}>Meltem V-II 30-N</h3>
          <button className={styles.info_btn} onClick={togglePopUpForm}>
            Детальніше
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Hero;

Hero.propTypes = {
  togglePopUpForm: PropTypes.func,
};
