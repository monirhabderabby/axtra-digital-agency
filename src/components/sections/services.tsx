import ServiceCard from "../cards/service-card";
import { Separator } from "../ui/separator";

const Services = () => {
  return (
    <section className="container min-h-screen pb-[160px]">
      <Header />
      <Separator className="my-10" />
      <ServiceCard title="SEARCH ENGINE" title2="OPTIMIZATION" />
      <Separator className="my-10" />
      <ServiceCard title="EMAIL" title2="MARKETING" />
      <Separator className="my-10" />
      <ServiceCard title="CONTENT" title2="MARKETING" />
      <Separator className="my-10" />
      <ServiceCard title="SOCIAL" title2="MARKETING" />
      <Separator className="my-10" />
    </section>
  );
};

export default Services;

const Header = () => {
  return (
    <>
      <Separator
        orientation="vertical"
        className="h-[170px] ml-[200px] lg:ml-[440px] hidden md:block"
      />
      <div className="md:ml-[100px] lg:ml-[300px] my-10">
        <h4 className="text-[#555555] text-[18px] font-normal">SERVICES</h4>
        <h1 className="text-[40px] md:text-[60px] text-primary-black font-medium leading-[40px] md:leading-[60px]">
          OUR MARKETING <br />
          SERVICES
        </h1>
      </div>
      <div className="flex items-center">
        <Separator
          orientation="vertical"
          className="h-[230px] ml-[200px] lg:ml-[440px] hidden md:block"
        />
        <p className="max-w-[400px] text-[#555555] md:pl-10">
          Consumers today rely heavily on digital means to research products. We
          research a brand of bldend engaging with it, according to the
          meanwhile, 51% of consumers say they use Google to research products
          before buying.
        </p>
      </div>
    </>
  );
};
