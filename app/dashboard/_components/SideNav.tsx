"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, IndianRupee, Settings, Menu, X } from "lucide-react";
import UsageTrack from "./UsageTrack";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const MenuList = [
    { name: "Home", icon: HomeIcon, path: "/dashboard" },
    { name: "Billing", icon: IndianRupee, path: "/dashboard/billing" },
    { name: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];

  const isActive = (menuPath: string) => path === menuPath;

  return (
    <>
      <div className="md:hidden p-4 bg-black flex justify-between items-center shadow-md">
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="text-xl font-bold text-white">Genova.ai</span>
        </Link>
        <Menu
          className="text-white h-6 w-6 cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-black text-white z-50 transition-transform duration-300 flex flex-col shadow-lg border-r border-gray-700
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <Image src="/logo.jpg" alt="logo" width={160} height={160} />
          <X
            className="h-6 w-6 cursor-pointer md:hidden"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          <nav className="space-y-2">
            {MenuList.map((menu, idx) => (
              <Link href={menu.path} key={idx}>
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200
                    ${
                      isActive(menu.path)
                        ? "bg-gray-700 text-white"
                        : "hover:bg-gray-800 text-gray-300 hover:text-white"
                    }`}
                >
                  <menu.icon className="h-5 w-5" />
                  <span className="text-base font-medium">{menu.name}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-5 border-t border-gray-700">
          <UsageTrack />
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SideNav;
