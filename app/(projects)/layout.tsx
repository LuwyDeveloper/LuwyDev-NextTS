import { Metadata } from "next";
import { GlobalLayout } from "@/components/layout/GlobalLayout";
import {HeaderProjects} from "@/components/projects/HeaderProjects";

export const metadata: Metadata = {
  title: {
    default: "Proyectos",
    template: "%s | Luwy Dyro",
  },
  description:
    "Proyectos - Aplicaciones en Angular, React, Microfrontends, Design Systems, CMS, E-Commerce, Autentificaciones",
  keywords:
    "Luwy, Angular, React, Microfrontend, Design System, Autentificacion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalLayout>
      <HeaderProjects/>
      {children}
    </GlobalLayout>
  );
}
