import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import NavbarSearch from "@/components/serverComponents/Navbar/NavbarSearch";
import NavbarLinksContainer from "./NavbarLinksContainer";

const Navbar = () => {
  return (
    <>
      <header className="shadow-sm">
        <nav className="flex items-center justify-between w-full  h-[69px] px-[6.3vw]  ">
          <div className="flex items-center space-x-[32px]">
            <Link href="/">
              <Image width={98} height={24} src={logo} alt="Logo" />
            </Link>
            <NavbarLinksContainer className="md:w-[306px] lg:w-[496px] h-[21px]"/>
          </div>
          <NavbarSearch />
        </nav>
      </header>
    </>
  );
};
export default Navbar;
