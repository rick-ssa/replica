"use client"
import { ReactNode } from "react"

interface MenuItemProps {
    active?: boolean
    onClick?: () => void
    text: string
    icon: ReactNode
    iconInactive: ReactNode
}

export const MenuItem = ({
    onClick,
    active,
    text,
    icon,
    iconInactive,
}: MenuItemProps) => {
    const bg = active ? "bg-slate-200" : "bg-white"
    const bgHover = active ? "hover:bg-slate-300" : "hover:bg-slate-200"

    const handleClick = () => {
        onClick && onClick()
    }

    return (
        <li
            className={
                "px-3 h-10 py-2 flex items-center flex-1 list-none rounded-lg hover:cursor-pointer " +
                bg +
                " " +
                bgHover
            }
            onClick={handleClick}
        >
            <span className="text-xl w-12">{active ? icon : iconInactive}</span>
            <span
                className={
                    "capitalize text-sm select-none " +
                    (active ? "font-semibold " : "")
                }
            >
                {text}
            </span>
        </li>
    )
}
