import Image from "next/image";
import Title from "./ui/Titel";
import { testimonialsList } from "@/constants";

export default function Testimonials() {
    return (
        <div className="w-full relative overflow-hidden px-4 sm:px-6 md:px-8 xl:px-12 py-10 flex flex-col gap-8" id="testimonials">
            <div className="w-full h-full z-10 absolute top-0 flex justify-between items-center">
                <div className="w-[300px] h-[400px] bg-[var(--forth-background)] rounded-full blur-3xl opacity-40 animate-float-slow"></div>
                <div className="w-[300px] h-[400px] bg-[linear-gradient(90deg,rgba(203,254,145,1)0%,rgba(214,243,244,1)100%)] rounded-full blur-3xl opacity-40 animate-float"></div>
            </div>

            <div className="flex flex-col z-20 justify-center items-center gap-2">
                <Title title='Testimonials' />
                <p className="capitalize text-[22px] sm:text-[28px] md:text-[32px] leading-6 sm:leading-10 pt-4">
                    Proven Success Stories
                </p>
                <p className="text-[14px] font-thin text-[var(--xx-small-text-color)] text-center">Master your energy ecosystem with smart technology and tailored <br></br> performance analytics.</p>
            </div>

            <div className="z-20 relative">
                <div className="w-full overflow-x-auto scrollbar-hide flex gap-5 xl:gap-10 snap-x snap-mandatory scroll-smooth py-6">
                    {
                        testimonialsList.map((x, index) => (
                            <div key={index} className="snap-center flex-shrink-0 w-full sm:w-[305px] xl:w-[360px] h-[240px] gradient-backgroud rounded-xl p-[1.5px] flex justify-center items-center">
                                <div className="w-full h-full rounded-xl bg-white flex flex-col justify-between items-start p-4 xl:p-6">
                                    {/* profile */}
                                    <div className="flex justify-center items-center gap-2">
                                        <div className="w-12 h-12 rounded-full overflow-hidden">
                                            <Image
                                                src={x.img}
                                                width={100}
                                                height={100}
                                                alt="avatar"
                                                className="w-full h-full object-cover object-top" />
                                        </div>
                                        <div>
                                            <h1 className="capitalize font-medium text-[16px] text-[var(--small-text-color)]">{x.name}</h1>
                                            <p className="capitalize font-thin text-[14px] text-[var(--xx-small-text-color)]">{x.status}</p>
                                        </div>
                                    </div>

                                    {/* testimonial */}
                                    <div>
                                        <p className="text-[var(--small-text-color)] leading-relaxed">
                                            {x.paragrah}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
