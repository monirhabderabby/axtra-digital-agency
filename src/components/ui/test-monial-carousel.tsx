"use client";

import { Button } from "@/components/ui/button";
import { testimonials } from "@/data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import quoteIcon from "../../../public/quote.png";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right"); // Track direction for animation

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" mx-auto px-4 py-12">
      <div className="relative">
        <div className="flex justify-center mb-12">
          <Image src={quoteIcon} width={50} height={50} alt="icon" />
        </div>

        <div
          className={`text-center transition-transform duration-500 ease-in-out ${
            direction === "right"
              ? "animate-slide-in-right"
              : "animate-slide-in-left"
          }`}
          key={testimonials[currentIndex].id}
        >
          <blockquote className="text-[24px] mb-12 font-normal leading-relaxed italic text-[#121212]">
            {testimonials[currentIndex].quote}
          </blockquote>

          <div className="space-y-2">
            <div className="font-medium text-primary-black text-[28px]">
              {testimonials[currentIndex].author}
            </div>
            <div className="text-muted-foreground text-[14px]">
              {testimonials[currentIndex].position}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            aria-label="Previous testimonial"
            className="rounded-full"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="rounded-full"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (currentIndex > index) {
                  setDirection("left");
                  setCurrentIndex(index);
                } else {
                  setDirection("right");
                  setCurrentIndex(index);
                }
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
