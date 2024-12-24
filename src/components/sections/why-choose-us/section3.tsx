import Image from "next/image";
import img from "../../../../public/counter3.webp";

const Section3 = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row gap-20 items-stretch md:items-center py-[100px] justify-between container">
      <div className="grid grid-cols-2 gap-y-24 gap-10 md:gap-x-20">
        <Counter number="25k" desc="Project completed" />
        <Counter number="8k" desc="Happy customers" />
        <Counter number="15" desc="Years experiences" />
        <Counter number="98" desc="Awards achievement" />
      </div>
      <div>
        <Image
          src={img}
          width={506}
          height={658}
          alt="image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default Section3;

interface CounterProps {
  number: string;
  desc: string;
}

const Counter = ({ number, desc }: CounterProps) => {
  return (
    <div>
      <h1 className="text-[80px] lg:text-[100px] font-normal leading-[100px]">
        {number}
      </h1>
      <p className="text-[#555555] text-[20px] max-w-[82px]">{desc}</p>
    </div>
  );
};
