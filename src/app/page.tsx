import FeaturedWork from "@/components/sections/featured-work";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Section2 from "@/components/sections/why-choose-us/section2";
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
      {/* <WhyChooseUs /> */}
      <Section2 />
      <Footer />
    </>
  );
}
