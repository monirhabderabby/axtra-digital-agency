"use client";
import { cn } from "@/lib/utils";
import { Menu, Search } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import logoWhite from "../../../../public/logo-white.webp";
import logo from "../../../../public/logo.webp";
import menu from "../../../../public/menu-black.webp";
import { Separator } from "../../ui/separator";
import NavItems from "./navItems";

const links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Pages",
    href: "/pages",
    subMenus: [
      {
        id: 1,
        title: "Title A",
        links: [
          {
            id: 1,
            name: "Item 1",
            href: "/1",
          },
        ],
      },
      {
        id: 2,
        title: "Title B",
        links: [
          {
            id: 1,
            name: "Item $",
            href: "/1",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Services",
    href: "/services",
  },
  {
    id: 5,
    name: "Team",
    href: "/team",
  },
  {
    id: 6,
    name: "Blog",
    href: "/blog",
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const { theme } = useTheme();

  // Track window scroll to update navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true); // Set navbar background when scrolling
      } else {
        setScrolling(false); // Reset when not scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="sticky top-0">
      <div
        className={cn(
          "h-[80px]   px-6 flex items-center justify-between relative",
          scrolling && "border-b bg-background"
        )}
      >
        {theme === "light" ? (
          <Image src={logo} height={100} width={130} alt="logo" />
        ) : (
          <Image src={logoWhite} height={100} width={130} alt="logo" />
        )}

        <div className="h-full flex justify-center items-center gap-x-12">
          {links.map(({ id, href, name, subMenus }) => (
            <NavItems key={id} href={href} name={name} subMenu={subMenus} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-x-4">
          <Search />
          <Separator orientation="vertical" />
          <div>
            {theme === "light" ? (
              <Image
                src={menu}
                height={20}
                width={20}
                alt="menu"
                quality={100}
              />
            ) : (
              <Menu />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
