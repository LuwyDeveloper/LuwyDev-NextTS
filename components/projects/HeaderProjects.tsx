"use client";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import Link from "next/link";

const routeConfig: Record<
  string,
  { title: string; subtitle?: string; link?: string }
> = {
  "/proyectos": {
    subtitle: "Proyectos",
    title: "Portafolio",
    link: "/",
  },
    "/proyectos/microfrontend": {
    title: "Microfrontend",
  },
    "/proyectos/designsystem": {
    title: "Design System",
  },
    "/proyectos/autentificaciones": {
    title: "Autentificaciones",
  },
    "/proyectos/angular": {
    title: "Aplicaciones Angular",
  },
    "/proyectos/react-next": {
    title: "Aplicaciones React / Next JS",
  },
      "/proyectos/cms": {
    title: "CMS / Ecommerce",
  },
};

export const HeaderProjects = () => {
  const pathname = usePathname();
  const config = routeConfig[pathname];
  const t = useTranslations("ProjectPage");

  return (
    <div className="flex flex-row justify-between items-center gap-4 pb-10">
      <div>
        <h2 className="uppercase text-lg text-blue-500 font-medium block mb-3">
          {t(config?.subtitle || "Proyecto")}
        </h2>
        <h3 className="text-white font-medium text-3xl xl:text-5xl xl:leading-snug mb-2">
          {t(config?.title || "Portafolio")}
        </h3>
      </div>
      <div className="flex items-center flex-wrap gap-8">
        <Link
          href={config.link || "/proyectos"}
          className="bg-blue-500 hover:bg-blue-600 transition-all text-white px-6 py-4 rounded-lg inline-flex justify-between items-center"
        >
          {t("Volver")}
        </Link>
      </div>
    </div>
  );
};
