"use client"

import { motion } from "motion/react"

export default function Odometer({ value }: { value: number }) {

    const digits = value.toString().split("")

    return (
        <div className="flex overflow-hidden">
            {digits.map((digit, i) => (
                <Digit key={i} value={Number(digit)} />
            ))}
        </div>
    )
}

function Digit({ value }: { value: number }) {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className="relative h-[1em] overflow-hidden">
            <motion.div
                animate={{ y: `-${value * 100}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="flex flex-col"
            >
                {numbers.map((n) => (
                    <span key={n} className="h-[1em] flex items-center justify-center">
                        {n}
                    </span>
                ))}
            </motion.div>
        </div>
    )
}