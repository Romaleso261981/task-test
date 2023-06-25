import { useState } from "react";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import PopUpForm from "../../components/PopUpForm/PopUpForm";
import styles from "./Home.module.css";
import Container from "../../components/Container/Container";

function Home() {
  const [showPopUp, setShowPopUp] = useState(false);
function togglePopUpForm() {
    setShowPopUp(!showPopUp);
  }

  return (
    <Container>
      <Header />
      <Hero togglePopUpForm={togglePopUpForm} />
      <div className={styles.homeWrapper} />
      {showPopUp && <PopUpForm togglePopUpForm={togglePopUpForm} />}
    </Container>
  );
}

export default Home;
