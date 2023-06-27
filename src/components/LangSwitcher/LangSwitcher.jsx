import { useState } from "react";
import sprite from "../../assets/images/svg/icons_sprite.svg";
import { Ball, Checkbox, Label, Switcher, FlagSvg } from "./LangBtn.styled";

export const LangSwitcher = () => {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    const newLang = lang === "en" ? "ua" : "en";
    setLang(newLang);
  };

 

  return (
    <Switcher>
      <Checkbox
        type="checkbox"
        checked={lang === "en"}
        id="lang-switcher"
        onChange={toggleLang}
      />

      <Label htmlFor="lang-switcher">
        <FlagSvg>
          <use href={sprite + `#united-kingdom`} />
        </FlagSvg>
        <FlagSvg>
          <use href={sprite + `#ukraine`} />
        </FlagSvg>

        <Ball />
      </Label>
    </Switcher>
  );
};
