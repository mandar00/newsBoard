import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { navbarLinks } from "@/app/news/constants";

interface NavbarLinksContainerProps {
  className?: string;
}

const NavbarLinksContainer = ({ className }: NavbarLinksContainerProps) => {
  return (
    <>
      <div
        className={cn(
          "hidden md:flex items-center justify-between md:text-[12px] lg:text-[14px]",
          className
        )}
      >
        {
          navbarLinks.map((link,linkIndex)=>{
            return(
              <Link key={linkIndex} className="flex items-center md:gap-1 gap-0" href={link.link}>
              {link.title} <ChevronDown className="lg:h-4 lg:w-4 md:h-2 md:w-2" />
            </Link>
            )
          })
        }
      </div>
    </>
  );
};
export default NavbarLinksContainer;
