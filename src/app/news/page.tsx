import Image from "next/image";
import rightArrow from "@/assets/rightArrow.svg";
import Card from "@/components/serverComponents/Card/Card";
import Markdown from "@/components/Markdown";
import Link from "next/link";
import { dummyCardData } from "@/data/dummyCardData";
import { truncateString } from "@/lib/stringUtils";
import NewsTab from "@/app/news/(components)/NewsTab";
import { subMenuNavigation } from "@/app/news/constants";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import NewsSidebar from "./(components)/NewsSidebar";
import { News as NewsConfig } from "@prisma/client";


export default function News() {
  return (
    <div>
      <div className="px-[6.3vw] py-[99px] bg-custom-light3-purple">
        {/* Sub Menue Section */}
        <section className=" hidden md:flex  ">
          <nav className="w-full h-[28px] flex items-center justify-between">
            <span className="w-[38.2vw] hidden md:flex items-center justify-between md:text-[9px] lg:text-[11px] bg-custom-light1-purple px-5 py-1 box-content rounded-md border- border-2">
              <p className="flex gap-1">
                ⚡<span className="font-bold">Trending Now:</span>
                CBSE Class 12 Physics Question Paper 2024 Set 3 ️
              </p>
              <span className="flex gap-2 text-custom-dark1-purple font-bold">
                Check Now <Image src={rightArrow} alt="right Arrow" />
              </span>
            </span>
            <div className="flex gap-2">
              {subMenuNavigation.map((nav, navIndex) => {
                return (
                  <span
                    key={navIndex}
                    className="flex items-center py-1 px-2 md:text-[9px] lg:text-[11px] bg-white border-solid border-gray-200 border-2 rounded-md"
                  >
                    {nav}
                  </span>
                );
              })}
            </div>
          </nav>
        </section>

        {/* 
    Hero section with Sidebar

    Hardcoding to hero section for now
    can be fetched using a different endpoint later
   */}
        <main className="flex items-start justify-between md:mt-[32px] mt-[15px]">
          <Card className="w-full md:w-[52.5vw] lg:h-[721px] md:h-[550px] h-[400px] py-5 rounded-md shadow-md bg-white ">
            <Card.Image
              src="https://0ivjzaofksjyombd.public.blob.vercel-storage.com/college1-q0edBTQoiG1OeBztSgNegB51mwX8MU.png"
              alt="hero-banner"
              className="relative w-full h-[70%]"
            />
            <Card.Title
              className="lg:text-[30px] md:text-[20px] text-[15px] mx-5 font-bold  text-custom-dark1-blue"
              title="Chitkara University MBA Admission Open; Check Direct List..."
            />
            <Card.DateTime
              dateTime={new Date("2025-01-24T03:16:48.280Z")}
              displayTime
              className="text-custom-light2-purple  mx-5  lg:text-[14px] md:text-[10px] text-[10px]"
            />
            <Card.Description className="mx-5 lg:mt-[24px] md:mt-[18px] lg:text-[14px]  text-[10px]">
              <span>
                <Markdown>
                  New Delhi: The State Common Entrance Test Cell, Government of
                  Maharashtra, has issued the admit cards for the March, MHMCT,
                  BEd, MEd, and....
                </Markdown>
                {/* hardcoding for now */}
                <Link className="text-custom-dark1-purple font-bold" href="/news/BITS_Pilani_Expands_International_Programs_for_2025_Admissions">
                  READ
                </Link>
              </span>
            </Card.Description>
          </Card>

          <aside className=" hidden md:flex w-[28vw] lg:h-[721px] md:h-[550px]">
          <NewsSidebar
            title="THE BIG STORIES"
            news={dummyCardData as NewsConfig[]}
          />
          </aside>
        </main>

        {/* Featured Section */}
        <div className="lg:mt-[54px] md:mt-[40px] mt-[30px] p-[24px] border-solid border-custom-dark1-yellow border-2 rounded-md bg-custom-light1-yellow  w-full ">
          <i className="text-custom-dark2-yellow lg:text-[20px] md:text-[15px]">
            FEATURED NEWS
          </i>
          <div className="flex  justify-between overflow-x-auto no-scrollbar">
            {dummyCardData.map((card, cardIndex) => {
              return (
                <Card key={cardIndex} className=" min-w-[270px]  ">
                  <Card.Title
                    className="lg:text-[14px] md:text-[12px] text-[10px] font-bold"
                    title={truncateString(card.title, 45)}
                  />
                  <Card.Description className="lg:text-[12px] text-[10px]  font-sans">
                    {truncateString(card.description, 40)}
                  </Card.Description>
                  <Card.DateTime
                    className="text-[11px] w-full text-custom-light1-gray "
                    dateTime={new Date()}
                  />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <div className="px-[6.3vw] py-[45px] bg-custom-purple-gradient1">
        <Suspense fallback={<Loader2 className="animate-spin m-auto w-[5vw]" />}>
          <NewsTab />
        </Suspense>
      </div>
    </div>
  );
}
