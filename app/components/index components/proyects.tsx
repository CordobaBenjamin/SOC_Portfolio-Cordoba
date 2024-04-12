import React from "react";
import Image from "next/image";
import { useState } from "react";

const Proyects = () => {
  return <>
    <div className="w-full p-4 bg-gray-200 mt-24">
      <div className="flex flex-col justify-center">
        <div>
          <h1 className="text-7xl font-semibold flex justify- pt-2 w-full text-red-700">
            {" "}
            Main{" "}
          </h1>
        </div>
        <div>
          <h1 className="text-7xl font-semibold flex justify-end pt-2 w-full ">
            {" "}
            Proyects{" "}
          </h1>
        </div>
      </div>


      <div>
        <div className="flex  flex-col justify-center mt-14  shadow-2xl shadow-gray-700 p-4 rounded-xl ">
          <h2 className="flex justify-center font-bold text-xl text-red-700 border-2 border-y-red-900">
            {" "}
            Sign Up Proyect
          </h2>
          <div className="w-full h-56 shadow-2xl  shadow-gray-500 rounded-2xl overflow-hidden my-5 relative">
            <Image
              src="/sign_up.png"
              className="inset-0 w-full h-full object-cover grayscale-image transition-transform duration-300 transform scale-100 hover:scale-150"
              alt="Image"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
          </div>
          <div>
            <span>Login page project developed with</span>
            <span className="font-bold"> Next.js, React Hook Form</span>
            <span> stylized using</span>
            <span className="font-bold"> Tailwind CSS.</span>
            <span> The app also implements encryption</span>
            <span className="font-bold">
              {" "}
              AES (Advanced Encryption Standard)
            </span>
            <span> to secure locally stored data using</span>
            <span className="font-bold"> CryptoJS.</span>
          </div>
        </div>

        <div className="flex  flex-col justify-center mt-14  shadow-2xl shadow-gray-700 p-4 rounded-xl ">
          <h2 className="flex justify-center font-bold text-xl  text-red-700 border-2 border-y-red-900">
            {" "}
            Ecommerce Proyect
          </h2>
          <div className="w-full h-56 shadow-2xl shadow-gray-500 rounded-2xl overflow-hidden my-5 relative">
            <Image
              src="/market_gaming.png"
              className="inset-0 w-full h-full object-cover  grayscale-image transition-transform duration-300 transform scale-100 hover:scale-150"
              alt="Image"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
          </div>
          <div>
            <span> Ecommerce application  </span>
            <span className="font-bold"> Transpiled to TSX</span>
            <span> from an old javascript-based project,</span>
            <span> for greater </span>
            <span className="font-bold"> Stability, Maintenance</span>
            <span> and</span>
            <span className="font-bold"> Clean </span>
            <span> code. It is created in </span>
            <span className="font-bold"> Next.js </span>
            <span> and is styled with </span>
            <span className="font-bold"> Pure CSS3</span>
          </div>
        </div>

        <div className="flex  flex-col justify-center mt-14  shadow-2xl shadow-gray-700 p-4 rounded-xl ">
          <h2 className="flex justify-center font-bold text-xl  text-red-700 border-2 border-y-red-900">
            {" "}
            Game Proyect
          </h2>
          <div className="w-full h-56 shadow-2xl shadow-gray-500 rounded-2xl overflow-hidden my-5 relative">
            <Image
              src="/hangman.png"
              className="inset-0 w-full h-full object-cover  grayscale-image transition-transform duration-300 transform scale-100 hover:scale-150"
              alt="Image"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
          </div>
          <div>
            <span className="font-bold"> TypeScript </span>
            <span> Hangman game project, was created with  </span>
            <span className="font-bold"> Pure CSS </span>
            <span> and  </span>
            <span className="font-bold"> Webpack</span>
            <span>, Although the project is not extensive, it was a challenge to work on </span>
            <span className="font-bold"> The logic of functions</span>
            <span> in </span>
            <span> TypeScript </span>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default Proyects;
