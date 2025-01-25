import { cache } from "react";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import Card from "@/components/serverComponents/Card/Card";
import NewsSidebar from "../(components)/NewsSidebar";
import { dummyCardData } from "@/data/dummyCardData";
import { News as NewsConfig } from "@prisma/client";
import NewsActionBtnGroup from "./NewActionBtnGroup";
import { Metadata } from "next";

interface IndividualNewsProps {
  params: {
    slug: string;
  };
}
const getNews = cache(async (slug: string) => {
  const news = await prisma.news.findUnique({
    where: { slug: decodeURIComponent(slug) },
  });

  if (!news) notFound();

  return news;
});


// cache existing pages 
// ?? facing issues here skipping  for now due to time constraits
// export async function generateStaticParams() {
//   const news = await prisma.news.findMany({
//     where: {}, // Ensure no empty slugs
//     select: { slug: true },
//   });
//   console.log(news)
//   return news
//     .filter((item) => item?.slug) // Ensure 'slug' exists and is truthy
//     .map(({ slug }) => slug);}

export async function generateMetadata({
  params: { slug },
}: IndividualNewsProps): Promise<Metadata> {
  const news = await getNews(slug);

  return {
    title: news.title,
  };
}



export default async function IndividualNews({ params }: IndividualNewsProps) {
  const { slug } = await params;
  const news = await getNews(slug);
  return (
    <div className="px-[6.3vw] py-[70px] bg-custom-purple-gradient1 ">
      {news && (
        <main className="flex flex-col md:flex-row items-start justify-between md:mt-[32px] mt-[15px] ">
          <Card className="w-full md:w-[52vw]  h-fit py-5 rounded-md shadow-md bg-white  ">
            <Card.Image
              src={news.imageURL}
              alt="news banner"
              className="relative w-full lg:h-[446px] md:h-[300px] h-[200px]"
            />
            <Card.Title
              className="lg:text-[30px] md:text-[20px] text-[15px] lg:mx-5 md:mx-3 mx-2 mt-3 font-bold  text-custom-dark1-blue"
              title={news.title}
            />
            <Card.DateTime
              dateTime={news.createdAt}
              displayTime
              className="text-custom-light2-purple  lg:mx-5 md:mx-3 mx-2 lg:text-[14px] md:text-[10px] text-[10px]"
            />
            <Card.Description className="lg:mx-5 md:mx-3 mx-2   lg:mt-[24px] md:mt-[18px] lg:text-[14px]  text-[10px]">
              {news.description.concat(news.description)}
            </Card.Description>
          </Card>

          <aside className="hidden md:flex flex-col w-[28vw]">
            <NewsActionBtnGroup className="flex-col" />
            <div className="flex flex-col space-y-3 my-[32px]">
              <div className="w-full h-[106px] text-[13.5px] rounded-md shadow-md text-white bg-custom-light4-purple flex items-center justify-center">
                ADVERTISEMENT BANNER
              </div>
              <div className="w-full h-[106px] text-[13.5px] rounded-md shadow-md text-white bg-custom-light1-blue flex items-center justify-center">
                ADVERTISEMENT BANNER
              </div>
              <div className="w-full h-[106px] text-[13.5px] rounded-md shadow-md text-white bg-custom-light2-yellow flex items-center justify-center">
                ADVERTISEMENT BANNER
              </div>
            </div>
            <NewsSidebar title="NEWS" news={dummyCardData as NewsConfig[]} />
          </aside>
          <NewsActionBtnGroup className=" flex md:hidden items-center justify-around mt-5" />
        </main>
      )}
    </div>
  );
}
