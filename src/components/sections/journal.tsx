import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import meeting2 from "../../../public/meeting2.webp";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const Journal = () => {
  return (
    <div className="container min-h-screen pb-[160px]">
      <Header />
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-14">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Journal;

const Header = () => {
  return (
    <>
      <Separator
        orientation="vertical"
        className="h-[170px] ml-[200px] lg:ml-[440px] hidden md:block"
      />
      <div className="md:ml-[100px] lg:ml-[300px] my-10">
        <h4 className="text-[#555555] text-[18px] font-normal">RECENT BLOG</h4>
        <h1 className="text-[40px] md:text-[60px] text-primary-black font-medium leading-[40px] md:leading-[60px]">
          READ UPDATED <br />
          JOURNAL
        </h1>
      </div>
      <div className="flex items-center">
        <Separator
          orientation="vertical"
          className="h-[230px] ml-[200px] lg:ml-[440px] hidden md:block"
        />
        <p className="max-w-[400px] text-[#555555] md:pl-10">
          Read our blog and try to see everything from every perspective. Our
          passion lies in making everything accessible and aesthetic for
          everyone.
        </p>
      </div>
    </>
  );
};

const Card = () => {
  return (
    <div className="relative flex items-end ">
      <Image src={meeting2} alt="img" width={317} height={500} />
      <div className="p-10 flex-1 relative -left-[80px] bg-white">
        <p className="text-[#555555] text-[18px]">UI Design . 02 May 2019</p>
        <h2 className="text-[26px] w-[320px] text-primary-black font-medium">
          How to bring fold to your startup company with Axtra
        </h2>
        <Separator className="mt-5 mb-2" />

        <Button variant="link">
          Read More <ArrowUpRight />
        </Button>
      </div>
    </div>
  );
};
