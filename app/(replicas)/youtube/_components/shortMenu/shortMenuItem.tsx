"use client"
import { ReactNode } from "react"

interface ShortMenuItemProps {
    icon: ReactNode
    inactiveIcon: ReactNode
    text: ReactNode
    active?: boolean
    onClick?: () => void
}

export const ShortMenuItem = ({
    icon,
    inactiveIcon,
    text,
    active,
    onClick,
}: ShortMenuItemProps) => {
    const handleClick = () => {
        onClick && onClick()
    }
    return (
        <li
            className={
                "flex flex-col " +
                "w-16 h-[72px] " +
                "justify-center items-center " +
                "rounded-lg hover:bg-slate-100 " +
                "cursor-pointer "
            }
            onClick={handleClick}
        >
            <span className="text-xl pb-1">{active ? icon : inactiveIcon}</span>
            <span className="text-[0.65rem]">{text}</span>
        </li>
    )
}
