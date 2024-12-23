"use client";

import Image from "next/image";
import img from "../../../public/meeting.webp";
const work = [
  {
    id: 1,
    title: "BENJON",
    title2: "WEBSITE",
    year: 2022,
    img: img,
  },
  {
    id: 2,
    title: "BENJON",
    title2: "WEBSITE",
    year: 2022,
    img: img,
  },
  {
    id: 3,
    title: "BENJON",
    title2: "WEBSITE",
    year: 2022,
    img: img,
  },
  {
    id: 4,
    title: "BENJON",
    title2: "WEBSITE",
    year: 2022,
    img: img,
  },
];
const FeaturedWork = () => {
  return (
    <div className="min-h-screen bg-primary-black  -z-50 py-[100px]">
      <div className="container relative overflow-hidden">
        <h4 className="text-[18px] text-white">
          FEATURED <br /> WORK
        </h4>
        <div className="flex flex-nowrap">
          {work.map(({ id }) => (
            <Slide key={id} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;

interface Props {
  id: number;
}

const Slide = ({ id }: Props) => {
  return (
    <div className=" min-w-full mr-5" id={`slide-${id}`}>
      <div className="flex items-center relative z-20">
        <div
          className="text-white text-[60px] md:text-[120px] lg:text-[150px] font-semibold tracking-[8spx]"
          id="text"
        >
          <h3>BENJON</h3>
          <h3 className="lg:pl-[80px]">WEBSITE</h3>
          <h3>2022</h3>
        </div>
      </div>

      <div className="md:hidden w-full h-[400px]">
        <Image src={img} fill alt="meeting" />
      </div>

      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/6 z-10">
        <div className="h-[calc(100vh-240px)] mt-10 w-[544px] relative -left-[80px]">
          <Image src={img} fill alt="meeting" />
        </div>
      </div>
    </div>
  );
};
