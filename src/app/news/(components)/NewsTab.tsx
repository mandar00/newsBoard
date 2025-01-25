"use client";
import { tabSectionMenu } from "../constants";
import Tabs from "@/components/clientComponents/Tabs/Tabs";
import { useEffect, useState } from "react";
import { fetchNews } from "../actions";
import Card from "@/components/serverComponents/Card/Card";
import { truncateString } from "@/utils/stringUtils";
import Markdown from "@/components/Markdown";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NewsConfig } from "@/types";

const NewsTab = () => {
  const [tabsSectionData, setTabsSectionData] = useState<NewsConfig[] | undefined>(
    []
  );
  const [loading, setLoading] = useState(false);

  const getNews = async (type: string = "") => {
    try {
      setLoading(true);
      const response = await fetchNews(type);
      setTabsSectionData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      {tabsSectionData && tabsSectionData.length === 0 && loading && (
        <Loader2 className="animate-spin m-auto w-[5vw]" />
      )}
      {tabsSectionData && tabsSectionData.length > 0 && (
        <Tabs
          tabSectionMenu={tabSectionMenu}
          className="w-[100%] lg:w-[60%] md:w-[75%] mx-auto flex items-center justify-evenly bg-white rounded-[16px] shadow-md font-medium  
        lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]  
        lg:px-[3vw] md:px-[2vw] sm:px-[1vw] px-[0.5vw] "
          itemClassName="text-black "
          ActiveItemclassName="text-custom-dark1-purple border-solid border-b-2 border-custom-dark1-purple 
        lg:py-[24px] md:py-[18px] py-[15px]"
          handleTabChange={getNews}
        >
          {/* // TODO implement a loading overlay to contnet shift */}
          <div className={cn(loading ? "visible" : "hidden")}>
            <Loader2 className={cn("animate-spin m-auto w-[5vw]")} />
          </div>
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-[46px]">
            {tabsSectionData.map((news, index) => {
              return (
                <Link href={`/news/${news.slug}`} key={index}>
                  <Card className="bg-white rounded-md shadow-md h-[351px] p-[12px] relative">
                    <Card.Image
                      src={news.imageURL}
                      alt={news.title}
                      className=" relative w-full h-[60%] sm:h-[50%]  mb-[20px]"
                    />
                    <Card.Title
                      className="md:text-[14px] text-[15px] font-bold"
                      title={truncateString(news.title, 45)}
                    />
                    <Card.Description className=" text-[13px]  font-sans">
                      {truncateString(news.description, 40)}
                    </Card.Description>
                    <Card.DateTime
                      className="absolute bottom-3 text-[11px] w-full text-custom-light1-gray "
                      dateTime={news.createdAt}
                    />{" "}
                  </Card>
                </Link>
              );
            })}
          </div>
        </Tabs>
      )}
    </>
  );
};
export default NewsTab;
