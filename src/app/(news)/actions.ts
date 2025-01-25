'use server'
import prisma from "@/lib/prisma";


export const fetchNews = async (type: string = "") => {
  try{
    const news = await prisma?.news.findMany({
      where: type !== "" ? { type } : {}
    })
    return news
  }catch(error){
    console.log(error)
  }


}