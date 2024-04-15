import React from "react"; // Importar React (aunque no se use explícitamente aquí)

import LanguageTexts from "./index components/SwitchMode/lenguageSwitcher/lenguageText";
import { useLanguage } from "./index components/SwitchMode/lenguageSwitcher/lenguageSwitcher";

import Colors from "./index components/SwitchMode/modeSwitcher/modeColors";
import { useMode } from "./index components/SwitchMode/modeSwitcher/modeSwitcher";

const Main_title = () => {
  const { mode } = useMode();
  const { textMain, textSecondary, textSecondary2 } = Colors[mode].text;
  const { bg, main, borderX } = Colors[mode].color;

  const { language } = useLanguage();
  const { span1, span2 } = LanguageTexts[language].main;

  const colorPalette = {
    textPrimary: "text-black", // Color de texto principal (negro)
    textSecondary: "text-red-700", // Color de texto secundario (gris suave)
    bgColor: "bg-white", // Fondo blanco
    textTransparent: "text-transparent", // Texto transparente
    bgClipText: "bg-clip-text", // Fondo para el texto
  };

  return (
    <div
      id="home"
      className={`flex justify-center flex-col mt-28 lg:mt-16 xl:mt-20`}
    >
      <div className="inline-block">
        <h4
          className={`flex justify-center text-xl sm:text-2xl lg:text-3xl  mb-5 font-semibold  ${textMain}`}
        >
          <div>
            <span>👋</span>

            <span className={`${textMain}`}>{span1}</span>

            <span className={`${textSecondary}`}> Benjamin</span>

            <span className={`${textMain}`}>{span2}</span>
          </div>
        </h4>
      </div>

      <div className="flex justify-center items-center">
        <h1
          className={` text-7xl min-[505px]:text-8xl min-[665px]:text-9xl lg:text-12xl xl:text-14 2xl:text-15xl font-bold ${colorPalette.textTransparent} ${colorPalette.bgClipText} text-center w-full`}
        >
          <span
            className={`inline-block ${textSecondary} animate__animated animate__slideInLeft`}
          >
            Front End
          </span>{" "}
          <span
            className={`block ${textMain} animate__animated animate__slideInLeft`}
          >
            Developer
          </span>
        </h1>
      </div>

      <div className="flex justify-between  xl:mx-40 my-14">
        <button
          className={`${textSecondary} ${borderX} text-xs sm:text-lg xl:text-2xl font-bold px-4 py-2 border-2 ml-5 xl:ml-20 boton-brillante`}
        >
          Curriculum Vitae
        </button>

        <button
          className={`${textSecondary} ${borderX} text-xs sm:text-lg xl:text-2xl font-bold px-4 py-2 border-2 mr-5 xl:ml-20`}
        >
          Argentina
        </button>

      </div>

    </div>
  );
};

export default Main_title;
