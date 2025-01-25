import Card from "@/components/serverComponents/Card/Card";
import { truncateString } from "@/lib/stringUtils";
import { cn } from "@/lib/utils";
import { News } from "@prisma/client";
import Link from "next/link";

interface NewsSidebarProps {
  className?: string;
  title: string;
  news: News[];
}
export default function NewsSidebar({
  className,
  title,
  news,
}: NewsSidebarProps) {
  // TODO improve styling control using external className for elemenrts
  return (
    <div
      className={cn(
        "px-[14px] pt-[24px] bg-white rounded-md shadow-md w-full h-full overflow-hidden",
        className
      )}
    >
      <div className="w-full h-[26px] text-[20px] text-custom-dark1-purple font-bold">
        {title}
      </div>
      <div className="overflow-y-auto no-scrollbar h-full box-border">
        {news.map((newsItem, newsIndex) => {
          return (
            <Link href={`/news/${newsItem.slug}`} key={newsIndex}>
              <Card className="w-full lg:py-[25px] md:py-[16px]  flex gap-3">
                <Card.Image
                  className="relative lg:w-[130px] lg:h-[110px] md:w-[100px] md:h-[60px] "
                  src={newsItem?.imageURL}
                  alt="news banner"
                />
                <Card.Content className="flex flex-col py-2">
                  <Card.Title
                    className="lg:text-[14px] md:text-[10px] text-[10px] font-bold"
                    title={truncateString(newsItem.title, 45)}
                  />
                  <Card.Description className="lg:text-[12px] text-[8px]  font-sans">
                    {truncateString(newsItem.description, 40)}
                  </Card.Description>
                  <Card.DateTime
                    className="text-[11px] w-full text-custom-light1-gray "
                    dateTime={newsItem.createdAt}
                  />
                </Card.Content>
              </Card>
              {newsIndex !== news.length - 1 && (
                <div className="w-full h-[1px] bg-slate-400 "></div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
