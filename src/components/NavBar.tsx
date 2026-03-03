"use client"

import Image from "next/image"
import FullLogo from "../../public/image/full-logo.png"
import IconLogo from "../../public/image/logo.png"
import Link from "next/link"
import { useEffect, useState } from "react"
import { navLinks } from "@/constants"



function NavBar() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    console.log(scroll);


    const [active, setActive] = useState("");

    useEffect(() => {
        const handleHashChange = () => {
            setActive(window.location.hash);
        };

        handleHashChange(); // initial check
        window.addEventListener("hashchange", handleHashChange);

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <div className={`w-full h-[auto] top-0 flex justify-between items-center z-100 xl:px-12 py-4
         ${scroll ? 'sticky bg-[rgba(0,0,0,.5)]' : 'absolute'}
        `}>
            <div className="logoContainer">
                {/* logo */}
                <Image
                    src={FullLogo}
                    className="w-full xl:h-[36px] md:h-[34px]"
                    alt="Picture of the author"
                />
            </div>

            <div className="navlink">
                {/* nav link  */}
                <ul className="flex gap-4 bg-[rgba(255,255,255,.25)] border-[.1px] border-[#fff] backdrop-blur-xs rounded-full p-1">
                    {navLinks.map((link) => {
                        const isActive = active === link.href;

                        return (
                            <li
                                key={link.href}
                                className={`px-4 py-2 rounded-full transition ${isActive ? "bg-white text-black" : "bg-transparent text-white"
                                    }`}
                            >
                                <Link href={link.href} className="xl:text-[16px] lg:text-[14px]">
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div>
                {/* button */}
                <button className="button bg-[#fff] text-[#000]">
                    book a free appointment
                </button>
            </div>
        </div>
    )
}

export default NavBar
