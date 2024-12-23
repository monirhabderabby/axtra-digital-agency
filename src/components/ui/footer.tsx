"use client";
import Image from "next/image";
import Link from "next/link";
import logoWhite from "../../../public/logo-white.webp";

export default function Footer() {
  return (
    <footer className="bg-primary-black text-white ">
      <div className="">
        <div className="flex flex-col  md:flex-row  gap-12 px-10 md:px-18 lg:px-20 ">
          {/* Left Column */}
          <div className="space-y-6 py-16 lg:px-16">
            <Link href="/" className="inline-block">
              <Image src={logoWhite} height={100} width={130} alt="logo" />
            </Link>
            <p className="text-gray-400 max-w-sm">
              When do they work well, and when do they on us and finally, when
              do we actually need how can we avoid them.
            </p>
            <div className="pt-8">
              <p className="text-sm text-gray-400">
                © 2022 - 2025 | All rights reserved
                <br />
                by Wealcoder
              </p>
            </div>
          </div>

          {/* Middle Column - Social Links */}
          <div className=" flex flex-col justify-between items-center border-x border-white/10 w-full md:w-[180px] ">
            <Link
              href="#"
              className=" text-[18px] h-[70px] md:h-full flex justify-center items-center border-t md:border-t-0 border-b border-white/10 hover:bg-white hover:text-primary-black transition-colors duration-500 w-full md:px-5"
            >
              <span className="flex items-center gap-3">FACEBOOK</span>
            </Link>
            <Link
              href="#"
              className=" text-[18px] h-[70px] md:h-full flex justify-center items-center border-b border-white/10 hover:bg-white hover:text-primary-black transition-colors duration-500 w-full"
            >
              <span className="flex items-center gap-3">TWITTER</span>
            </Link>
            <Link
              href="#"
              className=" text-[18px] h-[70px] md:h-full flex justify-center items-center border-b border-white/10 hover:bg-white hover:text-primary-black transition-colors duration-500 w-full"
            >
              <span className="flex items-center gap-3">LINKEDIN</span>
            </Link>
            <Link
              href="#"
              className=" text-[18px] h-[70px] md:h-full flex justify-center items-center border-b md:border-b-0 border-white/10  hover:bg-white hover:text-primary-black transition-colors duration-500 w-full"
            >
              <span className="flex items-center gap-3">INSTAGRAM</span>
            </Link>
          </div>

          {/* Right Column */}
          <div className="flex items-center justify-center mx-auto ">
            <Link
              href="#"
              className="text-[#C5F42C] text-[60px] md:text-[90px] lg:text-[140px] font-bold leading-none hover:opacity-90 transition-opacity"
            >
              LET&apos;S TALK
            </Link>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="h-full py-5 mt-10 md:mt-0 md:py-0 md:h-[100px] flex-col-reverse md:flex-row flex justify-between gap-8 border-t border-white/10 px-10 md:px-14 lg:px-20">
          <p className="flex items-center">
            © 2022 - 2025 | Alrights reserved <br /> by Monir
          </p>
          <div className="flex items-center gap-8">
            {["ABOUT US", "CONTACT", "CAREER", "FAQS"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm hover:text-[#C5F42C] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
