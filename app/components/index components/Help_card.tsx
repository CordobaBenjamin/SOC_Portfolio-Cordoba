import React from 'react'
import Image from 'next/image';
import LanguageTexts from "./SwitchMode/lenguageSwitcher/lenguageText";
import { useLanguage } from "./SwitchMode/lenguageSwitcher/lenguageSwitcher";

import Colors from "./SwitchMode/modeSwitcher/modeColors";
import { useMode } from "./SwitchMode/modeSwitcher/modeSwitcher";


const Help_card = () => {
  
  const {mode} = useMode()
  const {textMain, textSecondary} = Colors[mode].text;
  const {bg, main, border, borderSecondary, overlap} = Colors[mode].color;


  const { language } = useLanguage();
  const {title, span1, span2} = LanguageTexts[language].help_card;

  return (
    <>
      <div className={`w-4/5 md:w-2/3 xl:w-2/5 xl:mx-6 xl:mb-0 mx-auto px-10 pt-2 pb-10 mb-5 ${overlap}  border-2 ${borderSecondary} rounded-2xl`}>
              <div className="w-16 h-16 p-2 border-2  mx-auto my-5 rounded-full shadow-2xl border-gray-300  bg-gray-300 bg-opacity-90 relative lg:w-24 lg:h-24">
                <Image
                  src="/front_logo.png"
                  alt="Front end Icon"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              <h2 className={`flex justify-center text-xl mb-5 font-medium  md:text-2xl  lg:text-3xl ${textMain}`}>
                {title}
              </h2>

              <span className={`md:text-xl  lg:text-2xl ${textMain}`}>
                {span1}
              </span>
              
            </div>
    </>
  )
}

export default Help_card;
