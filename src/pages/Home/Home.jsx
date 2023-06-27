import { useState } from "react";
// import Carousel from "react-bootstrap-carousel";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import PopUpForm from "../../components/PopUpForm/PopUpForm";
import PopUpCookies from "../../components/PopUpCookies/PopUpCookies";
import PopUp from "../../components/PopUp/PopUp";
import Container from "../../components/Container/Container";

import styles from "./Home.module.css";

function Home() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [isShowPopUp, setIsShowPopUp] = useState(false);
  const [showPopUpCookies, setShowPopUpCookies] = useState(true);

  function togglePopUpCookies() {
    setShowPopUpCookies(!showPopUpCookies);
  }

  // setTimeout(() => setShowPopUpCookies(true), 2000);

  function togglePopUpForm() {
    setShowPopUp(!showPopUp);
  }

  function togglePopUp() {
    setIsShowPopUp(!isShowPopUp);
  }

  return (
    <Container>
      <Header />
      <Hero togglePopUpForm={togglePopUpForm} />
      <div className={styles.homeWrapper} />
      {showPopUp && (
        <PopUpForm
          togglePopUpForm={togglePopUpForm}
          togglePopUp={togglePopUp}
        />
      )}
      {isShowPopUp && (
        <PopUp
          title="Дякуємо за заявку!"
          text="Ваші дані успішно надіслані!"
          setIsShowPopUp={togglePopUp}
          btnText="Закрити"
          togglePopUp={togglePopUp}
        />
      )}
      {showPopUpCookies && (
        <PopUpCookies togglePopUpCookies={togglePopUpCookies} />
      )}
    </Container>
  );
}

export default Home;
