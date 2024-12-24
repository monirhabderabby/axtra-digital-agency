"use client";
import { ArrowUp } from "lucide-react";
import { Button } from "./button";

const ArrowDown = () => {
  const onTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Button
      className="w-[50px] h-[50px] rounded-full bg-orange-500 hover:bg-orange-400 fixed right-5 bottom-10 z-40"
      onClick={onTop}
    >
      <ArrowUp />
    </Button>
  );
};

export default ArrowDown;
