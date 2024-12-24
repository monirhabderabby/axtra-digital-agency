"use client";
import { motion, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import ServiceCard from "../cards/service-card";
import { Separator } from "../ui/separator";

interface ImageItem {
  img: string;
  title: string;
  title2: string;
}

const list: ImageItem[] = [
  {
    img: "https://utfs.io/f/uvbscFnKvOU71eKmIMEUbMDBpVFqNlPLXGgHw2RK0x6OiE57",
    title: "SEARCH ENGINE",
    title2: "OPTIMIZATION",
  },
  {
    img: "https://utfs.io/f/uvbscFnKvOU7wZ1nDXn8M79KIxcNg0SeTWAFr5U3QCVaDBYh",
    title: "EMAIL",
    title2: "MARKETING",
  },
  {
    img: "https://utfs.io/f/uvbscFnKvOU7tFZayxKDmHbyljnLCJfMOqV5avFcIe7u08S4",
    title: "CONTENT",
    title2: "MARKETING",
  },
  {
    img: "https://utfs.io/f/uvbscFnKvOU7DoMj0Oyj8WFUn4QOqKMeaA2CvZ36RcPLrIsb",
    title: "SOCIAL",
    title2: "MARKETING",
  },
];
const Services = () => {
  const [img, setImg] = useState<{ src: string; alt: string; opacity: number }>(
    {
      src: "",
      alt: "",
      opacity: 0,
    }
  );

  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const handleMove = (e: any) => {
    if (!imageRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const relativeX = clientX - containerRect.left;
    const relativeY = clientY - containerRect.top;

    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);
  };

  const handleImageInteraction = (item: ImageItem, opacity: number) => {
    setImg({ src: item.img, alt: item.title, opacity });
  };
  return (
    <section className="container min-h-screen pb-[160px]">
      <Header />
      <Separator className="my-10" />
      <div ref={containerRef} className="relative" onMouseMove={handleMove}>
        {list.map((item) => (
          <div
            key={item.title}
            onMouseEnter={() => handleImageInteraction(item, 1)}
            onMouseMove={() => handleImageInteraction(item, 1)}
            onMouseLeave={() => handleImageInteraction(item, 0)}
          >
            <ServiceCard title={item.title} title2={item.title2} />
            <Separator className="my-10" />
          </div>
        ))}
        <motion.img
          ref={imageRef}
          src={img.src}
          alt={img.alt}
          className="w-[300px] h-[220px] rounded-lg object-cover absolute top-0 left-0 transition-opacity duration-200 ease-in-out pointer-events-none"
          style={{
            x: imagePos.x,
            y: imagePos.y,
            opacity: img.opacity,
          }}
        />
      </div>

      {/* <ServiceCard title="EMAIL" title2="MARKETING" />
      <Separator className="my-10" />
      <ServiceCard title="CONTENT" title2="MARKETING" />
      <Separator className="my-10" />
      <ServiceCard title="SOCIAL" title2="MARKETING" />
      <Separator className="my-10" /> */}
    </section>
  );
};

export default Services;

const Header = () => {
  return (
    <>
      <Separator
        orientation="vertical"
        className="h-[170px] ml-[200px] lg:ml-[440px] hidden md:block"
      />
      <div className="md:ml-[100px] lg:ml-[300px] my-10">
        <h4 className="text-[#555555] text-[18px] font-normal">SERVICES</h4>
        <h1 className="text-[40px] md:text-[60px] text-primary-black font-medium leading-[40px] md:leading-[60px]">
          OUR MARKETING <br />
          SERVICES
        </h1>
      </div>
      <div className="flex items-center">
        <Separator
          orientation="vertical"
          className="h-[230px] ml-[200px] lg:ml-[440px] hidden md:block"
        />
        <p className="max-w-[400px] text-[#555555] md:pl-10">
          Consumers today rely heavily on digital means to research products. We
          research a brand of bldend engaging with it, according to the
          meanwhile, 51% of consumers say they use Google to research products
          before buying.
        </p>
      </div>
    </>
  );
};
