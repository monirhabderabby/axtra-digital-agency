"use client";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import img1 from "../../../public/brands/1.webp";
import img2 from "../../../public/brands/2.webp";
import img3 from "../../../public/brands/3.webp";
import img4 from "../../../public/brands/4.webp";
import img5 from "../../../public/brands/5.webp";
import img6 from "../../../public/brands/6.webp";
const brands = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
];

const WhoWeAre = () => {
  const [loaded, setLoaded] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;
  return (
    <div
      className={cn(
        "min-h-screen  pt-[140px]",
        theme === "dark" ? "bg-[#121212]" : "bg-transparent"
      )}
    >
      <Brands />

      <div className="bg-primary-black">
        <div className="container py-[140px] flex flex-col lg:flex-row gap-x-[100px] items-center ">
          <div className="who w-[551px]  h-[750px] bg-fixed flex-shrink-0 bg-no-repeat bg-cover bg-center" />
          <div>
            <div className="text-white pt-5">
              <h5 className="text-[18px]">WHO WE ARE</h5>
              <h1 className="max-w-[636px] text-[60px] font-medium leading-[60px] pt-1">
                WE ARE LEADING DIGITAL MARKETING AGENCY.
              </h1>
            </div>
            <div className="ml-[80px] md:ml-[120px] mt-10 border-l border-white/10">
              <p className="text-white/60 font-light pt-12 pl-[30px]">
                We&apos;re a team of strategic mdigital marketing working
                globally with largest brands, we believe that progress only
                happends when you refused to play things safe. We combine ideas
                and behaviors, and insights with design, technological data to
                produce brand experiences that customers love our services
              </p>
              <button className="h-[170px] w-[170px] rounded-full flex justify-center items-center text-white/60 border border-white/10 ml-[30px] mt-[50px] hover:bg-white transition duration-500 hover:text-primary-black">
                Explore <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

const Brands = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = containerRef.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        controls.start((i) => ({
          scale: 1,
          opacity: 1,
          y: 1,
          transition: {
            duration: 1,
            delay: i * 0.2,
          },
        }));
      } else {
        controls.start(() => ({
          y: 50,
          scale: 0.5,
          opacity: 0,
          transition: {
            duration: 1,
          },
        }));
      }
    });

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [controls]);
  return (
    <div className="pb-[70px] md:pb-[140px]">
      <h2 className="text-foreground text-center text-[18px]">
        WE WORKED WITH GLOBAL LARGEST BRANDS
      </h2>
      <div
        className="container justify-center mt-[63px] flex items-center flex-wrap gap-12"
        ref={containerRef}
      >
        {brands.map(({ id, img }, i) => (
          <motion.div
            key={id}
            custom={i}
            animate={controls}
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
          >
            <Image src={img} width={100} height={160} alt="brandLOGO" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
