import { Metadata } from "next";
import { GlobalLayout } from "@/components/layout/GlobalLayout";
import {HeaderProjects} from "@/components/projects/HeaderProjects";

export const metadata: Metadata = {
  title: {
    default: "Projects",
    template: "%s | Luwy Dyro",
  },
  description:
    "Projects - Applications in Angular, React, Microfrontends, Design Systems, CMS, E-Commerce, Authentications",
  keywords:
    "Luwy, Angular, React, Microfrontend, Design System, Authentication",
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
