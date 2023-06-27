// import { useState } from "react";
// import PropTypes from "prop-types";
// import sprite from "../../assets/images/svg/icons_sprite.svg";
// import styled from "./LangSwitcher.module.css";

// function LangSwitcher() {

//     const [lang, setLang] = useState("en");

//   const toggleLang = () => {
//       console.log("toggleLang");
//       const newLang = lang === "en" ? "ua" : "en";
//       setLang(newLang);
//     };
//   return (
//     <div className={styled.switcher}>
//       <input
//         className={styled.checkbox}
//         type="checkbox"
//         checked={lang === "en"}
//         id="lang-switcher"
//         onChange={toggleLang}
//       />

//       <label className={styled.label}>
//         <svg className={styled.flagSvg}>
//           <use href={sprite + `#united-kingdom`} />
//         </svg>
//         <svg className={styled.FlagSvg}>
//           <use href={sprite + `#ukraine`} />
//         </svg>

//         <span className={styled.ball} />
//       </label>
//     </div>
//   );
// }

// LangSwitcher.propTypes = {
//   toggleLang: PropTypes.func,
// }

// export default LangSwitcher

// Загружаемые языковые ресурсы
// const resources = {
//   en: {
//     greeting: "Hello!",
//     farewell: "Goodbye!"
//   },
//   es: {
//     greeting: "¡Hola!",
//     farewell: "¡Adiós!"
//   },
//   fr: {
//     greeting: "Bonjour!",
//     farewell: "Au revoir!"
//   }
// };

// Текущий язык по умолчанию
// let currentLanguage = 'en';

// Функция для получения соответствующей фразы на текущем языке
// function getTranslation(key) {
//   if (resources[currentLanguage] && resources[currentLanguage][key]) {
//     return resources[currentLanguage][key];
//   }
//   // Возвращаем ключевую фразу, если перевод не найден
//   return key;
// }

// Пример использования
// console.log(getTranslation('greeting')); // Вывод: Hello!

// Переключение языка
// currentLanguage = 'es';
// console.log(getTranslation('greeting')); // Вывод: ¡Hola!

// currentLanguage = 'fr';
// console.log(getTranslation('farewell')); // Вывод: Au revoir!
// В приведенном примере мы используем объект resources, который содержит переводы фраз на разные языки. Функция getTranslation принимает ключевую фразу и возвращает соответствующий перевод на текущем языке. Если перевод не найден, функция вернет саму ключевую фразу.

// Вы можете изменить currentLanguage на нужный язык, и функция getTranslation будет возвращать перевод на выбранном языке.

import { useState } from "react";

// Загружаемые языковые ресурсы
const resources = {
  en: {
    greeting: "Hello!",
    farewell: "Goodbye!",
  },
  es: {
    greeting: "¡Hola!",
    farewell: "¡Adiós!",
  },
  fr: {
    greeting: "Bonjour!",
    farewell: "Au revoir!",
  },
};

const LangSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  // Функция для получения соответствующей фразы на текущем языке
  const getTranslation = (key) => {
    if (resources[currentLanguage] && resources[currentLanguage][key]) {
      return resources[currentLanguage][key];
    }
    // Возвращаем ключевую фразу, если перевод не найден
    return key;
  };

  const handleLanguageChange = (event) => {
    setCurrentLanguage(event.target.value);
  };

  return (
    <div>
      <select value={currentLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
      <h2>{getTranslation("greeting")}</h2>
      <p>{getTranslation("farewell")}</p>
    </div>
  );
};

export default LangSwitcher;
