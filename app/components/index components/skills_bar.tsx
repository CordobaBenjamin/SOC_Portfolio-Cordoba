import React from "react";
import Image from "next/image";
import LanguageTexts from "./SwitchMode/lenguageSwitcher/lenguageText";
import { useLanguage } from "./SwitchMode/lenguageSwitcher/lenguageSwitcher";

import Colors from "./SwitchMode/modeSwitcher/modeColors";
import { useMode } from "./SwitchMode/modeSwitcher/modeSwitcher";



const Skills_bar = () => {
  
  const {mode} = useMode()
  const {textMain, textSecondary, textSecondary2, next} = Colors[mode].text;
  const {bg, main, borderSecondary} = Colors[mode].color;


  const { language } = useLanguage();
  const {h2} = LanguageTexts[language].about;

  
const languages = [


  {
    name: "React",
    icon: "/react_icon.png",
    class: `h-20 min-w-20 p-2 rounded-xl  grayscale duration-1000 transition-all animate-photo`,
  },
  {
    name: "Next.js",
    icon: `${next}`,
    class: `h-20 min-w-20 p-2rounded-xl  grayscale duration-1000 transition-all animate-photo`,
  },
  {
    name: "Tailwind",
    icon: "/tailwind_icon.png",
    class: `h-20 min-w-20 py-6 p-2 rounded-xl grayscale duration-1000 transition-all animate-photo`,
  },
  {
    name: "JSX",
    icon: "/jsx_icon.png",
    class: `h-20 min-w-20 p-2 rounded-xl  grayscale duration-1000 transition-all animate-photo`,
  },
  {
    name: "TSX",
    icon: "/tsx_icon.png",
    class: `h-20 min-w-20 p-2 rounded-xl grayscale duration-1000 transition-all animate-photo`,
  },
];


  return <div className="my-20">

    <div className="overflow-hidden relative w-full h-4/5 my-5">
      <div className=""> 
        <h2 className={`flex justify-center mx-auto w-11/12 mb-6 ${textSecondary} text-xl font-semibold md:text-2xl xl:text-3xl`}>
          {h2}
        </h2>
      </div>
      <div className="animate-slide whitespace-nowrap flex items-center  mb-5 h-1/4">
        {languages.map((lang, index) => (
          <div key={index} className="mx-6 flex items-center flex-col">
            <div className="w-20 h-20 relative md:w-24 md:h-24 xl:w-28 xl:h-28 "> 
            <Image
              src={lang.icon}
              alt={lang.name}
              className={lang.class}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
            </div>
            <div className=""> 
            <h2 className={`${textSecondary2} text-xl`}>{lang.name}</h2>
            </div>
          </div>
        ))}
      </div>

  </div>
  </div>;
};

export default Skills_bar;
