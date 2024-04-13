import React from "react";
import Image from "next/image";

const languages = [
  {
    name: "React",
    icon: "/react_logo_wb.png",
    class: "h-16 min-w-16 rounded-2xl border-2 border-black",
  },
  {
    name: "Next.js",
    icon: "/next_logo.png",
    class: "h-16 min-w-16 rounded-2xl border-2 border-black",
  },
  {
    name: "Tailwind",
    icon: "/tailwind_logo_wb.png",
    class: "h-16 min-w-16 rounded-2xl pt-2 pb-2 border-2 border-black",
  },
  {
    name: "JSX",
    icon: "/jsx_logo_wb.png",
    class: "h-16 min-w-16 rounded-2xl border-2 border-black",
  },
  {
    name: "TSX",
    icon: "/tsx-logo-512_wb.png",
    class: "h-16 min-w-16 rounded-2xl border-2 border-black",
  },
];

const Skills_bar = () => {
  return <>

    <div className="overflow-hidden relative w-full h-32 mb-5">
      <h2 className="flex justify-center mb-5 text-red-700 text-xl font-semibold md:text-2xl xl:text-3xl">
        These are my knowledge for the moment
      </h2>
      <div className="animate-slide whitespace-nowrap flex items-center h-full mb-5">
        {languages.map((lang, index) => (
          <div key={index} className="mx-6 flex items-center flex-col">
            <div className="w-16 h-16 relative md:w-20 md:h-20 xl:w-24 xl:h-24 "> 
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
            <h2 className="mb-4 text-red-800 md:my-">{lang.name}</h2>
          </div>
        ))}
      </div>

  </div>
  </>;
};

export default Skills_bar;
