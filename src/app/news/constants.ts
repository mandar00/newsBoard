import { University,School,NotebookPen,BookOpenCheck,Newspaper} from "lucide-react";

export const subMenuNavigation = [
  "All News",
  "Admission Alert",
  "College News",
  "Exam News",
  "Latest News",
];


export const tabSectionMenu = [
  { "title": "All News", "type": "" },
  { "title": "College News", "type": "college" },
  { "title": "Exam News", "type": "exam" },
  { "title": "Admission 2024", "type": "admission" }
]

export const navbarLinks=[
  {
    title:"University",
    link:"/news",
    icon:University
  },
  {
    title:"College",
    link:"/news",
    icon:School
  },
  {
    title:"Exams",
    link:"/news",
    icon:NotebookPen
  },
  {
    title:"Cources",
    link:"/news",
    icon:BookOpenCheck
  },
  {
    title:"News",
    link:"/news",
    icon:Newspaper
  },
]