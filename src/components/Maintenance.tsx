'use client'

import { maintanceList } from "@/constants"
import Title from "./ui/Titel"
import Image from "next/image"
import SideImage from '../../public/image/maintenance-side-image.jpg'
import MainImage from '../../public/image/maintenance-main-image.png'

export default function Maintenance() {
    return (
        <div className="">
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

            {/* 2nd step bg-[var(--secondary-background)] */}
            <div className="w-full h-full bg-red-300  flex justify-center items-center relative">
                <div className="w-[750px] h-[500px] overflow-hidden relative">
                    <Image
                        src={MainImage}
                        alt="main image fo maintenance"
                        className="w-full h-full object-cover object-bottom absolute -bottom-10"
                    />
                </div>
            </div>
        </div>
    )
}
