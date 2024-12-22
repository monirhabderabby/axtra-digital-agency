import Image from "next/image";

import ScrollDown from "@/components/ui/scroll-down";
import meeting from "../../../public/meeting.webp";

export default function Hero() {
  return (
    <div className="flex flex-col pt-[100px] min-h-screen z-50">
      <div className="container flex items-center">
        <h4 className="capitalize text-[24px] font-semibold pr-[30px]">
          DIGITAL
        </h4>
        <div className="bg-primary-black h-[1px] w-[90px]"></div>
      </div>
      <div className="container">
        <h1 className="text-[100px] md:text-[160px] lg:text-[260px] font-bold leading-[80px] md:leading-[130px] lg:leading-[200px]">
          MARK
        </h1>
      </div>
      <div className="container flex flex-col-reverse md:flex-row items-end  md:items-center gap-x-8 lg:gap-x-[100px] ">
        <div>
          <p className="max-w-[450px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            sequi alias eaque asperiores beatae officiis nam similique
            perspiciatis omnis blanditiis debitis enim vero, tempore magni autem
            pariatur eos minus! Natus?
          </p>
        </div>
        <h1 className="text-[100px] md:text-[160px] lg:text-[260px] font-bold leading-[200px]">
          ETING
        </h1>
      </div>
      <div className="container flex -z-30">
        <ScrollDown />
        <div className=" absolute bottom-0 right-4 -z-30 w-[300px] h-[200px] md:w-[500px] lg:w-[1000px] md:h-[300px] lg:h-[400px]">
          <Image src={meeting} fill alt="hero" />
        </div>
      </div>
    </div>
  );
}
