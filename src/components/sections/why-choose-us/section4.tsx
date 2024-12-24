import { ArrowRight } from "lucide-react";

const Section4 = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center py-[100px] flex-col gap-y-10 text-[#121212] container">
      <h5 className="text-[24px] md:text-[28px] ">Have you project in mind?</h5>
      <h1 className="text-[50px] md:text-[70px] lg:text-[100px] text-center leading-[50px] lg:max-w-[1000px] md:leading-[70px] lg:leading-[100px] font-light">
        Let’s make something great together!
      </h1>

      <button className="h-[300px] w-[300px] flex items-center gap-x-3 border border-primary-black hover:bg-primary-black hover:text-white transition-colors duration-500 rounded-full justify-center mt-16 text-[24px] text-[#555555]">
        <span className="">
          Contact <br />
          With Us
        </span>
        <ArrowRight className="h-10 w-10" />
      </button>
    </div>
  );
};

export default Section4;
