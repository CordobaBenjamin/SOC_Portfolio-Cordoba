import React from "react";
import Image from "next/image";

const WhyMe_card = () => {
  return (
    <div className="w-4/5 md:w-2/3 xl:w-2/5 xl:m-0 mx-auto px-10 pt-2 pb-10 mt-10 shadow-2xl border-2 border-black rounded-2xl">
      <div className="w-16 h-16 p-2 border-2  mx-auto my-5 rounded-full shadow-2xl border-gray-300  bg-gray-300 bg-opacity-90  relative lg:w-24 lg:h-24">
        <Image
          src="/me_icon.png"
          alt="Front end Icon"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <h2 className="flex justify-center text-xl mb-5 font-medium md:text-2xl  lg:text-3xl"> Why me?</h2>
      <div className="">
        <div className="md:text-xl  lg:text-2xl">
          <span> One of my</span>

          <span className="text-red-700 font-bold"> Main qualities</span>

          <span> is being resolutive.</span>

          <span>
            {" "}
            One of the things that most attracts my attention in my university
            career is
          </span>

          <span className="text-black font-semibold">
            {" "}
            How they prepare you to solve problems using logic.
          </span>

          <span>That&apos;s why I know that ,</span>

          <span className="text-black font-semibold">
            I`ll be able to solve any problem that arises.
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhyMe_card;
