import Hero from "@/components/sections/hero";
import dynamic from "next/dynamic";
const WhoWeAre = dynamic(() => import("@/components/sections/who-we-are"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />

      <WhoWeAre />
    </>
  );
}
