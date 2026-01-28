"use client";
import Image, { StaticImageData } from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

type ProjectDetail = {
  title: string;
  items: string[];
};

type Project = {
  images: StaticImageData[] | string[];
  altImg?: string;
  subtitle?: string;
  title: string;
  description: string;
  details: Record<number, ProjectDetail>;
  link: string;
  linkNpm?: string;
};
type ProjectInfoProps = {
  project: Project;
  invert?: boolean;
};

export const ProjectInfo = ({ project, invert = false }: ProjectInfoProps) => {
  const styleListOrdered = "list-decimal pl-5 mb-3";
  const styleListUnordered = "list-disc pl-5 mb-3";
  const styleListItemOrdered = "text-white text-base font-normal";
  const styleListItemUnordered = "marker:text-primary font-light";

const swiperOrder =
  invert === false ? "" : "xl:order-2 order-1";

const contentOrder =
  invert === false ? "" : "xl:order-1 order-2";

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-center">
        <div className={`main_modal_swiper ${swiperOrder}`}>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={false}
            loop={true}
            modules={[Navigation]}
            navigation
          >
            {project.images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  className="w-fit rounded-lg"
                  src={img}
                  alt={project.altImg ?? `${project.title} - ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`flex flex-col h-full lg:overflow-hidden pr-2 gap-6 ${contentOrder}`}>
          <div className="flex-1 lg:overflow-y-auto pr-2">
            <h2 className="text-2xl text-white font-medium mb-4">
              {project.title}
            </h2>
            <p className="text-white mb-3">{project.description}</p>
            <div className="mb-2">
              {project.subtitle && (
                <p className="text-white text-xl font-medium mb-2">
                  {project.subtitle}
                </p>
              )}
              <ol className={styleListOrdered}>
                {Object.values(project.details).map((detail, index) => (
                  <li key={index} className={styleListItemOrdered}>
                    {detail.title}
                    <ul className={styleListUnordered}>
                      {detail.items.map((item, idx) => (
                        <li key={idx} className={styleListItemUnordered}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="pt-3 pb-6 border-t border-white/10 flex gap-2">
            <a
              className="mt-4 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver sitio
            </a>
            {project.linkNpm && (
              <a
                className="mt-4 px-3 py-2 bg-[#CC3534] text-white rounded hover:bg-blue-500 transition"
                href={project.linkNpm}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Token NPM
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
