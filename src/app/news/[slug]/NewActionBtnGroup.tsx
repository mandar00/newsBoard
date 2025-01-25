import { cn } from "@/lib/utils";

interface NewsActionBtnGroupProps {
  className?: string;
}
export default function NewsActionBtnGroup({
  className,
}: NewsActionBtnGroupProps) {
  return (
    <div className={cn("flex w-full md:space-y-4", className)}>
      <button className="text-white w-[30%] md:w-full flex items-center justify-center bg-custom-dark1-purple md:h-[48px] h-[30px] lg:text-[16px] md:text-[14px] text-[10px] rounded-md shadow-md font-semibold">
        Apply Now
      </button>
      <button className="flex items-center justify-center w-[30%] md:w-full  bg-custom-purple-gradient2 md:h-[48px] h-[30px] lg:text-[16px] md:text-[14px] text-[10px] rounded-md shadow-md font-semibold">
        Download Brochure
      </button>
    </div>
  );
}
