'use client'
import Image from "next/image";
import Title from "./ui/Titel";
import { testimonialsList } from "@/constants";
import { motion } from "motion/react";

export default function Testimonials() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 12
            }
        }
    };

    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0, y: 30 },
        visible: (custom: number) => ({
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 12,
                delay: custom * 0.1
            }
        }),
        hover: {
            scale: 1.02,
            transition: {
                type: "spring" as const,
                stiffness: 400,
                damping: 10
            }
        }
    };

    return (
        <motion.div
            className="w-full relative overflow-hidden px-4 sm:px-6 md:px-8 xl:px-12 py-10 flex flex-col gap-8"
            id="testimonials"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="w-full h-full z-10 absolute top-0 flex justify-between items-center">
                <motion.div
                    className="w-[300px] h-[400px] bg-[var(--forth-background)] rounded-full blur-3xl opacity-40 animate-float-slow"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.4, 0.5, 0.4]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                ></motion.div>
                <motion.div
                    className="w-[300px] h-[400px] bg-[linear-gradient(90deg,rgba(203,254,145,1)0%,rgba(214,243,244,1)100%)] rounded-full blur-3xl opacity-40 animate-float"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.4, 0.6, 0.4],
                        x: [0, 20, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                ></motion.div>
            </div>

            <motion.div
                className="flex flex-col z-20 justify-center items-center gap-2"
                variants={itemVariants}
            >
                <Title title='Testimonials' />
                <motion.p
                    className="capitalize text-[22px] sm:text-[28px] md:text-[32px] leading-6 sm:leading-10 pt-4"
                    variants={itemVariants}
                >
                    Proven Success Stories
                </motion.p>
                <motion.p
                    className="text-[14px] font-thin text-[var(--xx-small-text-color)] text-center"
                    variants={itemVariants}
                >
                    Master your energy ecosystem with smart technology and tailored <br></br> performance analytics.
                </motion.p>
            </motion.div>

            <motion.div
                className="z-20 relative"
                variants={itemVariants}
            >
                <div className="w-full overflow-x-auto  no-scrollbar flex gap-5 xl:gap-10 snap-x snap-mandatory scroll-smooth py-6">
                    {
                        testimonialsList.map((x, index) => (
                            <motion.div
                                key={index}
                                className="snap-center flex-shrink-0 w-full sm:w-[305px] xl:w-[360px] h-[240px] gradient-backgroud rounded-xl p-[1.5px] flex justify-center items-center"
                                variants={cardVariants}
                                custom={index}
                            >
                                <div className="w-full h-full rounded-xl bg-white flex flex-col justify-between items-start p-4 xl:p-6">
                                    {/* profile */}
                                    <div className="flex justify-center items-center gap-2">
                                        <motion.div
                                            className="w-12 h-12 rounded-full overflow-hidden"
                                        >
                                            <Image
                                                src={x.img}
                                                width={100}
                                                height={100}
                                                alt="avatar"
                                                className="w-full h-full object-cover object-top" />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 + 0.3 }}
                                        >
                                            <h1 className="capitalize font-medium text-[16px] text-[var(--small-text-color)]">{x.name}</h1>
                                            <p className="capitalize font-thin text-[14px] text-[var(--xx-small-text-color)]">{x.status}</p>
                                        </motion.div>
                                    </div>

                                    {/* testimonial */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 0.5 }}
                                    >
                                        <motion.p
                                            className="text-[var(--small-text-color)] leading-relaxed"
                                        >
                                            {x.paragrah}
                                        </motion.p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </motion.div>
        </motion.div>
    )
}