"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const classWords = "text-primary font-semibold";

const words = [
  {
    key: "ux",
    content: (
      <>
        <span className={classWords}>UX</span> Developer
      </>
    ),
  },
  {
    key: "web-dev",
    content: (
      <>
        <span className={classWords}>Web</span> Developer
      </>
    ),
  },
  {
    key: "ecommerce",
    content: (
      <>
        <span className={classWords}>E-</span>Commerce
      </>
    ),
  },
  {
    key: "designer",
    content: (
      <>
        <span className={classWords}>Web</span> Designer
      </>
    ),
  },
];

export function WordsChange() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index].key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          style={{ display: "inline-block", fontWeight: 500 }}
        >
          {words[index].content}
        </motion.span>
      </AnimatePresence>
    </h1>
  );
}
