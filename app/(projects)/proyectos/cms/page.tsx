import { Metadata } from "next";
import { projects } from "@/assets/imagenes";
import { ProjectPreview } from "@/components/projects/ProjectPreview";

export const metadata: Metadata = {
  title: "CMS - Content Management Systems",
  description:
    "CMS - Website projects developed in WordPress, focused on ease of administration and content updating.",
  keywords:
    "Luwy, CMS, WordPress, Content Management, Websites, Web Development",
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
  link: "https://mudanzamovinghouse.com/jjm/",
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
const tepwebs = {
  image: projects.tepwebs,
  title: "Tu Empresa Primero",
  details: [{ title: "FrontEnd" }],
  link: "https://tepwebs.com/",
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
        <ProjectPreview project={tepwebs} />
      </div>
    </>
  );
}
