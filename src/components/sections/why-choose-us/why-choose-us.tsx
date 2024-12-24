"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

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
        translateX: "-400vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.8,
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
          <section id="component" className="w-[100vw] h-screen bg-slate-200">
            <div className="min-h-screen w-full flex justify-center items-center text-[100px]">
              Why Choose US 4
            </div>
          </section>
          <section id="component" className="w-[100vw] h-screen bg-orange-200">
            <div className="min-h-screen w-full flex justify-center items-center text-[100px]">
              Why Choose US 5
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
