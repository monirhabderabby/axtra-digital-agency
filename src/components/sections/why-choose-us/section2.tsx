import { cn } from "@/lib/utils";
import Image from "next/image";
import magnet from "../../../../public/magnet.png";

const links = [
  {
    id: 1,
    name: "GOOGLE",
    href: "",
  },
  {
    id: 2,
    name: "PINTEREST",
    href: "",
  },
  {
    id: 3,
    name: "INSTAGRAM",
    href: "",
  },
];

const data = [
  {
    id: 1,
    name: "Strategy",
    desc: "Your marketing strategy optimizing performances doesn’t have to be a guessing game.",
    percent: "60%",
  },
  {
    id: 2,
    name: "Audience",
    desc: "Your marketing strategy optimizing performances doesn’t have to be a guessing game.",
    percent: "95%",
  },
  {
    id: 1,
    name: "Keyword",
    desc: "Your marketing strategy optimizing performances doesn’t have to be a guessing game.",
    percent: "70%",
  },
];

const Section2 = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-y-10 lg:flex-row lg:items-center items-start container py-[60px]">
      <div className="flex flex-col justify-around space-y-20 h-full   gap-x-20 relative">
        <h3 className="text-[18px] font-medium">
          WHY <br /> CHOOSE US
        </h3>
        <div>
          <h1 className="text-primary-black text-[40px] md:text-[60px] font-medium uppercase w-full md:max-w-[570px] md:leading-[60px] leading-[40px]">
            Keword,Research Strategy, Survey, & Analytics
          </h1>
          <p className="max-w-[385px] lg:ml-[86px] pt-14">
            Attention, we take out our round glasses and our sweater with elbow
            patches to go back to the origins of the user experience: the first
            mention of the user and its importance was born in the
          </p>

          <div className=" relative">
            <Image
              src={magnet}
              width={120}
              height={120}
              alt="mshape"
              className="hidden lg:block absolute -left-[100px] -bottom-16"
            />
            <div className="flex items-center gap-x-6 pt-16 md:ml-[50px]">
              {links.map(({ id, name, href }) => (
                <a
                  key={id}
                  href={href}
                  className="border-2 border-primary-black rounded-full px-3 hover:bg-primary-black hover:text-white transition duration-500"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 md:ml-[100px]">
        <Card
          name={data[0].name}
          desc={data[0].desc}
          percent={data[0].percent}
          containerClass="ml-[50px] md:ml-[100px]"
        />
        <Card
          name={data[1].name}
          desc={data[1].desc}
          percent={data[1].percent}
        />
        <Card
          name={data[2].name}
          desc={data[2].desc}
          percent={data[2].percent}
          containerClass="ml-[50px] md:ml-[100px]"
        />
      </div>
    </div>
  );
};

export default Section2;

interface CardProps {
  percent: string;
  name: string;
  desc: string;
  containerClass?: string;
}

const Card = ({ percent, name, desc, containerClass }: CardProps) => {
  return (
    <div className={cn("flex items-center gap-x-4", containerClass)}>
      <div className="w-[100px] md:w-[185px] h-[100px] md:h-[185px] rounded-full border-2 border-primary-black flex justify-center items-center text-[35px] md:text-[48px] flex-shrink-0">
        {percent}
      </div>
      <div className="space-y-3">
        <h3 className="text-[26px] font-medium">{name}</h3>
        <p className="md:max-w-[272px]">{desc}</p>
      </div>
    </div>
  );
};
