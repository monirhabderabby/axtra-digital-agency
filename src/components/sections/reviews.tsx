"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import img1 from "../../../public/images/1.webp";
import img2 from "../../../public/images/2.webp";
import img3 from "../../../public/images/3.webp";
import img4 from "../../../public/images/4.webp";
import img5 from "../../../public/images/5.webp";
import img6 from "../../../public/images/6.webp";
import TestimonialCarousel from "../ui/test-monial-carousel";

const Reviews = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center relative">
      <Images />
      <div className="w-full md:min-w-[600px] max-w-[700px] min-h-[500px]  p-4 overflow-hidden">
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default Reviews;

const Images = () => {
  return (
    <div className="hidden lg:block">
      <Animate>
        <Image
          src={img1}
          alt="img1"
          width={172}
          height={199}
          className="absolute top-[150px] left-[400px] img1"
        />
      </Animate>
      <Image
        src={img2}
        alt="img1"
        width={88}
        height={102}
        className="absolute top-[200px] right-[500px]"
      />
      <Image
        src={img3}
        alt="img1"
        width={88}
        height={102}
        className="absolute top-[450px] left-[150px]"
      />
      <Image
        src={img4}
        alt="img1"
        width={332}
        height={427}
        className="absolute top-[550px] left-[350px]"
      />
      <Image
        src={img5}
        alt="img1"
        width={250}
        height={279}
        className="absolute top-[450px] right-[150px]"
      />
      <Image
        src={img6}
        alt="img1"
        width={143}
        height={160}
        className="absolute top-[600px] right-[350px]"
      />
    </div>
  );
};

interface AnimateProps {
  children: ReactNode;
  delay?: number;
}
const Animate = ({ children, delay }: AnimateProps) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
          delay: delay,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
