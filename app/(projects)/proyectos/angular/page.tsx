import { Metadata } from "next";
import { projects } from "@/assets/imagenes";
import Image from "next/image";
import { ProjectPreview } from "@/components/projects/ProjectPreview";

export const metadata: Metadata = {
  title: "Aplicaciones Angular",
  description:
    "Angular - Aplicaciones desarrolladas en Angular, utilizando las últimas versiones y características del framework.",
  keywords:
    "Luwy, Angular, Angular 20, Angular 21, Signals, Zoneless, RxJS, TailwindCSS, Autentificación, Tienda Online, NgRx Signal Store",
};

const luwyGames = {
  image: projects.luwygames,
  title: "Luwy Games",
  details: [
    { title: "Angular20, Signals, Auth0" },
    { title: "RxJS, Api Rawg, Json Server" },
  ],
  link: "https://a20-appgames.netlify.app/",
};
const shopRest = {
  image: projects.shopRest,
  title: "Shop Rest",
  details: [
    { title: "A20 CSR, Signals, ReactiveForms" },
    { title: "Tailwind, Fetch, Rest" },
  ],
  link: "https://luwypack.netlify.app/#/gender/men",
};
const ngrxSignalStore = {
  image: projects.ngrx_signal,
  title: "NgRx Signal Store",
  details: [
    { title: "ngSignals, Computed, Store" },
    { title: "Fetch APi, rxResource, rxMethod" },
  ],
  link: "https://ngrxstore.netlify.app/",
};
const fastBillings = {
  image: projects.fastBillings,
  title: "FastBillings",
  details: [{ title: "Modo práctico" }],
  link: "https://fast-billings.vercel.app/",
};
const reactiveForms = {
  image: projects.ReactiveForms,
  title: "Reactive Forms",
  details: [
    { title: "Modo práctico, RF, FormB" },
    { title: "Signals, Computed" },
  ],
  link: "https://ang20-my-forms-reactive.vercel.app/reactive",
};

const yanbal = {
  image: projects.yanbal,
  title: "Yanbal",
  details: [
    { title: "A19 SAP StoreFront B2C" },
    { title: "Signals, Rest, CSS BEM" },
  ],
  link: "https://uat-ggp.yanbal.com/#/id",
};
const belcorp = {
  image: projects.belcorp,
  altImg: "Belcorp Mailing",
  title: "Belcorp",
  details: [
    { title: "A15 CSR, RxJS, Material UI" },
    { title: "Fetch, Rest, FromBuilder" },
  ],
  link: "https://www.somosbelcorp.com/",
};

export default function AngularProjects() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <ProjectPreview project={luwyGames} />
        <ProjectPreview project={shopRest} />
        <ProjectPreview project={ngrxSignalStore} />
        <ProjectPreview project={fastBillings} />
        <ProjectPreview project={reactiveForms} />
        <ProjectPreview project={yanbal} />
        <ProjectPreview project={belcorp} />
      </div>
    </>
  );
}
