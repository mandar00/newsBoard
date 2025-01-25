import { navbarLinks } from "@/app/news/constants";

export default function FooterNav(){
  return(
    <div className="flex items-center justify-evenly md:hidden z-10 fixed w-full bottom-0 h-[50px] bg-lime-300 py-2 px-5">
      {
        navbarLinks.map((link,linkIndex)=>{
          return(
            <></>
          )
        })
      }
    </div>
  )
}