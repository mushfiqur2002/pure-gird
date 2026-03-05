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
            <div className="w-full h-full bg-[var(--secondary-background)] md:pt-0 lg:pt-12 flex justify-center items-center relative flex-col lg:flex-row">
                <div className="relative w-[400px] sm:w-[500px] md:w-[850px] xl:w-[900px] md:h-[600px] overflow-hidden z-10">
                    <Image
                        src={MainImage}
                        alt="main image fo maintenance"
                        className="w-full h-full object-contain md:object-cover object-bottom lg:absolute -bottom-10"
                    />

                    <Image
                        src={NameLogoImage}
                        alt="company 2nd logo"
                        className="w-auto h-[42px] sm:h-[52px] md:h-[65px] xl:h-[70px] absolute right-30 sm:right-40 md:right-90 lg:right-100 xl:right-89 bottom-20 sm:bottom-25 md:bottom-30"
                    />
                </div>

                <div className="absolute -top-2 sm:-top-10 lg:-top-6 xl:-top-14 -left-5 sm:left-0 lg:-left-4 xl:left-20 ">
                    <Spiner />
                </div>

                <div className="relative md:absolute w-[90%] md:w-[365px] lg:w-[440px] xl:w-[500px] h-auto bg-white z-20 bottom-0 md:right-5 lg:right-12 border-1 border-[rgba(0,0,0,0.25)] rounded-2xl p-8 mx-6 gap-6 flex flex-col">
                    <div className="flex flex-col gap-4">
                        <h1 className="capitalize text-[24px] md:text-[30px] lg:text-[36px] xl:text-[42px] font-medium leading-8 sm:leading-10">The advantages of a PureGrid ecosystem</h1>
                        <p className="text-[14px] lg:text-[16px] xl:text-[18px] text-black/60">At PureGrid, we believe in the sun’s infinite potential to revolutionize how we power our lives.</p>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-4">
                            {
                                advantagesList.map((x, index) => (
                                    <li key={index} className="flex justify-start items-center gap-4">
                                        <span className="w-4 h-4 bg-[var(--primary-icon-color)] flex justify-center items-center rounded-full">
                                            <Check color="white" size={12} />
                                        </span>
                                        <p className="capitalize text-[14px] md:text-[16px] lg:text-[18px] font-medium">{x}</p>
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
