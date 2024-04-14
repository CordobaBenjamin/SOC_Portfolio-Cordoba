import React from "react"; // Importar React (aunque no se use explícitamente aquí)

import LanguageTexts from './components/lenguageText'
import { useLanguage } from './components/lenguageSwitcher';


// Otros imports...

// Definición de la paleta de colores
const colorPalette = {
  textPrimary: "text-black", // Color de texto principal (negro)
  textSecondary: "text-red-700", // Color de texto secundario (gris suave)
  bgColor: "bg-white", // Fondo blanco
  textTransparent: "text-transparent", // Texto transparente
  bgClipText: "bg-clip-text", // Fondo para el texto
};

const Main_title = () => {

  const { language } = useLanguage();
  const {span1, span2} = LanguageTexts[language].main;

  return (
    <div id="home" className={`flex justify-center flex-col mt-28 lg:mt-16 xl:mt-20 ` }>
      <div className="inline-block">
        <h4
          className={`flex justify-center text-xl sm:text-2xl lg:text-3xl  mb-5 font-semibold  ${colorPalette.textPrimary}`}
        >
          <div>
            <span className={`${colorPalette.textSecondary}`}>👋</span>

            <span>{span1}</span>

            <span className={`${colorPalette.textSecondary}`}> Benjamin</span>

            <span>{span2}</span>
          </div>
        </h4>
      </div>

      <div className="flex justify-center items-center">
        <h1
          className={` text-7xl min-[505px]:text-8xl min-[665px]:text-9xl lg:text-12xl xl:text-14 2xl:text-15xl font-bold ${colorPalette.textTransparent} ${colorPalette.bgClipText} text-center w-full`}
        >
          <span className={`inline-block ${colorPalette.textSecondary} animate__animated animate__slideInLeft`}>
            Front End
          </span>{" "}
          <span className={`block ${colorPalette.textPrimary} animate__animated animate__slideInLeft`}>Developer</span>
        </h1>
      </div>

      <div className="grid grid-cols-8 h-1/3">
        
        <div className="col-start-1 col-end-3 mx-auto">
            
        </div>

        <div className="col-span-4 flex justify-center items-center relative">
          <div className="absolute inset-0 z-0 flex justify-center items-center  xl:size-9/12 2xl:size-7/12 mx-auto">
          </div>
        </div>
        <div className="col-start-7 col-end-9 w-fit ">
          
        </div>
      </div>

      <div className="mt-40 flex flex-col xl:mt-28">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 animate-ping xl:w-16 xl:h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </div>

        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 animate-ping xl:w-16 xl:h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </div>

        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 animate-ping xl:w-16 xl:h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Main_title;
