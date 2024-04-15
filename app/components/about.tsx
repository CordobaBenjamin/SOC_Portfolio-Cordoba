import Image from "next/image";
import LanguageTexts from './index components/SwitchMode/lenguageSwitcher/lenguageText';
import { useLanguage } from './index components/SwitchMode/lenguageSwitcher/lenguageSwitcher';
import Colors from './index components/SwitchMode/modeSwitcher/modeColors';
import { useMode } from './index components/SwitchMode/modeSwitcher/modeSwitcher';

const About = () => {
  
  const {mode} = useMode()
  const {textMain, textSecondary} = Colors[mode].text;
  const {bg, main, border, opacity} = Colors[mode].color;

  const { language,  } = useLanguage();
  const { tittle, span1, span2, span3, span4, } =
    LanguageTexts[language].about;

  return (
    <>
      <div className={`w-full p-4 ${bg} mt-24`} id="about">
        <div className="flex flex-row justify-center">
          <h1 className={`text-6xl font-semibold flex justify-center pt-2 w-full my-6 border-y-2 ${border} ${textMain} md:text-7xl lg:text-9xl`}>
            {tittle}
          </h1>
        </div>

        <div className="flex flex-col-reverse xl:flex-row">
          <div className="xl:w-4/5 flex justify-center flex-col">
            <div>
              <h1 className={`text-2xl font-bold ${textSecondary} pt-6 md:text-5xl`}>
                Benjamin L. Cordoba
              </h1>
              <div className={`flex flex-col pb-10 mb-2 md:text-xl xl:text-3xl ${textMain}`}>
                <div>
                  <span>{span1}</span>
                  <span className="font-semibold">{span2}</span>
                  <div>
                    <span>{span3}</span>
                    <span className="font-semibold">
                     {span4}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-4/6 sm:w-3/6 lg:w-1/3">
            <Image
              src="/about_pic.png"
              alt="Retrato"
              width={150}
              height={100}
              className={`rounded-3xl ${opacity} shadow-2xl flex justify-center xl:shadow-none xl:rounded-2xl xl:justify-end duration-1000 transition-all `}
              sizes="50vw"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
