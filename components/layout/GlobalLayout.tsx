import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { background } from "@/assets/imagenes";
import { GlobalHeaderMobile } from "./GlobalHeaderMobile";

type Props = {
  children: ReactNode;
};

export function GlobalLayout({ children }: Props) {
  const backgroundStyle = {
    backgroundImage: `url(${background.BG.src})`,
  };
  return (
    <>
    <GlobalHeaderMobile />
      <div
        style={backgroundStyle}
        className="flex justify-center flex-col items-center bg-no-repeat bg-cover  sm:h-full"
      >
        <Header />
        <main className="container pb-6 sm:pb-9.25">
          <div className="w-full flex justify-center items-center sm:relative px-3 sm:px-8 lg:px-12 2xl:px-0">
            <div className="w-full flex items-center rounded-xl lg:rounded-3xl bg-[#121B30]">
              <div className="w-full rounded-xl lg:rounded-3xl overflow-hidden">
                <section
                  className="snap-y px-6 py-9 sm:px-12 pb-4 sm:pb-19.5 xl:px-15.25 h-dvh-80 overflow-x-hidden overflow-y-scroll scroll-smooth"
                  id="main"
                >
                  {children}
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
