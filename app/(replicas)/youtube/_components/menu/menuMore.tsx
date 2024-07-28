"use client"

import { useState } from "react"
import { ItemMenu, Menu } from "./menu"
import {
    SiYoutube,
    SiYoutubekids,
    SiYoutubemusic,
    SiYoutubestudio,
} from "react-icons/si"

export const MenuMore = () => {
    const [active, setActive] = useState<boolean[]>(new Array(4).fill(false))

    const handleActive = (index: number) => {
        const newActive = active.map(
            (_, dispatchIndex) => dispatchIndex === index
        )

        setActive(newActive)
    }

    const menuItems: ItemMenu[] = [
        {
            id: "more-1",
            text: "youtbe premium",
            icon: <SiYoutube color="red" />,
            iconInactive: <SiYoutube color="red" />,
            active: active[0],
            onClick: () => handleActive(0),
        },
        {
            id: "more-2",
            text: "youtube studio",
            icon: <SiYoutubestudio color="red" />,
            iconInactive: <SiYoutubestudio color="red" />,
            active: active[1],
            onClick: () => handleActive(1),
        },
        {
            id: "more-3",
            text: "youtube music",
            icon: <SiYoutubemusic color="red" />,
            iconInactive: <SiYoutubemusic color="red" />,
            active: active[2],
            onClick: () => handleActive(2),
        },
        {
            id: "more-4",
            text: "youtube kids",
            icon: <SiYoutubekids color="red" />,
            iconInactive: <SiYoutubekids color="red" />,
            active: active[3],
            onClick: () => handleActive(3),
        },
    ]
    return <Menu items={menuItems} title="more from youtube" />
}
