import { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { HomeHeaderMobile } from "./HomeHeaderMobile";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

export function HomeLayout({ children }: Props) {
  return (
    <>
      <HomeHeaderMobile />
      <div
        className="flex justify-center flex-col items-center sm:h-full"
      >
        <Image
          src="/BG.jpg"
          alt="Background"
          fill
          priority
          fetchPriority="high"
          className="object-cover sm:block hidden" 
        />
        <Header />
        <main className="container pt-0">
          <div className="w-full flex justify-center items-center sm:relative px-3 sm:px-8 lg:px-12 2xl:px-0">
            <Sidebar />
            <div className="w-full flex items-center rounded-xl lg:rounded-3xl bg-[#121B30]">
              <div className="w-full rounded-xl lg:rounded-3xl overflow-hidden">
                <section
                  className="snap-y p-5 sm:pl-12 xl:pl-22.5 pb-19.5 xl:pr-15.25 h-dvh-80 overflow-x-hidden overflow-y-scroll scroll-smooth"
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
