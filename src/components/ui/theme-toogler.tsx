"use client";

import gsap from "gsap";
import { Settings, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useRef, useState } from "react";

const ThemeToggler = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { setTheme } = useTheme();

  const toggleVisibility = () => {
    if (isVisible) {
      // Slide out
      gsap.to(sectionRef.current, {
        right: "-230px",
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      // Slide in
      gsap.to(sectionRef.current, {
        right: "0px",
        duration: 0.5,
        ease: "power2.out",
      });
    }
    setIsVisible(!isVisible);
  };

  return (
    <section
      ref={sectionRef}
      className="absolute z-50 -right-[230px] top-1/2 transform -translate-y-1/2"
    >
      <div className="relative flex items-center x]">
        <button
          className="bg-foreground text-primary-foreground p-3 text-[18px] w-[45px] h-[45px] flex justify-center items-center group"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <span className="group-hover:scale-95 group-hover:text-primary-foreground/80">
              <X />
            </span>
          ) : (
            <Settings className="animate-spin  group-hover:text-primary-foreground/80" />
          )}
        </button>
        <div className="bg-black p-6 py-8 w-[230px]">
          <h1 className="text-white text-[18px]">Mode</h1>
          <div className="mt-2 flex items-center gap-x-2">
            <CustomButton title="Light" onPress={() => setTheme("light")} />
            <CustomButton title="Dark" onPress={() => setTheme("dark")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeToggler;

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton = ({ title, onPress }: CustomButtonProps) => {
  return (
    <button
      className="bg-[#2B2B2F] text-white/80 hover:text-white px-[25px] py-[10px] rounded-[4px]"
      onClick={onPress}
    >
      {title}
    </button>
  );
};
