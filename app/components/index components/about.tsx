import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="w-full p-4 bg-gray-200 mt-24">
        <div className="flex flex-row justify-center">
          <h1 className="text-6xl font-semibold flex justify-center pt-2 w-full my-6 border-y-2 border-red-700 md:text-7xl lg:text-9xl">
            {" "}
            About{" "}
          </h1>
        </div>
     

          <div className="flex flex-col-reverse xl:flex-row">

            <div className="xl:w-4/5 flex justify-center flex-col">
              <div>
                <h1 className="text-2xl font-bold text-red-700 pt-6 md:text-5xl ">
                  Benjamin L. Cordoba
                </h1>
                <div className="flex flex-col pb-10 mb-2 md:text-xl xl:text-3xl">
                  <div>
                    <span>
                      Hello, My name is Benjamín Córdoba, I am 19 years old. I
                      have been studying web development for 2 years. And in the
                      last year I started to be a computer engineering student.{" "}
                    </span>
                    <span className="font-semibold">
                      {" "}
                      (Also for now almost everything is logic and mathematics)
                    </span>
                    <div>
                      <span>
                        {" "}
                        I participated in conferences/courses/talks and in
                        general learning from different professionals here in
                        Argentina.
                      </span>
                      <span className="font-semibold">
                        {" "}
                        (I will detail this later.)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto w-4/6 sm:w-3/6 lg:w-1/3">
            <Image
              src="/about_pic.png"
              alt="Retrato"
              width={150}
              height={100}
              className="rounded-3xl border-2 border-black flex justify-center xl:border-0 xl:rounded-2xl xl:justify-end grayscale duration-1000 transition-all animate-photo"
              sizes="50vw"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            </div>
          </div>
        </div>
  
    </>
  );
};

export default About;
