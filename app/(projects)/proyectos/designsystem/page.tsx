import { Metadata } from "next";
import { projects } from "@/assets/imagenes";
import { ProjectInfo } from "@/components/projects/ProjectInfo";

export const metadata: Metadata = {
  title: "Design System",
  description:
    "Design System - Monorepo que centraliza design tokens y una librería de componentes React, con un portal de documentación.",
  keywords:
    "Luwy, Design System, React, Tokens, Componentes, Librería UI, Documentación, Monorepo, pnpm, Turborepo, Storybook",
};

const designSystem = {
  images: [
    projects.design_system1,
    projects.design_system2,
    projects.design_system3,
  ],
  title: "Design System",
  description:
    "designsystemPDescription1",
  subtitle: "Tecnologías",
  details: {
    1: {
      title: "Monorepo / Gestión de paquetes",
      items: [
        "pnpm Workspaces",
        "Turborepo turbo@^2.5.8 para orquestar dev/build — turbo.json",
      ],
    },
    2: {
      title: "Frontend (portal de documentación) — apps/docs",
      items: [
        "React ^19.1.1 + React DOM",
        "Vite ^7.1.7 + @vitejs/plugin-react@^5.0.4",
        "TypeScript ~5.9.3",
        "React Router",
        "Lucide React (iconos) ^0.545.0 — package.json",
        "Motion (animaciones) ^12.23.24 — package.json",
      ],
    },
    3: {
      title: "Autenticación",
      items: [
        "Firebase ^12.6.0 — Login con Google",
        "Singleton: Librerias Compartidas",
        "API Auth — Login con DummyJSON",
        "AuthProvider (auth/AuthProvider en el código) — Manejo global de sesión, token y usuario",
        "React Router: Rutas protegidas con ProtectedRoute (auth/ProtectedRoute en el código)",
        "Restore Session — Recupera sesión al recargar la app",
        "Logout seguro — Limpieza de estado y storage",
      ],
    },
    4: {
      title: "Librería UI — packages/ui",
      items: [
        "React ^19.2.0 + React DOM ^19.2.0",
        "Vite ^7.1.9",
        "Storybook 9.1.10",
        "Chromatic @chromatic-com/storybook@4.1.1",
        "Testing Storybook con Vitest + Browser",
        "Vitest ^3.2.4",
        "Playwright ^1.56.0 (provider browser de Vitest)",
        "Tailwind CSS v4",
      ],
    },
    5: {
      title: "Design Tokens — packages/tokens",
      items: [
        "Style Dictionary ^3.9.0 para generar tokens a CSS/JS",
        "Tokens + theming con CSS variables + @theme",
        "Preset Tailwind (mapea tokens → theme.extend) — tailwind-preset.js",
      ],
    },
    6: {
      title: "Calidad / Lint",
      items: ["ESLint ^9.36.0 (flat config) + typescript-eslint ^8.45.0"],
    },
    7: {
      title: "Versionado y publicación",
      items: [
        "Changesets @changesets/cli@^2.29.7",
        "GitHub Packages",
        "GitHub Actions para release automático",
      ],
    },
  },
  link: "https://luwy-designsystem.netlify.app",
  linkNpm: "https://github.com/orgs/LuwyDyroWeb/packages",
};

export default function DesignSystemPage() {
  return (
    <>
      <ProjectInfo project={designSystem} />
    </>
  );
}
