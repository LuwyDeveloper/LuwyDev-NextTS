import { Metadata } from "next";
import { projects } from "@/assets/imagenes";
import { ProjectInfo } from "@/components/projects/ProjectInfo";

export const metadata: Metadata = {
  title: "React + Next.js",
  description:
    "React + Next.js - Projects developed with React and Next.js, focused on performance, SEO, and user experience.",
  keywords:
    "Luwy, React, Next.js, Web Development, SEO, Performance, User Experience",
};

const shopReact = {
  images: [
    projects.shopReact1,
    projects.shopReact2,
    projects.shopReact,
    projects.shopReact3,
  ],
  title: "Shop React",
  description: "none",
  details: {
    1: {
      title: "Tecnologías",
      items: [
        "React19-TS, Vite, TanStack Table",
        "Formik, Rest, i18n, Tailwind",
      ],
    },
  },
  link: "http://shop-adminrts.netlify.app/",
};

const luwyDev = {
  images: [projects.luwydev],
  title: "Luwy Dev",
  description: "none",
  details: {
    1: {
      title: "Tecnologías",
      items: ["NextJs15 CSR, SEO", "i18n, Tailwind"],
    },
  },
  link: "https://luwydev.com/",
};

export default function appReactNextPage() {
  return (
    <>
      <ProjectInfo project={shopReact} />
      <hr className="text-blue-900 md:mb-12 mb-8 mt-8 border-2" />
      <ProjectInfo project={luwyDev} invert />
    </>
  );
}
