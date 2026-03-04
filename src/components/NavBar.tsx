"use client";

import Image from "next/image";
import FullLogo from "../../public/image/full-logo.png";
import Logo from "../../public/image/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/constants";
import { LucideMenu, X } from "lucide-react";

function NavBar() {
    const [scroll, setScroll] = useState(false);
    const [active, setActive] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleHashChange = () => {
            setActive(window.location.hash);
        };

        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <>
            {/* Navbar */}
            <div
                className={`w-full flex justify-between items-center z-40 px-4 sm:px-6 md:px-8 xl:px-12 py-4
        ${scroll ? "sticky top-0 bg-black/50 backdrop-blur-md" : "absolute"}
        `}
            >
                {/* Logo */}
                <div>
                    <Image
                        src={FullLogo}
                        className="hidden md:flex w-auto md:h-[34px] xl:h-[36px]"
                        alt="logo"
                    />
                    <Image
                        src={Logo}
                        className="flex md:hidden w-auto h-[32px] sm:h-[38px]"
                        alt="logo"
                    />
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex">
                    <ul className="flex gap-4 bg-white/20 border border-white/40 backdrop-blur-md rounded-full p-1">
                        {navLinks.map((link) => {
                            const isActive = active === link.href;

                            return (
                                <li
                                    key={link.href}
                                    className={`px-4 py-2 rounded-full transition ${isActive
                                        ? "bg-white text-black"
                                        : "text-white hover:bg-white/30"
                                        }`}
                                >
                                    <Link href={link.href}>{link.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <button className="hidden lg:block button bg-white">
                        Book An Appointment
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white bg-white/20 border border-white/40 backdrop-blur-md p-2 rounded-full"
                        onClick={() => setMenuOpen(true)}
                    >
                        <LucideMenu className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center lg:hidden">

                    {/* Close Button */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-6 right-6 text-white bg-[rgba(255,255,255,.1)] bg-blur-xs p-2 rounded-full border-1 border-[rgba(255,255,255,.2)]"
                    >
                        <X size={20} />
                    </button>

                    {/* Mobile Links */}
                    <ul className="flex flex-col gap-6 text-center">
                        {navLinks.map((link) => {
                            const isActive = active === link.href;

                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`text-md px-6 py-2 rounded-full transition ${isActive
                                            ? "bg-white text-black"
                                            : "text-white hover:bg-white/20"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <button className="mt-8 bg-white text-black button">
                        Book Appointment
                    </button>
                </div>
            )}
        </>
    );
}

export default NavBar;