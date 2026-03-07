'use client'

import { advantagesList, maintanceList } from "@/constants"
import Title from "./ui/Titel"
import Image from "next/image"
import SideImage from '../../public/image/maintenance-side-image.jpg'
import MainImage from '../../public/image/maintenance-main-image.png'
import NameLogoImage from '../../public/image/logo-name.png'
import Spiner from "./ui/Spiner"
import { Check } from "lucide-react"

export default function Maintenance() {
    return (
        <div id="maintenance" className="">
            {/* step 01 */}
            <div className="w-full px-4 sm:px-6 md:px-8 xl:px-12 py-10 flex flex-col md:flex-row">
                {/* 1st section  */}
                <div className="md:w-full lg:w-[50%] xl:w-[40%] h-auto flex flex-col justify-between items-start">
                    <div>
                        <Title title='maintance' />
                        <p className="capitalize text-[24px] sm:text-[28px] md:text-[32px] text-[var(--primary-text-color)] leading-6 sm:leading-10 pt-4">
                            Worry-free solar <br></br>upkeep
                        </p>
                    </div>
                    <div>
                        <p className="text-[14px] md:text-[18px] font-thinn md:font-medium text-[var(--primary-text-color)] pt-4 md:pt-0 md:pr-6">At PureGrid, our engineering focus is on longevity. We combine premium materials with smart tech to ensure your energy infrastructure runs at peak performance for decades.</p>
                    </div>
                </div>

                {/* 2nd section  */}
                <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-6 lg:gap-0 pt-6 md:pt-0">
                    <div className="flex justify-between itmes-start flex-col lg:px-4 xl:px-6 gap-6 lg:gap-0">
                        {
                            maintanceList.map((x) => (
                                <div key={x.title}>
                                    <h1 className="text-[20px] sm:text-[22px] md:text-[24px] text-[var(--primary-text-color)] capitalize font-medium">{x.title}</h1>
                                    <p className="text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] text-[var(--x-small-text-color)] pt-2">{x.paragraph}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div>
                        <div className="lg:w-[350px] xl:w-[400px] h-[220px] md:h-[300px] lg:h-[500px] rounded-2xl overflow-hidden md:m-0 lg:m-4 relative">
                            <div className="w-full h-full absolute top-0 bg-[linear-gradient(15deg,rgba(5,45,26,.6)1%,rgba(255,255,255,.1)100%)]"></div>
                            <Image
                                src={SideImage}
                                alt="side image"
                                className="w-full h-full object-cover object-[90%]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd step  */}
            <div className="w-full h-full bg-[var(--secondary-background)] pt-16 sm:pt-24 lg:pt-12 flex justify-center items-center relative flex-col lg:flex-row">
                <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] overflow-hidden z-10">
                    <Image
                        src={MainImage}
                        alt="main image fo maintenance"
                        className="w-full h-full object-contain object-bottom relative lg:absolute sm:left-10 md:left-0 lg:-bottom-10"
                    />

                    <Image
                        src={NameLogoImage}
                        alt="company 2nd logo"
                        className="w-auto h-[36px] sm:h-[52px] lg:h-[50px] xl:h-[70px] hidden md:flex absolute md:left-50 lg:left-70 xl:left-80 bottom-10 sm:bottom-20 md:bottom-20 lg:bottom-15 xl:bottom-20"
                    />
                </div>

                <div className="absolute -top-10 sm:-top-10 lg:-top-16 sm:right-0 sm:left-0 lg:left-10 xl:left-25 ">
                    <Spiner />
                </div>

                <div className="relative lg:absolute w-[90%] lg:w-[440px] xl:w-[500px] h-auto bg-white z-20 bottom-0 md:right-0 lg:right-2 xl:right-12 border-1 border-[rgba(0,0,0,0.25)] rounded-2xl p-6 md:p-8 mx-6 gap-6 flex flex-col">
                    <div className="flex flex-col gap-4">
                        <h1 className="capitalize text-[22px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[42px] font-medium leading-6 sm:leading-10">The advantages of a PureGrid ecosystem</h1>
                        <p className="text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[18px] text-black/60">At PureGrid, we believe in the sun’s infinite potential to revolutionize how we power our lives.</p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap lg:flex-col gap-4">
                            {
                                advantagesList.map((x, index) => (
                                    <li key={index} className="flex justify-start items-center gap-2">
                                        <span className="w-4 h-4 bg-[var(--primary-icon-color)] flex justify-center items-center rounded-full">
                                            <Check color="white" size={12} />
                                        </span>
                                        <p className="capitalize text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-medium">{x}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
