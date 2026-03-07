import { servicesList } from "@/constants";
import ServiceMainImage from "../../public/image/service-main-image.jpg"
import Title from "./ui/Titel";
import Image from "next/image";

export default function Service() {
    return (
        <div className="w-full px-4 sm:px-6 md:px-8 xl:px-12 py-10 flex flex-col gap-8" id="services">
            {/* heading */}
            <div className="w-full flex flex-col justify-start items-start">
                <Title title='Our Services' />
                <p className="capitalize text-[22px] sm:text-[28px] md:text-[32px] leading-6 sm:leading-10 pt-4">
                    PureGrid is the Preferred Choice for <br></br> Industry Leaders.
                </p>
            </div>

            {/* service list */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    servicesList.map((x) => (
                        <div key={x.title}
                            className="w-full h-[250px] gradient-backgroud rounded-xl p-[1.5px]">
                            <div className="w-full h-full bg-white rounded-xl flex flex-col justify-between items-start p-6">
                                <div>
                                    <img src={x.icon} alt="" className="xs:w-10 xs:h-10" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-[20px] xs:text-[22px] xl:text-[24px] font-medium">{x.title}</h1>
                                    <p className="text-[12px] xs:text-[14px] lg:text-[16px] text-[var(--m-small-text-color)]">{x.paragraph}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* service footer */}
            <div className="w-full h-[400px] overflow-hidden relative rounded-2xl">
                <Image
                    src={ServiceMainImage}
                    alt="service main image"
                    className="w-full h-full object-cover object-center-right lg:object-center z-10 scale-120"
                />
                <div className="w-[90%] md:w-[400px] h-auto bg-white/70 lg:bg-white z-20 absolute top-15  left-3.5 xs:left-5 md:left-10 flex flex-col justify-center items-center rounded-xl gap-4 px-4 py-6 xs:py-8">
                    <h1 className="text-center text-[24px] xs:text-[28px] md:text-[30px] lg:text-[32px] leading-7 xs:leading-9 font-bold">Future-proof your energy ecosystem</h1>
                    <p className="text-center text-[var(--x-small-text-color)] text-[12px] xs:text-[14px]">Transition to a high-efficiency PureGrid system and unlock immediate operational savings. Schedule your strategic consultation today.</p>
                    <button className="button bg-[var(--secondary-button-bg)] !rounded-full !font-medium !px-6">get started</button>
                </div>
            </div>
        </div>
    )
}
