import Image from "next/image"
import HeroImage from "../../public/image/hero-image.jpg"
import HeroCardImage from "../../public/image/hero-card-image.png"
import BrandImage01 from "../../public/image/brand-image-01.png"
import BrandImage02 from "../../public/image/brand-image-02.png"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Hero() {
    return (
        <div className="w-full h-[600px] relative">
            {/* background image */}
            <div className="w-full h-full absolute top-0 bg-[url(../../public/image/hero-image.jpg)] bg-cover bg-center">

            </div>

            {/* paragraph container */}
            <div className="w-full h-full absolute top-0 bg-[linear-gradient(20deg,rgba(0,92,125,.5)45%,rgba(255,255,255,.1)100%)] flex justify-between items-center xl:px-12">
                {/* heading */}
                <div className="w-[55%] flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <h1 className="xl:text-[60px] leading-16 font-medium text-white capitalize">Powering the future <br></br>through pure design.</h1>
                        <p className="xl:text-[16px] leading-6 font-thin text-white">I help renewable energy companies scale by creating high-performance digital interfaces that simplify complex energy data and drive global adoption.</p>
                    </div>
                    <div>
                        <button className="button bg-(--secondary-button-bg) text-(--primary-text-color) xl:text-[16px] lg:text-[14px]">
                            let's build toghether
                        </button>
                    </div>
                </div>

                {/* card */}
                <div className="h-full flex justify-center items-end">
                    <div className="bg-white w-[320px] h-[360px] px-4 py-4 mb-10 rounded-xl flex justify-center items-center flex-col gap-4">
                        <div className="w-full h-full rounded-xl overflow-hidden">
                            <Image
                                src={HeroCardImage}
                                alt="hero card image"
                                className="w-full h-full"
                            />
                        </div>
                        <div className="w-full flex justify-evenly">
                            <Image
                                src={BrandImage01}

                                alt="brand image"
                            />
                            <Image
                                src={BrandImage02}
                                alt="brand image"
                            />
                        </div>
                        <div className="w-full  flex justify-end items-center">
                            <Link href={{ pathname: '#' }} className="flex justify-center items-center gap-1">
                                <p className="capitalize text-[14px] text-[var(--primary-text-color)]">lear more </p>
                                <span className="w-6 h-6 rounded-full border-1 border-[var(--secondary-border-color)] flex justify-center items-center">
                                    <ArrowUpRight size={14} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
