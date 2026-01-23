"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { icons } from "@/assets/imagenes";

const sections = [
  { id: "home", icon: icons.home3 },
  { id: "service", icon: icons.briefcase },
  { id: "about", icon: icons.skills },
  { id: "projects", icon: icons.archives },
  { id: "review", icon: icons.contact2 },
  { id: "contact", icon: icons.clients },
];

export const Sidebar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const main = document.getElementById("main");
    if (!main) return;

    const sectionsEl = Array.from(
      main.querySelectorAll<HTMLElement>(".slide-sec")
    );

    const onScroll = () => {
      const top = main.scrollTop;

      for (const sec of sectionsEl) {
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;

        if (top >= offset - 50 && top < offset + height - 50) {
          setActive(sec.id);
          break;
        }
      }
    };

    main.addEventListener("scroll", onScroll);
    return () => main.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const main = document.getElementById("main");
    const section = document.getElementById(id);
    if (!main || !section) return;

    main.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <aside className="nav-bar w-15 xl:w-23 left-0 lg:left-5 xl:left-0 2xl:-left-11 absolute hidden sm:block bg-[#1E273B] border-2 border-[#293245] rounded-2xl overflow-hidden">
      {sections.map(({ id, icon }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`
            w-full h-15 xl:h-23
            flex justify-center items-center
            border-b-2 border-[#293245]
            transition-colors
            ${active === id ? "bg-blue-500" : "hover:bg-blue-500"}
          `}
        >
          <Image src={icon} alt={id} />
        </button>
      ))}
    </aside>
  );
};