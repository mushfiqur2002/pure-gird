"use client"
import { advancedLists, cardLists } from "@/constants";
import SideImage from "../../public/image/about-side-image.png"
import CardBgImage from "../../public/image/about-bg-image.jpg"
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Title from "./ui/Titel";

export default function About() {
    return (
        <div className="relative" id="about">
            {/* advance */}
            <div className="w-full h-[auto] flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 lg:gap-24 xl:gap-36 px-4 sm:px-6 md:px-8 xl:px-12 py-10">
                {/* heading */}
                <div>
                    <h1 className="text-[var(--primary-text-color)] text-[18px]">ADVANCED INNOVATIONS</h1>
                </div>
                {/* list */}
                <div className="w-full md:w-auto">
                    <ul className="w-full md:w-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 lg:gap-24 xl:gap-32">
                        {
                            advancedLists.map((x) => (
                                <li key={x.title} className="w-full md:w-auto flex justify-between md:justify-center items-center md:gap-2 lg:gap-4">
                                    <p className="text-[14px] md:text-[16px] font-thin text-[var(--x-small-text-color)] pr-30 sm:pr-48 md:pr-0">{x.title}</p>
                                    <p className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[52px] font-medium text-[var(--primary-text-color)]">{x.text}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            {/* 2nd section  */}
            <div className="w-full h-full flex flex-col bg-[url(../../public/image/about-bg-image.jpg)] bg-bottom bg-cover relative">
                {/* layer  */}
                <div className="w-full h-full bg-[rgba(255,255,255,.5)] absolute top-0 z-10"></div>

                {/* heading */}
                <div className="w-full flex flex-col justify-start items-start pb-8 sm:pb-12 px-4 sm:px-6 md:px-8 xl:px-12 bg-white z-30 relative">
                    <div className="w-full flex justify-between items-center">
                        <Title title='our solutions' />
                        <div className="w-32 sm:w-46 md:w-72">
                            <Image
                                src={SideImage}
                                alt="side image"
                                className="opacity-45"
                            />
                        </div>

                    </div>
                    <div>
                        <p className="capitalize text-[22px] sm:text-[28px] md:text-[32px] leading-6 sm:leading-10 pt-4 sm:pt-0">
                            Design Solutions for a <br></br>Zero-Carbon World
                        </p>
                    </div>
                </div>

                {/* card section */}
                <div className="w-full px-4 sm:px-6 md:px-8 xl:px-12 pb-16 z-20">
                    <div className="w-full flex flex-wrap justify-center lg:justify-between items-center gap-6">
                        {cardLists.map((x) => (
                        
                            <div key={x.title} className="w-full md:w-[340px] lg:w-[300px] xl:w-[343.1px] h-[300px] sm:h-[345px] flex justify-between items-start flex-col bg-[rgba(243,255,249,0.79)] rounded-xl p-4 xl:p-6 border-1 border-[var(--third-border-color)]">
                                <div>
                                    <img src={x.icon} className="w-8 h-8 sm:w-10 sm:h-10" alt="icon" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-[22px] sm:text-[26px] text-[var(--primary-text-color)] capitalize font-medium">{x.title}</h1>
                                    <p className="text-[12px] sm:text-[14px] text-[var(--m-small-text-color)]">{x.paragraph}</p>
                                    <div className="mt-4">
                                        <button className="card-button bg-white  gap-1 border-1 border-[var(--primary-border-color)]">
                                            <p className="text-xs sm:text-sm font-medium">learn more</p>
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
