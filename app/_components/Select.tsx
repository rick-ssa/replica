"use client"

import { useRouter } from "next/navigation"
import { ChangeEvent } from "react"

interface OptionProps {
    link: string
    label: string
}

interface SelectProps {
    links: OptionProps[]
}

export const Select = ({ links }: SelectProps) => {
    const router = useRouter()
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        router.push(e.target.value)
    }
    return (
        <select onChange={handleChange}>
            {links.map((linkOpt) => (
                <option key={linkOpt.link} value={linkOpt.link}>
                    {linkOpt.label}
                </option>
            ))}
        </select>
    )
}
