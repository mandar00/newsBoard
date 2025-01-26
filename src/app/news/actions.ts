'use server'
import { placeHolderNews } from "@/data/placeholderNews";
import { NewsConfig } from "@/types";
import { cache } from "react";



export const fetchNews = cache(async (type: string = "") => {
  if(type === "") return placeHolderNews
  // TODO implement cache
  try {
    const news = placeHolderNews.filter((newsItem:NewsConfig)=>{
      return newsItem.type === type
    })
    return news
  } catch (error) {
    console.log(error)
  }


})


export const getNewsByTitle = cache(async(query: string) => {
  const searchArray = query
    ?.split(" ")
    .filter((word) => word.length > 0)

  const news = placeHolderNews.map((newsItem: NewsConfig) => {
    if (searchArray.some(str => newsItem.title.toLowerCase().includes(str.toLowerCase()))) {
      return { title: newsItem.title, slug: newsItem.slug }
    }
  }
  );

  return news
})