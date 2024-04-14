import React from 'react'
import Image from 'next/image';

const Help_card = () => {
  return (
    <>
      <div className="w-4/5 md:w-2/3 xl:w-2/5 xl:mx-6 xl:mb-0 mx-auto px-10 pt-2 pb-10 mb-5 shadow-2xl border-2 border-black rounded-2xl">
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

              <h2 className="flex justify-center text-xl mb-5 font-medium  md:text-2xl  lg:text-3xl">
                {" "}
                How I can help you?
              </h2>

              <span className="md:text-xl  lg:text-2xl">
                {" "}
                For me, it is important to know all aspects of the web
                development process; I will learn any technology that helps me
                create applications. For now I am focusing on front end,
              </span>

              <span className="text-red-700 font-semibold lg:text-2xl"> and ... </span>
            </div>
    </>
  )
}

export default Help_card;
