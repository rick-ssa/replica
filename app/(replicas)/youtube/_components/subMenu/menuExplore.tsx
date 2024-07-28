"use client"

import { useState } from "react"
import { ItemMenu, Menu } from "../menu/menu"
import { AiFillFire, AiOutlineFire } from "react-icons/ai"
import {
    PiMusicNote,
    PiMusicNoteFill,
    PiLightbulb,
    PiLightbulbBold,
} from "react-icons/pi"
import { FiRadio } from "react-icons/fi"
import {
    IoGameController,
    IoGameControllerOutline,
    IoTrophy,
    IoTrophyOutline,
} from "react-icons/io5"
import { MdPodcasts, MdOutlinePodcasts } from "react-icons/md"
import { BiMoviePlay, BiSolidMoviePlay } from "react-icons/bi"
import {
    RiShoppingBag4Fill,
    RiShoppingBag4Line,
    RiNewsFill,
    RiNewsLine,
} from "react-icons/ri"

export const MenuExplore = () => {
    const [active, setActive] = useState<boolean[]>(new Array(10).fill(false))

    const handleActive = (index: number) => {
        const newActive = active.map(
            (_, dispatchIndex) => dispatchIndex === index
        )

        setActive(newActive)
    }

    const menuItems: ItemMenu[] = [
        {
            id: "explore-1",
            text: "hot",
            icon: <AiFillFire />,
            iconInactive: <AiOutlineFire />,
            active: active[0],
            onClick: () => handleActive(0),
        },
        {
            id: "explore-2",
            text: "shopping",
            icon: <RiShoppingBag4Fill />,
            iconInactive: <RiShoppingBag4Line />,
            active: active[1],
            onClick: () => handleActive(1),
        },
        {
            id: "explore-3",
            text: "Music",
            icon: <PiMusicNoteFill />,
            iconInactive: <PiMusicNote />,
            active: active[2],
            onClick: () => handleActive(2),
        },
        {
            id: "explore-4",
            text: "Movies",
            icon: <BiSolidMoviePlay />,
            iconInactive: <BiMoviePlay />,
            active: active[3],
            onClick: () => handleActive(3),
        },
        {
            id: "explore-5",
            text: "Live",
            icon: <FiRadio />,
            iconInactive: <FiRadio />,
            active: active[4],
            onClick: () => handleActive(4),
        },
        {
            id: "explore-6",
            text: "games",
            icon: <IoGameController />,
            iconInactive: <IoGameControllerOutline />,
            active: active[5],
            onClick: () => handleActive(5),
        },
        {
            id: "explore-7",
            text: "news",
            icon: <RiNewsFill />,
            iconInactive: <RiNewsLine />,
            active: active[6],
            onClick: () => handleActive(6),
        },
        {
            id: "explore-8",
            text: "sports",
            icon: <IoTrophy />,
            iconInactive: <IoTrophyOutline />,
            active: active[7],
            onClick: () => handleActive(7),
        },
        {
            id: "explore-9",
            text: "courses",
            icon: <PiLightbulbBold />,
            iconInactive: <PiLightbulb />,
            active: active[8],
            onClick: () => handleActive(8),
        },
        {
            id: "explore-10",
            text: "podcasts",
            icon: <MdPodcasts />,
            iconInactive: <MdOutlinePodcasts />,
            active: active[9],
            onClick: () => handleActive(9),
        },
    ]
    return <Menu items={menuItems} title="Explore" />
}
