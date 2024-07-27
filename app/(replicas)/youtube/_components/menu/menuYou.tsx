"use client"

import { useState } from "react"
import { ItemMenu, Menu } from "./menu"
import { PiUserSquare, PiUserSquareBold } from "react-icons/pi"
import { GoHistory } from "react-icons/go"
import {
    MdPlaylistPlay,
    MdOutlinePlaylistPlay,
    MdOutlineWatchLater,
    MdWatchLater,
} from "react-icons/md"
import { CgPlayButtonR } from "react-icons/cg"
import { BiMoviePlay, BiSolidMoviePlay } from "react-icons/bi"
import { RiThumbUpLine, RiThumbUpFill } from "react-icons/ri"

export const MenuYou = () => {
    const [active, setActive] = useState<boolean[]>(new Array(8).fill(false))

    const handleActive = (index: number) => {
        const newActive = active.map(
            (_, dispatchIndex) => dispatchIndex === index
        )

        setActive(newActive)
    }

    const menuItems: ItemMenu[] = [
        {
            text: ">",
            icon: <span className="font-semibold text-sm capitalize">you</span>,
            iconInactive: (
                <span className="font-semibold text-sm capitalize">you</span>
            ),
            active: active[0],
            onClick: () => handleActive(0),
        },
        {
            text: "your channel",
            icon: <PiUserSquareBold />,
            iconInactive: <PiUserSquare />,
            active: active[1],
            onClick: () => handleActive(1),
        },
        {
            text: "History",
            icon: <GoHistory className="font-bold" />,
            iconInactive: <GoHistory />,
            active: active[2],
            onClick: () => handleActive(2),
        },
        {
            text: "Playlist",
            icon: <MdPlaylistPlay />,
            iconInactive: <MdOutlinePlaylistPlay />,
            active: active[3],
            onClick: () => handleActive(3),
        },
        {
            text: "Your videos",
            icon: <CgPlayButtonR />,
            iconInactive: <CgPlayButtonR />,
            active: active[4],
            onClick: () => handleActive(4),
        },
        {
            text: "Your movies",
            icon: <BiSolidMoviePlay />,
            iconInactive: <BiMoviePlay />,
            active: active[5],
            onClick: () => handleActive(5),
        },
        {
            text: "watch later",
            icon: <MdWatchLater />,
            iconInactive: <MdOutlineWatchLater />,
            active: active[6],
            onClick: () => handleActive(6),
        },
        {
            text: "thumbup videos",
            icon: <RiThumbUpFill />,
            iconInactive: <RiThumbUpLine />,
            active: active[7],
            onClick: () => handleActive(7),
        },
    ]
    return <Menu items={menuItems} />
}
