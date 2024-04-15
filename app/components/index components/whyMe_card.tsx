import React from "react";
import Image from "next/image";
import LanguageTexts from "./SwitchMode/lenguageSwitcher/lenguageText";
import { useLanguage } from "./SwitchMode/lenguageSwitcher/lenguageSwitcher";

import Colors from "./SwitchMode/modeSwitcher/modeColors";
import { useMode } from "./SwitchMode/modeSwitcher/modeSwitcher";


const WhyMe_card = () => {
  
  const {mode} = useMode()
  const {textMain, textSecondary} = Colors[mode].text;
  const {bg, main, borderSecondary, overlap} = Colors[mode].color;

  const { language } = useLanguage();
  const { title, span1, span2, span3, span4, span5, span6, span7 } =
    LanguageTexts[language].why_me_card;

  return (
    <div className={`w-4/5 md:w-2/3 xl:w-2/5 xl:m-0 mx-auto px-10 pt-2 pb-10 mt-10 ${overlap} border-2 ${borderSecondary} rounded-2xl`}>
      <div className="w-16 h-16 p-2 border-2  mx-auto my-5 rounded-full shadow-2xl border-gray-300  bg-gray-300 bg-opacity-90  relative lg:w-24 lg:h-24">
        <Image
          src="/me_icon.png"
          alt="Front end Icon"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <h2 className={`flex justify-center text-xl mb-5 font-medium md:text-2xl  lg:text-3xl ${textMain}`}>
        {title}
      </h2>
      <div className="">
        <div className={`md:text-xl  lg:text-2xl ${textMain}`}>
          <span> {span1} </span>

          <span className={`${textSecondary} font-bold`}> {span2} </span>

          <span>{span3}</span>

          <span>{span4}</span>

          <span className="font-semibold">{span5}</span>

          <span>{span6}</span>

          <span className="font-semibold">{span7}</span>
        </div>
      </div>
    </div>
  );
};

export default WhyMe_card;
