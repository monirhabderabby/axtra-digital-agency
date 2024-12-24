"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 1,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="">
      <div>
        <div ref={sectionRef} className="flex w-[500vw] h-screen relative">
          <section id="component" className="w-[100vw] h-screen bg-[#FFFAF0]">
            <Section1 />
          </section>
          <section id="component" className="w-[100vw] h-screen bg-[#F3ECEC]">
            <Section2 />
          </section>
          <section id="component" className="w-[100vw] h-screen bg-[#FFFAF0]">
            <Section3 />
          </section>
          <section id="component" className="w-[100vw] h-screen bg-[#E0E3CC]">
            <Section4 />
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
