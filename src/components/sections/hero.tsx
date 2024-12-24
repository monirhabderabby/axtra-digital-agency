import Image from "next/image";

import ScrollDown from "@/components/ui/scroll-down";
import meeting from "../../../public/meeting4.webp";
import star from "../../../public/star.png";
// import introVideo from "../../../public/video/hero-3.mp4";
import GradualSpacing from "../ui/gradual-spacing";
import HeroDescription from "../ui/hero-description";

export default function Hero() {
  return (
    <div className="flex flex-col pt-[100px] min-h-screen z-10 relative">
      <Image
        src={star}
        width={50}
        height={50}
        alt="star"
        placeholder="blur"
        quality={100}
        className="hidden md:block absolute right-[100px]"
      />
      <div className="container flex items-center">
        <h4 className="capitalize text-[24px] font-semibold pr-[30px]">
          DIGITAL
        </h4>
        <div className="bg-primary-black h-[1px] w-[90px]"></div>
      </div>
      <div className="container flex items-start">
        <GradualSpacing
          className="text-[100px] md:text-[160px] lg:text-[260px] font-bold leading-[80px] md:leading-[130px] lg:leading-[200px]"
          text="MARK"
          duration={1.5}
        />
      </div>
      <div className="container flex flex-col-reverse md:flex-row items-end  md:items-center gap-x-8 lg:gap-x-[100px] ">
        <HeroDescription />
        <GradualSpacing
          className="text-[100px] md:text-[160px] lg:text-[260px] font-bold leading-[80px] md:leading-[130px] lg:leading-[200px]"
          text="ETING"
          duration={1.5}
          delayMultiple={0.2}
        />
      </div>
      <div className="container flex -z-30">
        <ScrollDown />
        <div className=" absolute bottom-0 right-4 -z-30 w-[300px] h-[200px] md:w-[500px] lg:w-[1000px] md:h-[300px] lg:h-[450px]">
          <Image src={meeting} fill alt="hero" />
        </div>
      </div>
    </div>
  );
}
