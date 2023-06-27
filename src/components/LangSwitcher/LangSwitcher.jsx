import { useState } from "react";
import PropTypes from "prop-types";
import sprite from "../../assets/images/svg/icons_sprite.svg";
import styled from "./LangSwitcher.module.css";

function LangSwitcher() {

    const [lang, setLang] = useState("en");

  const toggleLang = () => {
      console.log("toggleLang");
      const newLang = lang === "en" ? "ua" : "en";
      setLang(newLang);
    };
  return (
    <div className={styled.switcher}>
      <input
        className={styled.checkbox}
        type="checkbox"
        checked={lang === "en"}
        id="lang-switcher"
        onChange={toggleLang}
      />

      <label className={styled.label}>
        <svg className={styled.flagSvg}>
          <use href={sprite + `#united-kingdom`} />
        </svg>
        <svg className={styled.FlagSvg}>
          <use href={sprite + `#ukraine`} />
        </svg>

        <span className={styled.ball} />
      </label>
    </div>
  );
}

LangSwitcher.propTypes = {
  toggleLang: PropTypes.func,
}

export default LangSwitcher



