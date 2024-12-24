import FeaturedWork from "@/components/sections/featured-work";
import Hero from "@/components/sections/hero";
import PricingTable from "@/components/sections/pricing-table";
import Services from "@/components/sections/services";
import WhyChooseUs from "@/components/sections/why-choose-us/why-choose-us";
import Footer from "@/components/ui/footer";
import dynamic from "next/dynamic";
const WhoWeAre = dynamic(() => import("@/components/sections/who-we-are"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />

      <WhoWeAre />
      <Services />
      <FeaturedWork />
      <WhyChooseUs />
      <PricingTable />
      <Footer />
    </>
  );
}
