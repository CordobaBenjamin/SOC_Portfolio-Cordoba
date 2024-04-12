import React from "react";
import Image from "next/image";

const Learning_card = () => {
  return (
    <div className="w-4/5 mx-auto px-10 pt-2 pb-10 mt-10 shadow-2xl border-2 border-black rounded-2xl">
      <div className="w-16 h-16 p-2 border-2  mx-auto my-5 rounded-full shadow-2xl border-gray-300  bg-gray-300 bg-opacity-90  relative">
        <Image
          src="/study_logo.png"
          alt="Front end Icon"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
      </div>

      <h2 className="flex justify-center text-xl mb-5 font-medium">
        {" "}
        Where, I Learning?
      </h2>

      <span> Most of my knowledge is a mix between courses such as </span>

      <span className="font-semibold">
        CoderHouse, Devtalles or Codo a Codo,
      </span>

      <span>My career in</span>

      <span className="font-semibold"> computer science engineering,</span>

      <span>
        {" "}
        self-taught forms of learning such as. web courses, Stack Overflow, MDN,
        practices with colleagues and projects etc... and above all things,
      </span>

      <span className="text-red-700 font-bold"> time, a lot of time</span>
    </div>
  );
};

export default Learning_card;
