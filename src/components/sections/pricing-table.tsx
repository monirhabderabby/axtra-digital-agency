import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import Faq from "../ui/faq";

const PricingTable = () => {
  return (
    <div className="min-h-screen bg-[#F3ECEC] py-[100px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[60px]">
        <div>
          <h5 className="text-[#555555] text-[20px]">PRICING TABLE</h5>
          <h2 className="text-[60px] text-primary-black font-medium leading-[60px]">
            BE KIND TO YOUR MIND
          </h2>

          <Faq />
        </div>
        <div className="mx-auto w-full space-y-7">
          <BlackPrice />
          <OutlinePrice />
        </div>
      </div>

      <button className="h-[170px] w-[170px] flex items-center gap-x-3 border border-primary-black hover:bg-primary-black hover:text-white transition-colors duration-500 rounded-full justify-center mt-20 text-[16px] text-[#555555] mx-auto">
        <span className="">
          Try It <br />
          Free Now
        </span>
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default PricingTable;

const BlackPrice = () => {
  return (
    <Card className="w-full relative bg-[#1C1C1C] text-white border-0 py-4">
      <CardContent className="p-6 relative flex items-center gap-x-5">
        <div className="w-10 h-10 rounded bg-[#FF7757] flex items-center justify-center flex-shrink-0">
          <Check className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="flex justify-between items-start">
            {/* Yearly Label */}
            <div className="inline-block px-4 py-1 rounded-full border border-gray-700 text-sm mb-6">
              YEARLY
            </div>

            {/* Price */}
            <div className="text-4xl font-bold mb-4">
              <span className="text-2xl align-top">$</span>129
              <span className="text-lg">.99</span>
            </div>
          </div>

          {/* Free Trial */}
          <div className="flex items-center gap-2 mb-3 text-[26px]">
            <span className="font-semibold">14 DAYS FREE</span>
          </div>

          {/* Subscription Text */}
          <p className="text-gray-400 text-sm">
            Subscription fee is $129.99 USD and automatically renews each year.
          </p>
        </div>
      </CardContent>
      {/* Best Value Tag */}
      <div className="absolute right-8 -top-3 bg-[#FF7757] text-white text-xs font-medium px-3 py-1  rounded-lg">
        BEST VALUE
      </div>
    </Card>
  );
};

const OutlinePrice = () => {
  return (
    <Card className="w-full relative bg-white text-white border-0 py-4">
      <CardContent className="p-6 relative flex items-center gap-x-5">
        <div className="w-10 h-10 rounded bg-transparent border border-[#55555] flex items-center justify-center flex-shrink-0">
          <Check className="w-4 h-4 text-[#555555]" />
        </div>
        <div>
          <div className="w-full flex justify-between items-start">
            {/* Yearly Label */}
            <div className="inline-block px-4 py-1 rounded-full border border-gray-700 text-sm mb-6 text-primary-black">
              Monthly
            </div>

            {/* Price */}
            <div className="text-4xl font-bold mb-4 text-primary-black">
              <span className="text-2xl align-top">$</span>129
              <span className="text-lg">.99</span>
            </div>
          </div>

          {/* Free Trial */}
          <div className="flex items-center gap-2 mb-3 text-[#121212] text-[26px]">
            <span className="font-semibold">14 DAYS FREE</span>
          </div>

          {/* Subscription Text */}
          <p className="text-primary-black text-sm">
            Subscription fee is $129.99 USD and automatically renews each year.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
