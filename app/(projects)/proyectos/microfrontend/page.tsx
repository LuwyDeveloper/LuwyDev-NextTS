import { Metadata } from "next";
import { projects } from "@/assets/imagenes";
import { ProjectInfo } from "@/components/projects/ProjectInfo";


export const metadata: Metadata = {
  title: "Microfrontend",
  description:
    "Microfrontend - Implementación de arquitecturas de micro frontends utilizando Angular 21 y React con Vite, compartiendo estado y componentes UI.",
  keywords:
    "Luwy, Microfrontend, Angular, React, Vite, Module Federation, Arquitectura, UI Compartida, Estado Compartido",
};


const microfrontend21 = {
  images: [projects.A21mf1, projects.A21mf2],
  altImg: "Micro Frontend Angular 21",
  title: "MicroFrontEnd System",
  description:
    "microfrontendPDescription1",
  details: {
    1: {
      title: "Tecnologías",
      items: [
        "Angular 21",
        "React 19",
        "Module Federation: Native Federation (Angular Architects)",
        "React Vite: @module-federation/vite",
        "TypeScript",
        "Tailwind CSS v4",
      ],
    },
    2: {
      title: "Herramientas",
      items: [
        "Angular CLI",
        "Vite",
        "ng-packagr: empaqueta las librerías",
        "Concurrently: múltiples apps",
        "ESLint",
      ],
    },
    3: {
      title: "Arquitectura",
      items: [
        "Composición por runtime",
        "Singleton: Librerias Compartidas",
        "Integración: React exporta una función tipo",
        "Integración: React exporta una función tipo renderWidget(hostEl, props) / unmountWidget(hostEl) para montar/desmontar el widget en un contenedor DOM que Angular controla.",
      ],
    },
  },
  // link: "https://microfrontend-angular21.up.railway.app",
  link: "https://github.com/LuwyDeveloper/MicroFrontEnd-A21-Cart",
};

const microfrontendReact = {
  images: [projects.microFrontend1, projects.microFrontend4, projects.microFrontend2, projects.microFrontend3],
  altImg: "Micro Frontend React",
  title: "MicroFrontend",
  description:
    "microfrontendPDescription2",
  details: {
    1: {
      title: "Tecnologías",
      items: [
        "Monorepo workspaces + orquestación con concurrently",
        "React 19.1.1 + React Router",
        "Routing",
        "Build/dev tool: Vite 7.1.x",
        "Microfrontends: Vite Federation",
        "TypeScript",
        "Tailwind CSS versión 4.1",
        "Linting: ESLint 9.x + eslint-plugin-react-hooks"
      ],
    },
    2: {
      title: "Arquitectura",
      items: [
        "Host/Shell",
        "Remotes",
        "Federación anidada",
        "CORS: cors: true y header Access-Control-Allow-Origin: *",
        "Proxy: shell tiene server.proxy",
      ],
    },
    3: {
      title: "Seguridad/Auth",
      items: [
        "Autenticación basada en JWT",
        "LocalStorage",
        "Authorization: Bearer <token>",
        "Interceptor de Axios",
        ".env",
        "Interceptor Error",
        "API en Express",
      ],
    },

  },
  // link: "https://monorepo-microf-luwydev.up.railway.app",
  link: "https://github.com/LuwyDeveloper/MonoRepo-MicroFrontend",
};


export default function MicrofrontendPage() {
  return (
    <>
      <ProjectInfo project={microfrontend21} />
      <hr className="text-blue-900 md:mb-12 mb-8 mt-8 border-2" />
      <ProjectInfo project={microfrontendReact} invert/>
    </>
  );
}
