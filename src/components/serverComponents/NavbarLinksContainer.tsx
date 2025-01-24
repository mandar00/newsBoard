import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface NavbarLinksContainerProps {
  className?: string;
}

const NavbarLinksContainer = ({ className }: NavbarLinksContainerProps) => {
  return (
    <>
      <div className={cn("hidden md:flex items-center justify-between text-[14px]", className)}>
        <Link className="flex items-center gap-1" href="/">
          University <ChevronDown className="h-4 w-4" />
        </Link>
        <Link className="flex items-center gap-1" href="/">
          College <ChevronDown className="h-4 w-4" />
        </Link>
        <Link className="flex items-center gap-1" href="/">
          Exams <ChevronDown className="h-4 w-4" />
        </Link>
        <Link className="flex items-center gap-1" href="/">
          Cources <ChevronDown className="h-4 w-4" />
        </Link>
        <Link className="flex items-center gap-1" href="/">
          News <ChevronDown className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
};
export default NavbarLinksContainer;
