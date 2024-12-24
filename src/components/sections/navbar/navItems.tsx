import useOutsideClick from "@/hooks/useOutsideClick";
import Link from "next/link";
import { useRef, useState } from "react";

type menu = {
  href: string;
  id: number;
  name: string;
};

type submenu = {
  id: number;
  title: string;
  links: menu[];
};

interface Props {
  href: string;
  name: string;
  subMenu?: submenu[];
}

const NavItems = ({ href, name, subMenu }: Props) => {
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef(null);

  useOutsideClick(containerRef, () => {
    setHovered(false);
  });

  return (
    <div>
      <Link
        href={subMenu ? "#" : href}
        className="capitalize text-foreground hover:opacity-80 transition-all duration-300 hover:tracking-widest font-normal  px-5 py-5"
        onMouseEnter={() => setHovered(true)}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setHovered(false);
        }}
      >
        {name}
      </Link>

      {hovered && subMenu && (
        <div
          ref={containerRef}
          className="w-fit absolute bg-primary-black h-auto top-[80px] rounded-[4px] p-10 flex gap-10 flex-wrap"
        >
          {subMenu.map(({ id, title, links }) => (
            <div key={id} className="border-r border-white/10 pr-10">
              <h3 className="text-white text-[18px] font-medium">{title}</h3>
              <div className="flex flex-col gap-y-3 mt-3">
                {links.map(({ id, name, href }) => (
                  <Link
                    key={id}
                    href={href}
                    className="text-white/80 hover:text-white transition duration-500"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItems;
