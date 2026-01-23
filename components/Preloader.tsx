"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/assets/Logo";
import { motion, AnimatePresence } from "motion/react";

export const PreLoader = () => {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("hasPreloader");
  });

  useEffect(() => {
    if (!show) return;

    localStorage.setItem("hasPreloader", "true");

    const timer = setTimeout(() => {
      setShow(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader-mask"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="text-center">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <Logo className="w-80 mb-24" />
            </motion.div>

            <div className="progress-bar">
              <motion.div
                className="loading-progress"
                initial={{ width: 0 }}
                animate={{ width: 300 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
