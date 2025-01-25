"use client";
import { tabSectionMenu } from "../constants";
import Tabs from "@/components/clientComponents/Tabs/Tabs";
import { useEffect, useState } from "react";
import { fetchNews } from "../actions";
import { News } from "@prisma/client";
import Card from "@/components/serverComponents/Card/Card";

const NewsTab = () => {
  const [tabsSectionData, setTabsSectionData] = useState<News[] | undefined>(
    []
  );

  const getAllNews = async () => {
    const response = await fetchNews();
    setTabsSectionData(response);
  };

  useEffect(() => {
    getAllNews();
  }, []);

  const handleTabChange = (type: string) => {};

  return (
    <>
      <Tabs
        tabSectionMenu={tabSectionMenu}
        className="w-[60%] mx-auto flex items-center justify-evenly bg-white rounded-[16px] text-[16px] shadow-md px-[3vw] font-medium "
        itemClassName="text-black "
        ActiveItemclassName="text-custom-dark1-purple border-solid border-b-2 border-custom-dark1-purple py-[24px]"
        handleTabChange={handleTabChange}
      >
        <div className="w-full grid grid-cols-4 gap-4">
          {tabsSectionData && (
            <Card>
              <Card.Image
                src={tabsSectionData[0].imageURL}
                alt={tabsSectionData[0].title}
              />
            </Card>
          )}
        </div>
      </Tabs>
    </>
  );
};
export default NewsTab;
