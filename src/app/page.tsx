import Image from "next/image";
import commingSoon from "@/assets/coming-soon.webp"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full h-[80vh] bg-custom-light3-purple">
           <Image src={commingSoon} alt="Comming Soon" fill />
      </div>
      <Link className="w-[15vw] h-[3vw] text-white bg-custom-light2-purple flex items-center justify-center rounded-md shadow-md" href="/news">Go To News Page</Link>
    </div>
  );
}
