import Image from "next/image";
import rightArrow from "@/assets/rightArrow.svg";
import Card from "@/components/serverComponents/Card/Card";
import Markdown from "@/components/Markdown";
import Link from "next/link";


const subMenuNavigation = [
  "All News",
  "Admission Alert",
  "College News",
  "Exam News",
  "Latest News",
];
export default function Home() {
  return (
    <div className="px-[6.3vw] py-[32px] bg-custom-light3-purple">

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
      <main className="flex items-center justify-between mt-[32px]">
        <Card className="w-full md:w-[70%] lg:h-[721px] md:h-[550px] h-[400px] py-5 rounded-md shadow-md bg-white box-content ">
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
              <Link className="text-custom-dark1-purple font-bold" href="/">READ</Link>
            </span>
          </Card.Description>
        </Card>

        <aside className=" hidden md:flex w-[25%] bg-black">s</aside>
      </main>

      {/* Featured Section */}
      <div className="lg:mt-[54px]">
        
      </div>

    </div>
  );
}
