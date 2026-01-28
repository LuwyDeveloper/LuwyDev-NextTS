import { Metadata } from "next";
import { projects } from "@/assets/imagenes";
import { ProjectInfo } from "@/components/projects/ProjectInfo";


export const metadata: Metadata = {
  title: "Autentificaciones",
  description:
    "Autentificaciones - Sistemas de autenticación desarrollados en Angular y React, con integración a backend y Firebase Authentication.",
  keywords:
    "Luwy, Autentificaciones, Angular, React, Firebase, NestJS, Seguridad, Login, Logout, Gestión de Sesión",
};


const authAngular = {
  images: [projects.ldAdmin1, projects.ldAdmin2, projects.ldAdmin3, projects.ldAdmin4],
  altImg: "Luwy Admin Auth Angular",
  title: "Admin Auth Angular 21",
  description:
    "Dashboard/Admin en Angular 21 (Signals + zoneless con autenticación (login) y autorización por roles, con seguridad por guards/interceptors y consumo de API REST (DummyJSON).",
  details: {
    1: {
      title: "Tecnologías",
      items: [
        "Angular 21",
        "Signals, para manejar estado y conectar RxJS",
        "RxJS, para flujos async y estados de carga",
        "TailwindCSS v4.1",
        "SweetAlert2",
        "Tailwind CSS v4",
        "API REST: Dummyjson",
      ],
    },
    2: {
      title: "Arquitectura:",
      items: [
        "Standalone Bootstrap",
        "Zoneless",
        "Router lazy",
        "Capa Core: API client, auth, interceptors, cache, manejo de errores.",
        "Capa Features:pantallas de negocio",
        "Shared UI: Componentes y servicios reusables",
      ],
    },
    3: {
      title: "Seguridad/Auth:",
      items: [
        "Login: Reactive Form",
        "Estado global",
        "Token",
        "Guards",
        "Interceptor Auth: Agrega Authorization: Bearer <token> al endpoint",
        "Interceptor Error",
        "Rutas especiales: ForbiddenPage y NotFoundPage",

      ],
    },
    4: {
      title: "Performance/UX:",
      items: [
        "Cache interceptor con TTL",
        "Skeleton loading",
        "Debounce + paginación + búsqueda",
      ],
    },
  },
  link: "https://admin-a21.netlify.app/",
};

const authReact = {
  images: [projects.AuthNest1, projects.AuthNest2, projects.AuthNest3],
  altImg: "Luwy Admin Auth React",
  title: "Admin Auth React 19",
  description:
    "Sistema de autenticación en React + TypeScript, con Zustand como estado global, integrado con backend propio en NestJS y Firebase Authentication, con control avanzado de sesión, expiración, inactividad y UX en dashboard.",
  details: {
    1: {
      title: "Tecnologías",
      items: [
        "React 19 + TypeScript",
        "Zustand (estado global) y Zustand Persist (sessionStorage)",
        "Backend REST en NestJS",
        "Firebase Authentication (Google Login)",
        "ApexCharts (visualización de dashboard)",
        "TailwindCSS",
      ],
    },
    2: {
      title: "Arquitectura:",
      items: [
        "Store global de autenticación (auth.store.ts)",
        "Store dedicado para inactividad del usuario (idle.store)",
        "Separación de responsabilidades por dominio (auth / idle / ui)",
        "Capa Core: API client, auth, interceptors, cache, manejo de errores.",
        "Hooks desacoplados del UI",
        "Acceso global al estado sin prop drilling",
      ],
    },
    3: {
      title: "Seguridad/Auth:",
      items: [
        "Login tradicional (usuario y contraseña) vía API REST (NestJS)",
        "Login con Google (Firebase Auth)",
        "Manejo de token de sesión",
        "Logout manual y automático",
      ],
    },
    4: {
      title: "Manejo de Sesión:",
      items: [
        "Verificación activa de sesión (checkSession)",
        "Duración de sesión configurable (TTL)",
        "Timestamp de expiración (expiresAt)",
        "Modal de advertencia 2 minutos antes de expirar la sesión",
        "Sincronización entre expiración y actividad del usuario",
      ],
    },
     5: {
      title: "Control de Inactividad:",
      items: [
        "Detección de inactividad del usuario (idle timeout)",
        "Logout automático tras 1 minuto sin interacción",
        "Debounce + paginación + búsqueda",
      ],
    },
     6: {
      title: "Dashboard / UX:",
      items: [
        "Dashboard protegido por autenticación",
        "Visualización de datos con ApexCharts",
        "Feedback visual de sesión activa / expirada",
      ],
    },
  },
  link: "https://authnest-luwy.up.railway.app",
};


export default function AutentificacionesPage() {
  return (
    <>

      <ProjectInfo project={authAngular} />
      <hr className="text-blue-900 md:mb-12 mb-8 mt-8 border-2" />
      <ProjectInfo project={authReact} invert/>
    </>
  );
}
