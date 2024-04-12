import React from "react";
import type { SVGProps } from 'react';
import Image from "next/image";

// Definición de la paleta de colores
const colorPalette = {
  textPrimary: "text-black", // Color de texto principal (negro)
  textSecondary: "text-red-700", // Color de texto secundario (gris suave)
  bgColor: "bg-white", // Fondo blanco
  textTransparent: "text-transparent", // Texto transparente
  bgClipText: "bg-clip-text", // Fondo para el texto
};


const Main_title = () => {
  return (
    <div
      className={`flex justify-center flex-col mt-36 `}
    >
      <div className="inline-block">
        <h4
          className={`flex justify-center text-xl font-semibold ${colorPalette.textPrimary}`}
        >
          <span className={`${colorPalette.textSecondary}`}>👋</span>

          <span>, my name is {" "};</span>

          <span className={`${colorPalette.textSecondary}`}>Benjamin</span>

          <span>and I am a ...</span>
        </h4>
      </div>

      <div>
        <h1
          className={`text-7xl font-bold ${colorPalette.textTransparent} ${colorPalette.bgClipText} relative inline-block p-4`}
        >
          <span
            id="first"
            className={`inline-block ${colorPalette.textSecondary}`}
          >
            Front End
            <span
              id="second"
              className={`text-7xl block ${colorPalette.textPrimary}`}
            >
              Developer
            </span>{" "}
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-8 h-1/3">
        <div className="col-start-1 col-end-3">
          <h4
            className={`flex justify-center text-lg font-semibold ${colorPalette.textPrimary}`}
          >
            Argentina
          </h4>
        </div>

        <div className="col-span-4 flex justify-center items-center relative">
          {/* Imagen retrato */}
          <div className="absolute inset-0 z-0 flex justify-center items-center ">
            <Image
              src="/retrato.png"
              alt="Retrato"
              width={400}
              height={300}
              layout="responsive"
              objectFit="cover"
              className="rounded-full "
            />
          </div>
        </div>

        <div className="col-start-7 col-end-9">
          <h4
            className={`flex justify-center text-xl font-semibold ${colorPalette.textPrimary}`}
          >
            Icono
          </h4>
        </div>

      </div>

      
      <div className="mt-40 flex flex-col animate-">
      
      <div className="flex justify-center"> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 animate-ping">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </div>

      <div className="flex justify-center"> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 animate-ping">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </div>

      <div className="flex justify-center"> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 animate-ping">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </div>

      </div>

    </div>
  );
};

export default Main_title;
