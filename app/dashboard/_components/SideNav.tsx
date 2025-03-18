"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HomeIcon, IndianRupee, Settings, Menu, X } from "lucide-react";
import Link from "next/link";
import UsageTrack from "./UsageTrack";

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();

    const MenuList = [
        { name: "Home", icon: HomeIcon, path: "/dashboard" },
        { name: "Billing", icon: IndianRupee, path: "/dashboard/billing" },
        { name: "Settings", icon: Settings, path: "/dashboard/settings" },
    ];

    return (
        <>
            <div className="md:hidden relative p-4 bg-black flex justify-between items-center shadow-md">
                <Link href="/dashboard">
                    <Image src="/logo.jpg" alt="logo" width={50} height={50} className="rounded-lg" />
                </Link>
                <Menu className="text-white cursor-pointer" onClick={() => setIsOpen(true)} />
            </div>

            <div className={`fixed top-0 left-0 h-screen bg-black p-5 shadow-md border-r transition-transform duration-300 z-50
                ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-64 flex flex-col`}>

                <div className="flex justify-between items-center border-b pb-4">
                    <Image src="/logo.jpg" alt="logo" width={180} height={180} />
                    <X className="text-white md:hidden cursor-pointer" onClick={() => setIsOpen(false)} />
                </div>

                <hr className="text-white my-6 border" />

                <div className="flex-1 mt-3">
                    {MenuList.map((menu, index) => (
                        <Link href={menu.path} key={index}>
                            <div className={`flex gap-3 items-center hover:bg-gray-700 hover:text-white rounded-lg cursor-pointer mb-2 p-3 text-white 
                                ${path === menu.path ? "bg-gray-700 text-white" : ""}`}>
                                <menu.icon className="h-6 w-6" />
                                <h2 className="text-lg">{menu.name}</h2>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-auto p-3">
                    <UsageTrack />
                </div>
            </div>

            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40" onClick={() => setIsOpen(false)}></div>}
        </>
    );
};

export default SideNav;
