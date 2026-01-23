"use client";

import { HomeLayout } from "@/components/layout/HomeLayout";
import { icons, profile, about } from "@/assets/imagenes";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { SwiperEmpresa } from "@/components/Swipers/SwiperEmpresa";
import { SwiperProyecto } from "@/components/Swipers/SwiperProyecto";
import { WordsChange } from "@/components/WordsChange";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <HomeLayout>
        <div
          className="snap-start snap-normal slide-sec mx-auto pr-4 sm:pr-6 lg:max-w-7xl lg:pr-8 pt-10 lg:pt-16 pb-0"
          id="home"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-1 head_title_home">
              <div className="text-3xl lg:text-5xl xl:text-6xl mb-6 sm:mb-11 leading-normal xl:leading-snug text-white ">
                <p className="font-semibold">{t("Hola, soy")} </p>
                <p className="xl:text-[68px]">Luwy&nbsp;Dyro</p>
                <WordsChange></WordsChange>
              </div>
              <p className="text-xl lg:text-2xl text-neutral-100 pb-10 text_2">
                {t("Creativo, Analítico y Calaborativo")}
              </p>
              <div className="flex items-center flex-wrap gap-8">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/luwydyrofrontend/"
                  className="bg-blue-500 hover:bg-blue-600 transition-all text-white px-6 py-4 rounded-lg inline-flex justify-between items-center"
                >
                  <p className="text-white">Linkedin&nbsp;</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 448 512"
                  >
                    <path
                      className="fill-[#ffffff] group-hover:fill-white"
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="relative h-full">
                <div className="relative z-30 pr-5">
                  <Image src={profile.person} alt="" />
                </div>
                <ul>
                  <li className="absolute top-56 z-50 hidden lg:block">
                    <div className="relative flex justify-center items-center">
                      <Image src={profile.w_circle} className="" alt="" />
                      <Image
                        src={profile.text_circle}
                        className="absolute circle-text"
                        alt=""
                      />
                      <Image src={profile.years5} className="absolute" alt="" />
                    </div>
                  </li>
                  <li className="absolute right-0 -bottom-10 z-50 hidden lg:block moveRightLeftPR">
                    <Image src={profile.customar} alt="Skills" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="snap-start snap-normal slide-sec grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10 lg:pt-16"
          id="service"
        >
          <div className="px-7 pt-7 pb-5 bg-[#091530] rounded-2.5 shadow-customThree transition-all hover:bg-blue-500 duration-500">
            <Image src={about.Frame3} alt="" />
            <h4 className="text-white text-2xl font-medium mt-3">
              Dev Front End
            </h4>
            <p className="text-indigo-200 text-sm mt-3">
              SPA, Web Components, SSR, CSR, Angular 19+, NextJS, RxJS, Signals,
              Hooks
            </p>
          </div>
          <div className="px-7 pt-7 pb-5 bg-[#091530] rounded-2.5 shadow-customThree transition-all hover:bg-blue-500 duration-500">
            <Image src={about.Frame} alt="" />
            <h4 className="text-white text-2xl font-medium mt-3">
              {t("Microservicios")}
            </h4>
            <p className="text-indigo-200 text-sm mt-3">
              {t("Colab en diseño e implementación de microservicios")},
              RestFul, Spring Boot, Mysql, SQL Server, MongoDB
            </p>
          </div>
          <div className="px-7 pt-7 pb-5 bg-[#091530] rounded-2.5 shadow-customThree transition-all hover:bg-blue-500 duration-500">
            <Image src={about.Frame2} alt="" />
            <h4 className="text-white text-2xl font-medium mt-3">
              Ecommerce CMS
            </h4>
            <p className="text-indigo-200 text-sm mt-3">
              SAP Commerce Cloud, Storefront, Woocomerce, Pasarelas de Pago
            </p>
          </div>
          <div className="px-7 pt-7 pb-5 bg-[#091530] rounded-2.5 shadow-customThree transition-all hover:bg-blue-500 duration-500">
            <Image src={about.Frame4} alt="" />
            <h4 className="text-white text-2xl font-medium mt-3">
              UX Developer
            </h4>
            <p className="text-indigo-200 text-sm mt-3">
              {t("Prototipos")}, design Tinking, Figma, Adobe XD, AI, PSD
            </p>
          </div>
          <div className="px-7 pt-7 pb-5 bg-[#091530] rounded-2.5 shadow-customThree transition-all hover:bg-blue-500 duration-500">
            <Image src={about.Frame6} alt="" />
            <h4 className="text-white text-2xl font-medium mt-3">
              {t("Metodología Agile")}
            </h4>
            <p className="text-indigo-200 text-sm mt-3">
              Scrum y Kanban - Azure Board, Jira, MS Planner, Notion Trello.
            </p>
          </div>
          <div className="px-7 pt-7 pb-5 bg-[#091530] rounded-2.5 shadow-customThree transition-all hover:bg-blue-500 duration-500">
            <Image src={about.Frame5} alt="" />
            <h4 className="text-white text-2xl font-medium mt-3">
              E-mailing Marketing
            </h4>
            <p className="text-indigo-200 text-sm mt-3">
              Mailing responsive, SAP Marketing Cloud, Insider, Mailchimp,
              Hubsport
            </p>
          </div>
        </div>
        <div
          className="snap-start snap-normal slide-sec mx-auto lg:max-w-7xl pt-10 lg:pt-16 pb-12"
          id="about"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16 xl:gap-24">
            <div className="lg:w-1/2">
              <div>
                <h2 className="uppercase text-lg text-blue-500 font-medium block mb-3">
                  {t("Conóceme")}
                </h2>

                <h3 className="text-white font-normal text-4xl xl:text-5xl xl:leading-snug mb-4">
                  Software Skills
                </h3>
                <p className="text-lg text-neutral-100 mb-8">
                  {t(
                    "Estoy utilizando los mejores métodos de diseño líderes en mi trabajo",
                  )}
                  .
                </p>
              </div>
              <div className="mb-10 space-y-4">
                <div className="relative">
                  <b className="text-lg font-normal text-neutral-100 block mb-3">
                    Angular/NextJs
                  </b>
                  <div className="w-full h-2 rounded flex items-center overflow-hidden growAnimation">
                    <div
                      className="bg-blue-500 h-2 rounded origin-left"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="relative">
                  <b className="text-lg font-normal text-neutral-100 block mb-3">
                    TailwindCSS/Bootstrap/DeysiUI/Material UI/SCSS
                  </b>
                  <div className="w-full h-2 rounded flex items-center overflow-hidden growAnimation">
                    <div
                      className="bg-blue-500 h-2 rounded origin-left"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="relative">
                  <b className="text-lg font-normal text-neutral-100 block mb-3">
                    Post CSS / BEM / OOCSS / SMACSS
                  </b>
                  <div className="w-full h-2 rounded flex items-center overflow-hidden growAnimation">
                    <div
                      className="bg-blue-500 h-2 rounded origin-left"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div className="relative">
                  <b className="text-lg font-normal text-neutral-100 block mb-3">
                    RxJS, Signals, Effect, Auth, NgRX
                  </b>
                  <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                    <div
                      className="bg-blue-500 h-2 rounded origin-left"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="relative">
                  <b className="text-lg font-normal text-neutral-100 block mb-3">
                    Unit Test, Jest, TDD
                  </b>
                  <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                    <div
                      className="bg-blue-500 h-2 rounded origin-left"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="relative">
                  <b className="text-lg font-normal text-neutral-100 block mb-3">
                    SQL/MySQL/MongoDb/Firestore
                  </b>
                  <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                    <div
                      className="bg-blue-500 h-2 rounded origin-left"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div className="relative">
                  <b className="text-lg font-normal text-neutral-100 block mb-3">
                    PSD/Figma/Illustrator
                  </b>
                  <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                    <div
                      className="bg-blue-500 h-2 rounded origin-left"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="relative">
                  <b className="text-lg font-normal text-neutral-100 block mb-3">
                    Scrum/Kanban/JIRA/Board Azure
                  </b>
                  <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                    <div
                      className="bg-blue-500 h-2 rounded origin-left"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                <div className="relative">
                  <b className="text-lg font-normal text-neutral-100 block mb-3">
                    GitHub, GitLab, BitBucket, Docker
                  </b>
                  <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                    <div
                      className="bg-blue-500 h-2 rounded origin-left"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="relative">
                  <b className="text-lg font-normal text-neutral-100 block mb-3">
                    EsLint / Prettier / Lighthouse / PageSpeed / BrowserStack
                  </b>
                  <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                    <div
                      className="bg-blue-500 h-2 rounded origin-left"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="relative">
                  <b className="text-lg font-normal text-neutral-100 block mb-3">
                    Webpack, Module - Vite Federation
                  </b>
                  <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                    <div
                      className="bg-blue-500 h-2 rounded origin-left"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div className="relative">
                  <b className="text-lg font-normal text-neutral-100 block mb-3">
                    Azure, Render, Vercel, Netlify, Neon Console, Firebase
                  </b>
                  <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                    <div
                      className="bg-blue-500 h-2 rounded origin-left"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="relative">
                  <b className="text-lg font-normal text-neutral-100 block mb-3">
                    SAP Commerce Cloud/Composable Store Front (Angular20)
                  </b>
                  <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                    <div
                      className="bg-blue-500 h-2 rounded origin-left"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="relative">
                  <b className="text-lg font-normal text-neutral-100 block mb-3">
                    CMS (WooCommerce – {t("Pasarelas de Pago")})
                  </b>
                  <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                    <div
                      className="bg-blue-500 h-2 rounded origin-left"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 hidden lg:block">
              <div className="relative">
                <Image src={about.dskill} className="relative z-20" alt="" />
                <ul>
                  {/* Top */}
                  <li className="absolute w-45 xl:w-auto top-280 xl:top-300 left-0 xl:-left-10 z-30 moveTopBottomPR">
                    <Image src={about.neon_console} alt="Logo Neon Console" />
                  </li>
                  <li className="absolute w-45 xl:w-auto top-270 -right-2.5 z-30 moveRightLeftPR">
                    <Image src={about.vercel} alt="Logo vercel" />
                  </li>
                  <li className="absolute w-45 xl:w-auto top-200 left-0 z-30 moveLeftRightPR">
                    <Image src={about.netlify} alt="Logo netlify" />
                  </li>
                  <li className="absolute w-45 xl:w-auto top-200 right-2.5 xl:-right-7.5  z-30 moveBottomTopPR">
                    <Image src={about.render} alt="Logo render" />
                  </li>

                  {/* Middle */}
                  <li className="absolute w-48 xl:w-auto -top-17.5 -left-14 z-30 moveRightLeftPR">
                    <Image src={about.SAP_logo} alt="Logo SAP" />
                  </li>
                  <li className="absolute w-56 xl:w-auto -bottom-16 left_8 z-30 moveBottomTopPR">
                    <Image
                      src={about.Databases_logo}
                      alt="Logos Base de Datos"
                    />
                  </li>
                  <li className="absolute w-48 xl:w-auto -top-17.5 -right-7 xl:-right-12 z-30 moveTopBottomPR">
                    <Image src={about.toolDsg} alt="Logos de Edicion" />
                  </li>
                  <li className="absolute w-45 xl:w-auto -bottom-14 -right-6 xl:-right-12 z-30 moveRightLeftPR">
                    <Image src={about.react_next_vite} alt="Logos Framework" />
                  </li>
                  {/* Bottom */}
                  <li className="absolute bottom-200 left-8 xl:left-1/5 z-30 moveLeftRightPR">
                    <Image src={about.ajn} alt="Logo git" />
                  </li>
                  <li className="absolute w-20 xl:w-auto  bottom-330 left_10 z-30 moveTopBottomPR ">
                    <Image src={about.azure} alt="Logo azure" />
                  </li>
                  <li className="absolute w-20 xl:w-24  bottom-330 left-2/5 z-30 moveBottomTopPR">
                    <Image src={about.wordpress_logo} alt="Logo wordpress" />
                  </li>
                  <li className="absolute w-20 xl:w-auto bottom-330 right-12.5 z-30 moveTopBottomPR">
                    <Image src={about.git} alt="Logo git" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="snap-start snap-normal slide-sec mx-auto pt-10 lg:pt-16 lg:max-w-7xl"
          id="projects"
        >
          <div className="pt-28 pb-20">
            <div className="max-w-lg mx-auto text-center mb-10">
              <h2 className="text-5xl font-urbanist text-white font-medium">
                {t("Proyectos")}
              </h2>
            </div>
            <SwiperProyecto></SwiperProyecto>
          </div>
          <div className="flex justify-center items-center">
            <Link
              href={"/proyectos"}
              className="bg-blue-500 hover:bg-blue-600 transition-all text-white px-6 py-4 rounded-lg inline-flex justify-between items-center"
            >
              <p className="text-white">{t("Ver todos los Proyectos")}</p>
            </Link>
          </div>
        </div>
        <div
          className="snap-start snap-normal slide-sec mx-auto pt-10 lg:pt-16 lg:max-w-7xl"
          id="review"
        >
          <div className="pt-28 pb-20">
            <div className="max-w-lg mx-auto text-center mb-10">
              <h2 className="text-5xl font-urbanist text-white font-medium">
                {t("Empresas")}
              </h2>
            </div>
            <SwiperEmpresa></SwiperEmpresa>
          </div>
        </div>
        <div
          className="snap-start snap-normal slide-sec mx-auto pt-10 lg:pt-16 pb-3 lg:max-w-7xl"
          id="contact"
        >
          <div>
            <h2 className="text-white font-bold text-4xl leading-normal xl:text-5xl capitalize xl:leading-snug text-center">
              {t("Contácteme")}
            </h2>
            <h3 className="text-2xl text-white text-center pb-10">
              {t("Siéntete libre de contactarme")}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="w-full h-fit relative group">
              <div className="px-8 py-10 bg-[#050F25] rounded-lg box-contact">
                <form>
                  <div className="flex-col gap-x-7 gap-y-5 flex">
                    <div className="text-center flex justify-center">
                      <div className="w-20 h-20 text-center flex justify-center items-center rounded-full bg-[rgba(255,255,255,0.1)] group transition-all icon_contact">
                        <Image alt="logo Redes Sociales" src={icons.IconRrss} />
                      </div>
                    </div>
                    <div className="head-box-contact">
                      <h4 className="block mb-2 text-2xl font-medium text-center text-neutral-500">
                        RRSS
                      </h4>
                    </div>
                    <div>
                      <p className="block mb-2 text-base font-medium text-center text-neutral-500">
                        <a
                          href="https://Instagram"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Instagram
                        </a>{" "}
                        -{" "}
                        <a
                          href="https://x.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Twitter
                        </a>{" "}
                        -{" "}
                        <a
                          href="https://www.linkedin.com/in/luwydyrofrontend/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Linkedin
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full h-fit relative group">
              <div className="px-8 py-10 bg-[#050F25] rounded-lg box-contact">
                <form>
                  <div className="flex-col gap-x-7 gap-y-5 flex">
                    <div className="text-center flex justify-center">
                      <div className="w-20 h-20 text-center flex justify-center items-center rounded-full bg-[rgba(255,255,255,0.1)] group transition-all icon_contact">
                        <Image alt="logo correo" src={icons.IconEmail} />
                      </div>
                    </div>
                    <div className="head-box-contact">
                      <h4 className="block mb-2 text-2xl font-medium text-center text-neutral-500">
                        E-mail
                      </h4>
                    </div>
                    <div>
                      <p className="block mb-2 text-base font-normal text-center text-neutral-500">
                        <a href="mailto:luwy.dyro@gmail.com">
                          luwy.dyro@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full h-fit relative group ">
              <div className="px-8 py-10 bg-[#050F25] rounded-lg box-contact">
                <form>
                  <div className="flex-col gap-x-7 gap-y-5 flex">
                    <div className="text-center flex justify-center">
                      <div className="w-20 h-20 text-center flex justify-center items-center rounded-full bg-[rgba(255,255,255,0.1)] group transition-all icon_contact">
                        <Image alt="logo DEV" src={icons.IconDev} />
                      </div>
                    </div>
                    <div className="head-box-contact">
                      <h4 className="block mb-2 text-2xl font-medium text-center text-neutral-500">
                        DEV
                      </h4>
                    </div>
                    <div>
                      <p className="block mb-2 text-base font-normal text-center text-neutral-500">
                        <a
                          href="https://github.com/Luwy-Dyro"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
