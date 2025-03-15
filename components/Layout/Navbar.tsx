

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ui/theme-toggle";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Bootcamp", href: "/bootcamp" },
    { name: "Program", href: "/program" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];



interface HeaderProp {
    children?: React.ReactNode
}
const Header = ({children}:HeaderProp) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "sticky top-[0px] dark:bg-gray-100 dark:text-black bg-white left-0 w-full z-50 transition-all duration-300 back-drop-filter-[10px]",
                    isScrolled ? "bg-white shadow-lg" : "bg-black",
                    isScrolled ? "text-blue-400" : "text-white"
                   
                )}
            >
                <div className="mx-auto max-w-7xl p-6 lg:px-8 flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo2.webp" alt="Logo" width={120} height={50} className="w-10 h-10" />
                        <p className = "text-3xl font-bold uppercase">SmarTech</p>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-6 p-2 px-4 border-[2px] border-yellow-500 rounded-full ">
                        {navLinks.map(({ name, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    "relative text-lg font-medium transition-all duration-300",
                                    pathname === href
                                        ? "text-green-600 scale-105"
                                        : " hover:text-blue-500 hover:scale-105"
                                )}
                            >
                                {name}
                            </Link>
                        ))}
                    </nav>

                    {/* Apply Button (Desktop) */}
                    <div className="hidden md:flex items-center gap-2 ">
                        <Button className="bg-blue-600 dark:bg-yellow-700 text-white hover:bg-blue-700">
                            <Link href="/apply">Apply to Bootcamp</Link>
                        </Button>

                                <ThemeToggle />
                     
                    </div>

                    {/* Mobile Menu Button */}
                    <button  onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black text-2xl ">
                        {isOpen ? <X size={28} /> : <Menu size={38} className={cn( isScrolled? "text-black" : "text-gray-200"  )} />}
                    </button>
                </div>
            </header>

            {/* Breadcrumb Section */}
           <div className="">
            {children}
           </div>

            {/* Mobile Menu with Smooth Animation */}
            <div
                className={clsx(
                    "fixed top-0 right-0 w-full h-auto bg-white shadow-lg transition-transform duration-300 ease-in-out transform p-6 z-[9999]",
                    isOpen ? "-translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                )}
            >
                {/* Close Button */}
                <Link href="/">
                        <Image src="/logo2.webp" alt="Logo" width={120} height={50} className="w-10 h-10 absolute top-4 left-4" />
                    </Link>
                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
                    <X size={28} />
                </button>

                <nav className="mt-12 flex flex-col gap-6">
                    {navLinks.map(({ name, href }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className={clsx(
                                "text-lg font-medium transition-all duration-300",
                                pathname === href
                                    ? "text-blue-600 scale-105"
                                    : "text-gray-700 hover:text-blue-500 hover:scale-105"
                            )}
                        >
                            {name}
                        </Link>
                    ))}
                </nav>

                {/* Apply Button (Mobile) */}
                <div className="mt-6">
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                        <Link href="/apply">Apply to Bootcamp</Link>
                    </Button>
                </div>
               
            </div>
        </>
    );
};

export default Header;

