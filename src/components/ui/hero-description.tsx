"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const text = [
  "Static and dynamic secure code review",
  "can prevent a day before your product",
  "is even released. We can integrate with",
  "your dev environment",
];

const HeroDescription = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start((i) => ({
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
              delay: i * 0.2,
            },
          }));
        } else {
          controls.start(() => ({
            x: 50,
            opacity: 0,
          }));
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [controls]);

  return (
    <div ref={ref} className="w-full mt-3 md:mt-0">
      {text.map((t, i) => (
        <motion.p
          key={i}
          custom={i}
          animate={controls}
          initial={{ x: 50, opacity: 0 }}
          className="max-w-[300px]"
        >
          {t}
        </motion.p>
      ))}
    </div>
  );
};

export default HeroDescription;
