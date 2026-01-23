"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "motion/react";
import { logos } from "@/assets/imagenes";
import Link from "next/link";

const menuVariants = {
  closed: {
    x: "100%",
    transition: { duration: 0.3, ease: easeInOut },
  },
  open: {
    x: 0,
    transition: { duration: 0.3, ease: easeInOut },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1 },
  }),
};

export const HomeHeaderMobile = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const main = document.getElementById("main");
    const section = document.getElementById(id);
    if (!main || !section) return;

    main.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <>
      <header className="flex sm:hidden w-full px-5 py-6 relative">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <Image src={logos.logo_LD} alt="logo" width={20} />
            </motion.div>
<Link href={"/"}>
            <Image src={logos.logo_luwydyro} alt="logo" width={91} />
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            className="w-12 h-12 flex items-center justify-center z-50"
          >
            {!open ? (
              /* HAMBURGER */
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />{" "}
              </svg>
            ) : (
              /* CLOSE */
              <svg
                fill="#ffffff"
                width="2em"
                height="2em"
                viewBox="-6 -6 24 24"
                preserveAspectRatio="xMinYMin"
              >
                <path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z" />{" "}
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* MENU */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-20 right-0 w-52 z-40 sm:hidden bg-primary"
          >
            <nav className="flex flex-col">
              {[
                ["Inicio", "home"],
                ["Servicios", "service"],
                ["Sobre Mí", "about"],
                ["Portfolio", "projects"],
                ["Empresas", "review"],
                ["Contacto", "contact"],
              ].map(([label, id], index) => (
                <motion.button
                  key={id}
                  custom={index}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  onClick={() => scrollToSection(id)}
                  className="px-5 py-3 text-white text-left border-b border-blue-600 hover:bg-blue-900 transition"
                >
                  {label}
                </motion.button>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};
