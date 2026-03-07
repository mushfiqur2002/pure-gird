"use client";

import Image from "next/image";
import FullLogo from "../../public/image/full-logo.png";
import Logo from "../../public/image/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/constants";
import { LucideMenu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        className="lg:hidden text-white bg-white/20 border border-white/40 backdrop-blur-md p-2 rounded-full"
                        onClick={() => setMenuOpen(true)}
                    >
                        <LucideMenu className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.button>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center lg:hidden"
                    >

                        {/* Close Button */}
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-6 right-6 text-white bg-[rgba(255,255,255,.1)] bg-blur-xs p-2 rounded-full border-1 border-[rgba(255,255,255,.2)]"
                        >
                            <X size={20} />
                        </motion.button>

                        {/* Mobile Links */}
                        <motion.ul
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1 }
                                }
                            }}
                            className="flex flex-col gap-6 text-center"
                        >
                            {navLinks.map((link) => {
                                const isActive = active === link.href;

                                return (
                                    <motion.li
                                        key={link.href}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            show: { opacity: 1, y: 0 }
                                        }}
                                    >
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
                                    </motion.li>
                                );
                            })}
                        </motion.ul>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 bg-white text-black button"
                        >
                            Book Appointment
                        </motion.button>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default NavBar;