'use server'
import prisma from "@/lib/prisma";
import { cache } from "react";


export const fetchNews = cache(async (type: string = "") => {

  // TODO implement cache
  try {
    const news = await prisma?.news.findMany({
      where: type !== "" ? { type } : {}
    })
    return news
  } catch (error) {
    console.log(error)
  }


})


export const getNewsByTitle = cache(async (query: string) => {
  const searchString = query
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" & ");

    const news = await prisma.news.findMany({
      where: {
        title: {
          search: searchString,
          mode: 'insensitive'
        }
      },
      select:{
        title:true,
        slug:true
      }
    });

    return news
})