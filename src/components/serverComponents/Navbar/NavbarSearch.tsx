import { Input } from "@/components/ui/input";
import Image from "next/image";
import searchIcon from "@/assets/searchIcon.svg";

const NavbarSearch = () => {
  return (
    <div className="flex items-center  h-[2.3vw] md:w-[23.3vw]">
      <Image
        className="m-[0.6vw]"
        src={searchIcon}
        alt="search"
        width={20}
        height={20}
      />
      <Input
        className=" hidden focus-visible:ring-0 border-none shadow-none lg:placeholder:text-[14px] md:placeholder:text-[12px]  md:flex"
        id="q"
        name="q"
        placeholder="Search for Colleges Exams Courses and More..."
      />
    </div>
  );
};
export default NavbarSearch;
