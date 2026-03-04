"use client"
import { advancedLists, cardLists } from "@/constants";
import SideImage from "../../public/image/about-side-image.png"
import CardBgImage from "../../public/image/about-bg-image.jpg"
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
    return (
        <div className="relative">
            {/* advance */}
            <div className="xl:px-12 w-full h-[auto] flex justify-between items-center gap-36 py-10">
                {/* heading */}
                <div>
                    <h1 className="text-[var(--primary-text-color)] text-[18px]">ADVANCED INNOVATIONS</h1>
                </div>
                {/* list */}
                <div>
                    <ul className="flex justify-between items-center gap-32">
                        {
                            advancedLists.map((x) => (
                                <li key={x.title} className="flex justify-center items-center gap-4">
                                    <p className="text-[16px] font-thin text-[var(--x-small-text-color)]">{x.title}</p>
                                    <p className="text-[52px] font-medium text-[var(--primary-text-color)]">{x.text}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className="w-full h-full flex flex-col bg-[url(../../public/image/about-bg-image.jpg)] bg-bottom bg-cover relative">
                {/* layer  */}
                <div className="w-full h-full bg-[rgba(255,255,255,.5)] absolute top-0 z-10"></div>

                {/* heading */}
                <div className="w-full flex justify-between items-center py-12 xl:px-12 bg-white z-30">
                    <div className="flex flex-col gap-6">
                        <p className="title">our solutions</p>
                        <p className="capitalize text-[32px] leading-10">Design Solutions for a <br></br>Zero-Carbon World</p>
                    </div>
                    <div className="w-78">
                        <Image
                            src={SideImage}
                            alt="side image"
                            className="opacity-45"
                        />
                    </div>
                </div>
                {/* card section */}
                <div className="w-full xl:px-12 pb-16 z-20">
                    <div className="w-full flex flex-wrap justify-between items-center gap-6">
                        {cardLists.map((x) => (
                            <div className="w-[343.1px] h-[345px] flex justify-between items-start flex-col bg-[var(--secondary-card-backgourd)] rounded-xl p-6 border-1 border-[var(--third-border-color)]">
                                <div>
                                    <img src={x.icon} className="w-10 h-10" alt="icon" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-[26px] text-[var(--primary-text-color)] capitalize font-medium">{x.title}</h1>
                                    <p className="text-[14px] text-[var(--m-small-text-color)]">{x.paragraph}</p>
                                    <div className="mt-4">
                                        <button className="card-button bg-white  gap-1 border-1 border-[var(--primary-border-color)]">
                                            <p className="text-sm font-medium">learn more</p>
                                            <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
