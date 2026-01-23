import Image, { StaticImageData } from "next/image";
import { projects } from "@/assets/imagenes";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  imageSrc: string | StaticImageData;
  linkHref: string;
}
const ProjectCard = ({ title, imageSrc, linkHref }: ProjectCardProps) => {
  const styleCard =
    "flex flex-col items-center gap-4 bg-slate-950 rounded-lg p-6 border border-primary text-center text-white";
  const styleCardh3 = "text-2xl font-semibold";
  const styleCardButton =
    "bg-blue-500 hover:bg-blue-600 transition-all px-6 py-3 rounded-lg w-fit";

  return (
    <div className={styleCard}>
      <Image src={imageSrc || ""} alt={title || ""} />
      <h3 className={styleCardh3}>{title || ""}</h3>
      <Link href={linkHref || "/"} className={styleCardButton}>
        Ver Proyectos
      </Link>
    </div>
  );
};

export default function Projects() {
  return (
    <>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Microfrontend"
          imageSrc={projects.microFrontend}
          linkHref="/proyectos/microfrontend"
        />
                <ProjectCard
          title="Design System"
          imageSrc={projects.design_system2}
          linkHref="/proyectos/designsystem"
        />
        <ProjectCard
          title="Autentifiaciones"
          imageSrc={projects.AuthNest2}
          linkHref="/proyectos/autentificaciones"
        />
        <ProjectCard
          title="Aplicaciones Angular"
          imageSrc={projects.ngrx_signal}
          linkHref="/proyectos/angular"
        />
        <ProjectCard
          title="Aplicaciones React / Next JS"
          imageSrc={projects.shopReact}
          linkHref="/proyectos/react-next"
        />
        <ProjectCard
          title="CMS / Ecommerce"
          imageSrc={projects.florBenavides}
          linkHref="/proyectos/cms"
        />
      </div>
    </>
  );
}
