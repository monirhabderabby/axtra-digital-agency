"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import arrowDown from "../../../public/arrow-down-sm.webp";

const ScrollDown = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the button up and down
      gsap.to(buttonRef.current, {
        y: 50, // Move 15px down
        duration: 1.5,
        yoyo: true, // Return to original position
        repeat: -1, // Infinite repeat
        ease: "power1.inOut", // Smooth ease
      });
    });

    return () => ctx.revert(); // Clean up GSAP context
  }, []);
  return (
    <div>
      <button
        ref={buttonRef}
        className="border-[1px] p-2 py-6 rounded-full "
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
      >
        <Image src={arrowDown} height={40} width={20} alt="icon" />
      </button>
    </div>
  );
};

export default ScrollDown;
