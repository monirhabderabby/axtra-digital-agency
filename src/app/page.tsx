import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
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
      <Footer />
    </>
  );
}
