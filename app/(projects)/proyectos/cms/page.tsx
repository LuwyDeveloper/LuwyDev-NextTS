import { Metadata } from "next";
import { projects } from "@/assets/imagenes";
import { ProjectPreview } from "@/components/projects/ProjectPreview";

export const metadata: Metadata = {
  title: "CMS - Sistemas de Gestión de Contenidos",
  description:
    "CMS - Proyectos de sitios web desarrollados en WordPress, enfocados en la facilidad de administración y actualización de contenido.",
  keywords:
    "Luwy, CMS, WordPress, Gestión de Contenidos, Sitios Web, Desarrollo Web",
};

const florBenavides = {
  image: projects.florBenavides,
  title: "Florería Benavides",
  details: [{ title: "FrontEnd" }],
  link: "https://floreriabenavides.com.pe/",
};
const grubbaSport = {
  image: projects.grubba,
  title: "Grubbasport",
  details: [{ title: " FrontEnd" }],
  link: "https://www.grubbasport.com/",
};
const yatePeru = {
  image: projects.yateperu,
  title: "Yate Perú",
  details: [{ title: " FrontEnd" }],
  link: "https://yateperu.pe/",
};
const jjMining = {
  image: projects.jjmining,
  title: "JJ Mining",
  details: [{ title: "FrontEnd" }],
  link: "https://luwydev.com/jjm/",
};
const trainingCertification = {
  image: projects.training,
  title: "Training Certification",
  details: [{ title: "FrontEnd" }],
  link: "https://trainingcertification.pe/",
};
const removex = {
  image: projects.removex,
  title: "Removex",
  details: [{ title: "FrontEnd" }],
  link: "https://removex.pe/",
};

export default function CmsProjects() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <ProjectPreview project={florBenavides} />
        <ProjectPreview project={grubbaSport} />
        <ProjectPreview project={yatePeru} />
        <ProjectPreview project={jjMining} />
        <ProjectPreview project={trainingCertification} />
        <ProjectPreview project={removex} />
      </div>
    </>
  );
}
