import { relativeDateTime } from "@/lib/DateTimeUtils";
import { Clock } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Markdown from "@/components/Markdown";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};
const Card = ({ children, className }: CardProps) => {
  return <div className={className}>{children}</div>;
};

Card.Image = function CardImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Image src={src} alt={alt} fill />
    </div>
  );
};

Card.Title = function CardTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return <div className={className}>{title}</div>;
};

Card.Description = function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: string | React.ReactNode;
}) {
  return (
    <div className={className}>
      {typeof children === "string" ? (
        <Markdown>{children}</Markdown>
      ) : (
        children
      )}
    </div>
  );
};

Card.Content = function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}


Card.DateTime = function CardDateTime({
  dateTime,
  displayTime = false,
  className,
}: {
  dateTime: Date;
  displayTime?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("flex items-center justify-start gap-1", className)}>
      <Clock className="md:w-[1.1vw] w-[10px] " />
      <span className="">{relativeDateTime(dateTime, displayTime)}</span>
    </span>
  );
};
export default Card;
