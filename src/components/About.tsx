"use client"
import { advancedLists } from "@/constants";
import SideImage from "../../public/image/about-side-image.png"
import Image from "next/image";

export default function About() {
    return (
        <div className="xl:px-12">
            {/* advance */}
            <div className="w-full h-[auto] flex justify-between items-center gap-36 py-10">
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


            <div className="w-full flex flex-col">
                {/* heading */}
                <div className="w-full flex justify-between items-center py-12">
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
                <div className="w-full">

                </div>
            </div>
        </div>
    )
}
