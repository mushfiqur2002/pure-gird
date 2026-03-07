"use client"

import { useEffect, useRef, useState } from "react"

export default function Counter({ value }: { value: number }) {
    const [count, setCount] = useState(0)
    const [start, setStart] = useState(false)
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStart(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) observer.observe(ref.current)

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!start) return

        let startValue = 0
        const duration = 1500
        const increment = value / (duration / 16)

        const timer = setInterval(() => {
            startValue += increment

            if (startValue >= value) {
                setCount(value)
                clearInterval(timer)
            } else {
                setCount(Math.floor(startValue))
            }
        }, 16)

        return () => clearInterval(timer)
    }, [start, value])

    return <span ref={ref}>{count}</span>
}