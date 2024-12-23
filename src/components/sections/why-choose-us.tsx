"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

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
          scrub: 0.6,
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
          <section id="component" className="w-[100vw] h-screen bg-orange-200">
            <div className="min-h-screen w-full flex justify-center items-center text-[100px]">
              Why Choose US 1
            </div>
          </section>
          <section id="component" className="w-[100vw] h-screen bg-teal-200">
            <div className="min-h-screen w-full flex justify-center items-center text-[100px]">
              Why Choose US 2
            </div>
          </section>
          <section id="component" className="w-[100vw] h-screen bg-yellow-200">
            <div className="min-h-screen w-full flex justify-center items-center text-[100px]">
              Why Choose US 3
            </div>
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
