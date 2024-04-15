import React from "react";
import Image from "next/image";

import LanguageTexts from "./index components/SwitchMode/lenguageSwitcher/lenguageText";
import { useLanguage } from "./index components/SwitchMode/lenguageSwitcher/lenguageSwitcher";

import Colors from "./index components/SwitchMode/modeSwitcher/modeColors";
import { useMode } from "./index components/SwitchMode/modeSwitcher/modeSwitcher";

const Contact = () => {
  const { mode } = useMode();
  const { textMain, textSecondary, telefono, mail, git } = Colors[mode].text;
  const { bg, main, borderSecondary, overlap, overlap2 } = Colors[mode].color;

  const { language } = useLanguage();
  const { title, span1, span2, span3, span4 } = LanguageTexts[language].contact;

  return (
    <>
      <div id={`"contact" className="w-full p-4 ${bg} mt-24"`}>
        <div className="flex flex-row justify-center">
          <h1
            className={`text-6xl ${textSecondary} font-semibold flex justify-center pt-2 w-full my-6 border-y-2 ${borderSecondary} md:text-7xl lg:text-9xl`}
          >
            {title}
          </h1>
        </div>

        <div className=" flex  justify-center flex-col md:flex-row ">
          <div className="md:w-2/3 md:mt-0 lg:w-3/5 xl:w-11/12">
            <div>
              <div className={`flex flex-col pb-10 mb-2 mx-8 sm:mx-auto`}>
                <span className={`mx-auto  xl:text-xl font-medium ${textMain}`}>
                  {span1}
                </span>
              </div>
            </div>

            <div className="flex justify-center flex-col mx-10 xl:flex-row  ">
            <div
                className={`w-full mx-auto px-10 pt-2 pb-10 mb-10 ${overlap} border-2 ${borderSecondary} rounded-2xl  xl:mx-5 xl:w-full xl:p-5 xl:px-10`}
              >
                <div className="w-12 h-12 p-2  mx-auto my-5  bg-transparent relative ">
                  <Image
                    src={git}
                    alt="GitHub Icon"
                    layout="fill"
                    className="bg-transparent"
                  />
                </div>

                <h2
                  className={`flex justify-center text-xl font-medium ${textSecondary}`}
                >
                  {span4}
                </h2>

                <a href="https://github.com/CordobaBenjamin?tab=repositories" target="_blank">
                  <h1
                    className={`flex justify-center font-bold text-l px-2 ${textMain}`}
                  >  
                    github.com/CordobaBenjamin
                  </h1>
                </a>
              </div>
           
              <div
                className={`w-full mx-auto px-10 pt-2 pb-10 mb-10 ${overlap} border-2 ${borderSecondary} rounded-2xl  xl:mx-5 xl:w-full xl:p-5 xl:px-10`}
              >
                <div className="w-14 h-12 mx-auto  my-5  bg-transparent relative ">
                  <Image
                    src={mail}
                    alt="Front end Icon"
                    layout="fill"
                    className=" bg-transparent"
                  />
                </div>

                <h2
                  className={`flex justify-center text-xl font-medium ${textSecondary}`}
                >
                  {" "}
                  {span2}
                </h2>

                <h1
                  className={`flex justify-center font-bold text-l px-2 ${textMain}`}
                >
                  <a
                    href="mailto:cordobabencontact@gmail.com?subject=Asunto del correo&body=Cuerpo del correo"
                    target="_blank"
                  >
                    {" "}
                    cordobabencontact@gmail.com{" "}
                  </a>
                </h1>

              </div>

              <div
                className={`w-full mx-auto px-10 pt-2 pb-10 mb-10 ${overlap} border-2 ${borderSecondary} rounded-2xl  xl:mx-5 xl:w-full xl:p-5 xl:px-10`}
              >
                <div className="w-12 h-12 p-2  mx-auto my-5  bg-transparent relative ">
                  <Image
                    src={telefono}
                    alt="Front end Icon"
                    layout="fill"
                    className="bg-transparent"
                  />
                </div>

                <h2
                  className={`flex justify-center text-xl font-medium ${textSecondary}`}
                >
                  {span3}
                </h2>

                <h1
                  className={`flex justify-center font-bold text-l px-2 ${textMain}`}
                >
                  +54 11 3256-5554{" "}
                </h1>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Contact;
