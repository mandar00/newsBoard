"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type TabSectionProps = { title: string; type: string };
interface TabsProps {
  tabSectionMenu: TabSectionProps[];
  itemClassName: string;
  ActiveItemclassName: string;
  handleTabChange: (type: string) => void;
  children?: React.ReactNode;
  className?: string;
}
const Tabs = ({
  tabSectionMenu,
  className,
  itemClassName,
  ActiveItemclassName,
  handleTabChange,
  children
}: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = (index: number, type: string) => {
    setActiveIndex(index);
    handleTabChange(type);
  };
  return (
    <>
      <div className={className || ""}>
        {tabSectionMenu.map((tab: TabSectionProps, tabIndex: number) => {
          return (
            <div
              className={cn(
                "h-full cursor-pointer",
                activeIndex === tabIndex ? ActiveItemclassName : itemClassName
              )}
              id={tabIndex.toString()}
              onClick={() => updateActiveIndex(tabIndex, tab.type)}
              key={tabIndex}
            >
              {tab.title}
            </div>
          );
        })}
      </div>
      {children && <div>{children}</div>}
    </>
  );
};
export default Tabs;
