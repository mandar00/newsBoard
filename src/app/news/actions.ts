'use server'
import prisma from "@/lib/prisma";
import { cache } from "react";


export const fetchNews = cache(async (type: string = "") => {

  // TODO implement cache
  try{    
    const news = await prisma?.news.findMany({
      where: type !== "" ? { type } : {}
    })
    return news
  }catch(error){
    console.log(error)
  }


})