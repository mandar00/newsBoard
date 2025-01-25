import { navbarLinks } from "@/app/news/constants";
import Link from "next/link";

export default function FooterNav(){
  return(
    <div className="flex items-center justify-evenly md:hidden z-10 fixed w-full bottom-0 h-[60px] bg-white py-2 px-5 shadow-md">
      {
        navbarLinks.map((link,linkIndex)=>{
          return(
            <Link href={link.link} key={linkIndex} className="flex flex-col items-center justify-center sm:text-[12px] text-[10px]">
              <link.icon  className="sm:w-[18px] w-[15px]"/>
              {link.title}
            </Link>
          )
        })
      }
    </div>
  )
}