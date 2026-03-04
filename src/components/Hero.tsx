import Image from "next/image"
import HeroImage from "../../public/image/hero-image.jpg"
import HeroCardImage from "../../public/image/hero-card-image.png"
import BrandImage01 from "../../public/image/brand-image-01.png"
import BrandImage02 from "../../public/image/brand-image-02.png"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Hero() {
    return (
        <div className="w-full h-[500px] sm:h-[550px] md:h-[600px] relative">
            {/* background image */}
            <div className="w-full h-full absolute top-0 bg-[url(../../public/image/hero-image.jpg)] bg-cover bg-center">

            </div>

            {/* paragraph container */}
            <div className="w-full h-full absolute top-0 bg-[linear-gradient(20deg,rgba(0,92,125,.5)45%,rgba(255,255,255,.1)100%)] flex justify-between items-center px-4 sm:px-6 md:px-8 xl:px-12">
                {/* heading */}
                <div className="w-full md:w-[60%] lg:w-[55%] flex justify-center items-center md:items-start flex-col gap-6 md:gap-10">
                    <div className="flex justify-center items-center md:justify-start md:items-start flex-col gap-4 pt-0 md:pt-10 lg:pt-0">
                        <h1 className="text-[30px] sm:text-[36px] md:text-[52px] xl:text-[60px] leading-10 md:leading-16 font-medium text-white text-center md:text-start capitalize">Powering the future <br></br>through pure design</h1>
                        <p className="text-[14px] md:text-[16px] leading-4 md:leading-6 font-thin text-white text-center md:text-start">I help renewable energy companies scale by creating high-performance digital interfaces that simplify complex energy data and drive global adoption.</p>
                    </div>
                    <div>
                        <button className="button bg-[var(--secondary-button-bg)] text-[var(--primary-text-color)]">
                            let's build toghether
                        </button>
                    </div>
                </div>

                {/* card */}
                <div className="h-full hidden md:flex justify-center items-end relative">
                    <div className="bg-white md:w-[280px] md:h-[320px] lg:w-[320px] lg:h-[360px] px-4 py-4 mb-10 rounded-xl flex justify-center items-center flex-col gap-4 aboslute">
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
