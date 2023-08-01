"use client";
import { useState } from "react";
import {
  CalendarDaysIcon,
  ChartBarIcon,
  PrinterIcon,
  ServerStackIcon,
  FolderIcon,
  GlobeAmericasIcon,
  UserGroupIcon,
  UserCircleIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

interface CardProps {
  Open: boolean;
  children: React.ReactNode;
}
export default function Sidebar({ Open, children }: CardProps) {
  const Menus = [
    { title: "Dashboard", src: CalendarDaysIcon },
    { title: "Inbox", src: ChartBarIcon },
    { title: "Accounts", src: PrinterIcon, gap: true },
    { title: "Schedule ", src: ServerStackIcon },
    { title: "Search", src: FolderIcon },
    { title: "Analytics", src: UserGroupIcon },
    { title: "Files ", src: UserCircleIcon, gap: true },
    { title: "Setting", src: GlobeAmericasIcon },
  ];
  const [open, setOpen] = useState(Open);
  console.log(open);

  return (
    <div className="flex z-50 h-screen">
      <div
        className={` ${
          open ? "w-72 rounded-xl" : "w-20 rounded-xl"
        } bg-gray-900 h-screen p-5  pt-8 relative duration-300`}
      >
        <button
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          <ArrowLeftIcon className="h-5 w-5 text-white font-bold" />
        </button>
        <div className="flex gap-x-4 items-center">
          <GlobeAmericasIcon className="h-6 w-6 text-white" />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex font-heading font-bold hover:bg-gray-300 hover:text-black rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-lg items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <Menu.src className="h-6 w-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold text-black">{children}</h1>
      </div>
    </div>
  );
}
