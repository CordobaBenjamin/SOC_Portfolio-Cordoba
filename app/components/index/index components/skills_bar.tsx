import React from "react";

const languages = [
  {
    name: "React",
    icon: "/react_logo.png",
    class: "h-16 min-w-16 rounded-2xl",
  },
  {
    name: "Next.js",
    icon: "/next_logo.png",
    class: "h-16 min-w-16 rounded-2xl",
  },
  {
    name: "Tailwind",
    icon: "/tailwind_logo.png",
    class: "h-12 min-w-16 rounded-2xl",
  },
  {
    name: "JavaScript",
    icon: "/jsx_logo.png",
    class: "h-16 min-w-16 rounded-2xl",
  },
  {
    name: "TypeScript",
    icon: "/tsx-logo-512.png",
    class: "h-16 min-w-16 rounded-2xl",
  },
];

const Skills_bar = () => {
  return (
    <>
      <h2 className="flex justify-center text-2xl font-medium text-red-700 animate-pulse">
        Coding Skills
      </h2>
      <div className="w-4/5 mx-auto px-10 pt-2 pb-10 my-5 shadow-2xl border-2 border-black rounded-2xl">
        <div className="w-16 h-16 p-2 border-2  mx-auto my-5 rounded-full shadow-2xl border-gray-300  bg-gray-300 bg-opacity-90 ">
          <img
            src="/front_logo.png"
            alt="Front end Icon"
            className="animate-pulse"
          ></img>
        </div>
        <h2 className="flex justify-center text-xl mb-5">
          {" "}
          How I can help you?
        </h2>
        <span>
          {" "}
          For me, it is important to know all aspects of the web development
          process; I will learn any technology that helps me create
          applications. For now I am focusing on front end, 
        </span>
        <span className="text-red-700 font-semibold"> and ... </span>
      </div>
      <div className="overflow-hidden relative w-full h-32">
        <h2 className="flex justify-center text-red-700 text-xl font-semibold">
          These are my knowledge for the moment
        </h2>
        <div className="animate-slide whitespace-nowrap flex items-center h-full ">
          {languages.map((lang, index) => (
            <div key={index} className="mx-6 flex items-center flex-col">
              <img src={lang.icon} alt={lang.name} className={lang.class} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills_bar;
