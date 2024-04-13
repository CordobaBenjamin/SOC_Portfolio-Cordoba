import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="w-full p-4 bg-gray-200 mt-24">
        <div className="flex flex-row justify-center">
          <h1 className="text-6xl font-semibold flex justify-center pt-2 w-full my-6 border-y-2 border-black text-red-700">
            {" "}
            Contact{" "}
          </h1>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center ">
          <div className="md:w-1/3 relative">
            <Image
              src="/retrato2.png"
              alt="Tu Nombre"
              className="w-1/2 h-auto rounded-full shadow-2xl border-2 flex mx-auto "
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="md:w-2/3 md:pl-8 md:mt-0">
            <div>
              <h1 className="text-2xl font-bold text-red-700 pt-6">
                Contact me
              </h1>
              <div className="flex flex-col pb-10 mb-2">
                <span>
                  Need to ge in touch with me? Please see my contact information
                  in the card below.{" "}
                </span>
              </div>
            </div>

            <div className="w-4/5 mx-auto px-10 pt-2 pb-10 mb-5 shadow-2xl border-2 border-black rounded-2xl">
              <div className="w-14 h-12 p-2 border-2  mx-auto my-5  bg-gray-200 relative animate-pulse">
                <Image
                  src="/gmail_icon.png"
                  alt="Front end Icon"
                  layout="fill"
                />
              </div>

              <h2 className="flex justify-center text-xl font-medium text-red-700">
                {" "}
                Email Contact
              </h2>

              <h1 className="flex justify-center font-bold text-l px-2">
                cordobabencontact@gmail.com{" "}
              </h1>
            </div>

            <div className="w-4/5 mx-auto px-10 pt-2 pb-10 mb-5 shadow-2xl border-2 border-black rounded-2xl">

              <div className="w-12 h-12 p-2 border-2  mx-auto my-5  bg-gray-200 relative animate-pulse">
                <Image
                  src="/telefono_icon.png"
                  alt="Front end Icon"
                  layout="fill"
                />
              </div>

              <h2 className="flex justify-center text-xl font-medium text-red-700">
                {" "}
                Phone or Whatsapp
              </h2>


              <h1 className="flex justify-center font-bold text-l px-2">
                +54 11 3256-5554{" "}
              </h1>
            </div>

       
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
