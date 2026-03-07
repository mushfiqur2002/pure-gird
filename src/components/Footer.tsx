import Image from "next/image";
import FooterLogo from "../../public/image/full-logo.png"
import { footerNavLink, socailLink } from "@/constants";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full relative overflow-hidden px-4 sm:px-6 md:px-8 xl:px-12 pb-4 pt-10 flex flex-col gap-8 bg-[var(--primary-background)]">
            <div>
                <Image
                    src={FooterLogo}
                    alt="logo"
                    className="w-auto h-6"
                />
                <p className="text-[var(--xxx-small-text-color)] text-[14px] font-thin leading-4 pt-2">Delivering dependable, custom-engineered power solutions <br></br>for a sustainable future.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <p className="capitalize text-white text-[22px] sm:text-[28px] md:text-[32px] leading-6 sm:leading-10">
                        Intelligent energy <br className="hidden md:flex" /> updates.
                    </p>
                </div>

                <div className="flex flex-col justify-start items-start md:items-end mt-2 md:mt-0 gap-2">
                    <p className="text-[var(--xxx-small-text-color)] text-[14px] font-thin leading-4 text-start md:text-end pb-2">Connect with PureGrid. Drop us a message below to start your energy transition.</p>
                    <input
                        type="email"
                        className="w-[70%] placeholder-white/50 text-[12px] text-white rounded-full border-1 border-[var(--forth-border-color)] py-2 pl-4 pr-6"
                        placeholder="Enter Your Email."
                    />
                    <button className="button bg-[var(--secondary-button-bg)] !rounded-full !py-2 !text-[12px]">Join the Grid</button>
                </div>
            </div>

            <div className="flex flex-col gap-4">

                <div className="flex gap-2">
                    {
                        socailLink.map((x, index) => (
                            <Link key={index} href={x.path}>
                                <Image
                                    src={x.icon}
                                    width={100}
                                    height={100}
                                    alt="icon"
                                    className="w-4 h-4" />
                            </Link>
                        ))
                    }
                </div>

                <div className="w-full h-[1px] bg-white/40 rounded-full"></div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
                    <div className="flex flex-wrap gap-[4px]">
                        {
                            footerNavLink.map((x, index) => (
                                <Link
                                    key={index}
                                    href={x.path}
                                    className="capitalize text-[12px] text-white/80 bg-white/30 px-3 py-1.5 rounded-full"
                                >
                                    {x.name}
                                </Link>
                            ))
                        }
                    </div>
                    <p className="text-[12px] text-white/50">© 2026 PureGrid. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}
