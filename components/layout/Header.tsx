"use client";
import Image from "next/image";
import { logos, icons } from "@/assets/imagenes";
import { ButtonLang } from "../ButtonLanguage";
import { motion } from "motion/react";
import Link from "next/link";

type HeaderProps = {
  className?: string;
};
export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={`container py-6 absolute w-full top-0 justify-between px-5 lg:px-12 2xl:px-0 ${className || "hidden sm:flex"}`}
    >
      <div className="flex gap-10.5 justify-start items-center">
        <div className="flex logo justify-start items-center">
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
            <Image
              src={logos.logo_luwydyro}
              alt="logo"
              width={91}
            />
          </Link>
        </div>

        <div className="flex justify-between text text-lg font-medium text-zinc-400 ">
          <h1 className="text-white text-center text-sm hover:text-blue-600 text-h1 transition-all cursor-default">
            Luwy Dyro - Developer web Front End
          </h1>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <div className="flex gap-1.5 justify-between text text-lg font-normal text-zinc-400">
          <Image src={icons.mail_fast} alt="Correo" />
          <p className="text-neutral-500 text-lg hover:text-white transition-all">
            <a href="mailto:luwy.dyro@gmail.com">luwy.dyro@gmail.com</a>
          </p>
        </div>
        <div className="sm:flex gap-2.5 hidden">
          <a
            href="https://github.com/Luwy-Dyro"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex justify-center items-center rounded-lg bg-zinc-50/10 group transition-all hover:bg-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 496 512"
            >
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                className="fill-zinc-400 group-hover:fill-white"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/luwydyrofrontend/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex justify-center items-center rounded-lg bg-zinc-50/10 group transition-all hover:bg-blue-500"
          >
            <svg
              height="22"
              viewBox="-2 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z"
                className="fill-zinc-400 group-hover:fill-white"
              />
            </svg>
          </a>
          <ButtonLang></ButtonLang>
        </div>
      </div>
    </header>
  );
};
