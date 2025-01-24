import { relativeDateTime } from "@/lib/DateTimeUtils";
import { Clock } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
  padAfter = 0,
  className,
}: {
  title: string;
  padAfter?: number;
  className?: string;
}) {
  return <div className={className}>{title.padEnd(padAfter, ".")}</div>;
};

Card.Description = function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={className}>{children}</div>;
};

Card.DateTime = function CardDateTime({
  dateTime,
  displayTime = false,
  className
}: {
  dateTime: Date;
  displayTime?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("flex items-center justify-start gap-1" ,className)}>
      <Clock className="w-[1vw] " />
      <span className="">{relativeDateTime(dateTime, displayTime)}</span>
    </span>
  );
};
export default Card;
