"use client";
import Image, { StaticImageData } from "next/image";

type ProjectPreviewDetail = {
  title: string;
};

type ProjectPreview = {
  image: StaticImageData | string;
  altImg?: string;
  title: string;
  details: ProjectPreviewDetail[];
  link: string;
};
type ProjectPreviewProps = {
  project: ProjectPreview;
};

export const ProjectPreview = ({ project }: ProjectPreviewProps) => {
  const styleListItemUnordered = "text-blue-500 text-sm xl:text-base font-medium";

  return (
    <>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full not-lg:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80">
          <h4 className="text-white text-center text-[28px] font-medium px-10">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h4>
          <ul className="list-disc">
            {project.details.map((detail, index) => (
              <li key={index} className={styleListItemUnordered}>
                <a className="text-white"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >{detail.title}</a>
                
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="w-full rounded-lg"
          src={project.image}
          alt={project.altImg ?? project.title}
        />
      </div>
    </>
  );
};
