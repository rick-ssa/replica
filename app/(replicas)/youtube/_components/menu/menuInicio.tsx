"use client"

import { useState } from "react"
import { ItemMenu, Menu } from "./menu"
import { GoHome, GoHomeFill } from "react-icons/go"
import { SiYoutubeshorts } from "react-icons/si"
import { MdSubscriptions, MdOutlineSubscriptions } from "react-icons/md"

export const MenuInicio = () => {
    const [active, setActive] = useState<boolean[]>([false, false, false])

    const handleActive = (index: number) => {
        const newActive = active.map(
            (_, dispatchIndex) => dispatchIndex === index
        )

        setActive(newActive)
    }

    const menuItems: ItemMenu[] = [
        {
            text: "home",
            icon: <GoHomeFill />,
            iconInactive: <GoHome />,
            active: active[0],
            onClick: () => handleActive(0),
        },
        {
            text: "Shorts",
            icon: <SiYoutubeshorts />,
            iconInactive: <SiYoutubeshorts />,
            active: active[1],
            onClick: () => handleActive(1),
        },
        {
            text: "subscriptions",
            icon: <MdSubscriptions />,
            iconInactive: <MdOutlineSubscriptions />,
            active: active[2],
            onClick: () => handleActive(2),
        },
    ]
    return <Menu items={menuItems} />
}
