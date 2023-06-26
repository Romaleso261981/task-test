import { useState } from "react";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import PopUpForm from "../../components/PopUpForm/PopUpForm";
import PopUpCookies from "../../components/PopUpCookies/PopUpCookies";
import styles from "./Home.module.css";
import Container from "../../components/Container/Container";

function Home() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showPopUpCookies, setShowPopUpCookies] = useState(false);

  function togglePopUpCookies() {
    setShowPopUpCookies(!showPopUpCookies);
  }

  setTimeout(() => togglePopUpCookies(!showPopUp), 2000);

  function togglePopUpForm() {
    setShowPopUp(!showPopUp);
  }


  
  return (
    <Container>
      <Header />
      <Hero togglePopUpForm={togglePopUpForm} />
      <div className={styles.homeWrapper} />
      {showPopUp && <PopUpForm togglePopUpForm={togglePopUpForm} />}
      {showPopUpCookies && (
        <PopUpCookies togglePopUpCookies={togglePopUpCookies} />
      )}
    </Container>
  );
}

export default Home;
