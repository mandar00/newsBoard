import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

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
        <Link className="flex items-center md:gap-1 gap-0" href="/news">
          University <ChevronDown className="lg:h-4 lg:w-4 md:h-2 md:w-2" />
        </Link>
        <Link className="flex items-center md:gap-1 gap-0 " href="/news">
          College <ChevronDown className="lg:h-4 lg:w-4 md:h-2 md:w-2" />
        </Link>
        <Link className="flex items-center md:gap-1 gap-0" href="/news">
          Exams <ChevronDown className="lg:h-4 lg:w-4 md:h-2 md:w-2" />
        </Link>
        <Link className="flex items-center md:gap-1 gap-0" href="/news">
          Cources <ChevronDown className="lg:h-4 lg:w-4 md:h-2 md:w-2" />
        </Link>
        <Link className="flex items-center md:gap-1 gap-0" href="/news">
          News <ChevronDown className="lg:h-4 lg:w-4 md:h-2 md:w-2" />
        </Link>
      </div>
    </>
  );
};
export default NavbarLinksContainer;
