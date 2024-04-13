import React from "react";
import Image from "next/image";

const languages = [
  {
    name: "React",
    icon: "/react_icon.png",
    class: "h-16 min-w-16 rounded-2xl border-2 border-black grayscale duration-1000 transition-all animate-photo",
  },
  {
    name: "Next.js",
    icon: "/next_icon.png",
    class: "h-16 min-w-16 rounded-2xl border-2 border-black grayscale duration-1000 transition-all animate-photo",
  },
  {
    name: "Tailwind",
    icon: "/tailwind_icon.png",
    class: "h-16 min-w-16 rounded-2xl pt-2 pb-2 border-2 border-black grayscale duration-1000 transition-all animate-photo",
  },
  {
    name: "JSX",
    icon: "/jsx_icon.png",
    class: "h-16 min-w-16 rounded-2xl border-2 border-black grayscale duration-1000 transition-all animate-photo",
  },
  {
    name: "TSX",
    icon: "/tsx_icon.png",
    class: "h-16 min-w-16 rounded-2xl border-2 border-black grayscale duration-1000 transition-all animate-photo",
  },
];

const Skills_bar = () => {
  return <div className="my-20">

    <div className="overflow-hidden relative w-full h-4/5 my-5">
      <h2 className="flex justify-center mb-6 text-red-700 text-xl font-semibold md:text-2xl xl:text-3xl">
        These are my Code Skills for the moment
      </h2>
      <div className="animate-slide whitespace-nowrap flex items-center  mb-5 h-1/4">
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
            <div className=""> 
            <h2 className="text-red-800">{lang.name}</h2>
            </div>
          </div>
        ))}
      </div>

  </div>
  </div>;
};

export default Skills_bar;
