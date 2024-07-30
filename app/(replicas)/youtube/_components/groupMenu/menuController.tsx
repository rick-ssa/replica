"use client"
import { CiMenuBurger } from "react-icons/ci"
import { SiYoutube } from "react-icons/si"

interface MenuControllerProps {
    onClick?: () => void
}
export const MenuController = ({ onClick }: MenuControllerProps) => {
    const handleClick = () => {
        onClick && onClick()
    }

    return (
        <div className="flex cursor-pointer items-center p-2">
            <div
                onClick={handleClick}
                className="rounded-full hover:bg-gray-200 p-2 mr-4"
            >
                <CiMenuBurger className="text-xl " />
            </div>
            <div className="relative flex items-center">
                <SiYoutube color="red" className="text-3xl" />
                <span className="absolute left-1 flex font-['arial'] scale-x-50 scale-y-90 tracking-tight font-[900] text-3xl">
                    YouTube
                </span>
            </div>
        </div>
    )
}
