"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { logos, icons } from "@/assets/imagenes";

export const GlobalHeaderMobile = () => {
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
          <div className="flex gap-1.5 justify-between text-lg font-normal text-zinc-400">
            <Image src={icons.mail_fast} alt="Correo" />
            <p className="text-neutral-500 text-sm/6 sm:text-lg hover:text-white transition-all">
              <a href="mailto:luwy.dyro@gmail.com">luwy.dyro@gmail.com</a>
            </p>
          </div>
        </div>
      </header>
    </>
  );
};
