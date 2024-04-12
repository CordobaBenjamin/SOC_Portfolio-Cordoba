import Image from "next/image";

const About = () => {
  return (
    <div className="w-full p-4 bg-gray-200 mt-24">
      <div className="flex flex-row justify-center">
        <h1 className="text-6xl font-semibold flex justify-center pt-2 w-full my-6 border-y-2 border-red-700">
          {" "}
          About{" "}
        </h1>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center ">
        <div className="md:w-1/3 relative">
          <Image
            src="/retrato2.png"
            alt="Tu Nombre"
            layout="fill"
            className="w-1/2 h-auto rounded-full shadow-2xl border-2 flex mx-auto "
          />
        </div>
        <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold text-red-700">
            Benjamin L. Cordoba
          </h1>
          <div className="flex flex-col">
            <span>
              Hello, My name is Benjamín Córdoba, I am 19 years old. I have been
              studying web development for 2 years. And in the last year I
              started to be a computer engineering student.{" "}
            </span>
            <span className="font-semibold">
              {" "}
              (Also for now almost everything is logic and mathematics)
            </span>
            <div>
              <span>
                {" "}
                I participated in conferences/courses/talks and in general
                learning from different professionals here in Argentina.
              </span>
              <span className="font-semibold">
                {" "}
                (I will detail this later.)
              </span>
            </div>
          </div>

          <div className="w-4/5 mx-auto px-10 pt-2 pb-10 my-5 shadow-2xl border-2 border-black rounded-2xl">
            <div className="w-16 h-16 p-2 border-2  mx-auto my-5 rounded-full shadow-2xl border-gray-300  bg-gray-300 bg-opacity-90 relative">
              <Image src="/front_logo.png" alt="Front end Icon"  layout="fill"/>
            </div>

            <h2 className="flex justify-center text-xl mb-5 font-medium">
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
        </div>
      </div>
    </div>
  );
};

export default About;
