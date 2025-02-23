

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import clsx from "clsx";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Bootcamp", href: "/bootcamp" },
    { name: "Program", href: "/program" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const Breadcrumb = ({ title, description }: { title: string; description?: string }) => {
    return (
        <div
            className="relative w-full h-[400px] pt-[150px]  bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
            style={{ backgroundImage: "url('/cars.webp')" }}
        >
            <div className="bg-gray-900/60 text-center flex flex-col justify-center items-center p-6">
                <h1 className="text-4xl font-bold">{title}</h1>
                {description && <p className="mt-2 text-lg max-w-2xl">{description}</p>}
                <div className="mt-4 flex gap-4">
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">
                        <Link href="/apply">Apply Now</Link>
                    </Button>
                    <Button className="bg-gray-600 text-white hover:bg-gray-700">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>

        </div>
    );
};

const Header = () => {
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
                className={clsx(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                    isScrolled ? "bg-white shadow-lg" : "bg-transparent"
                )}
            >
                <div className="mx-auto max-w-7xl p-6 lg:px-8 flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link href="/">
                        <Image src="/logo2.webp" alt="Logo" width={120} height={50} className="w-10 h-10" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-6 p-2 bg-white rounded-lg">
                        {navLinks.map(({ name, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className={clsx(
                                    "relative text-lg font-medium transition-all duration-300",
                                    pathname === href
                                        ? "text-green-600 scale-105 "
                                        : "text-sky-700 hover:text-blue-500 hover:scale-105"
                                )}
                            >
                                {name}
                            </Link>
                        ))}
                    </nav>

                    {/* Apply Button (Desktop) */}
                    <div className="hidden md:block">
                        <Button className="bg-blue-600 text-white hover:bg-blue-700">
                            <Link href="/apply">Apply to Bootcamp</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Breadcrumb Section */}
            <Breadcrumb title={pathname.replace("/", "").toUpperCase() || "HOME"} description="Explore our programs and services to find the best fit for your needs." />

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="fixed top-0 right-0 w-full z-9999 h-full bg-white shadow-lg transition-transform duration-300 p-6"
                >
                    {/* Close Button */}
                    <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
                        <X size={28} />
                    </button>

                    <nav className="mt-12 flex flex-col gap-6 ">
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
            )}
        </>
    );
};

export default Header;
