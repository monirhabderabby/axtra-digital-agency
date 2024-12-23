import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  title2: string;
}

const ServiceCard = ({ title, title2 }: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between container">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-x-10 lg:gap-x-20">
        <h2 className="text-[30px] lg:text-[36px] text-primary-black font-medium leading-[40px]">
          {title} <br /> {title2}
        </h2>
        <div className="space-y-3 text-[16px] lg:text-[18px] text-primary-black">
          <p className="max-w-[290px] lg:max-w-[335px]">
            We help brands stand out through aweful, elegant visual design. Our
            design mainly philosophy.
          </p>

          <ul className="space-y-1">
            <li>+ Logo Design</li>
            <li>+ Advertisement</li>
            <li>+ Promotion</li>
          </ul>
        </div>
      </div>

      <button className="h-[170px] w-[170px] rounded-full flex justify-center items-center text-[#555555] border border-black/10 ml-[30px] mt-[50px] hover:bg-black transition duration-500 hover:text-white">
        Details <ArrowUpRight />
      </button>
    </div>
  );
};

export default ServiceCard;
