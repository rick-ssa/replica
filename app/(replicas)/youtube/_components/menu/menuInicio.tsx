"use client"

import { useState } from "react"
import { ItemMenu, Menu } from "./menu"
import { GoHome, GoHomeFill } from "react-icons/go"
import { SiYoutubeshorts } from "react-icons/si"
import { MdSubscriptions, MdOutlineSubscriptions } from "react-icons/md"

export const MenuInicio = () => {
    const [inicioActive, setInicioActive] = useState<boolean>(false)
    const [shortsActive, setShortsActive] = useState<boolean>(false)
    const [inscricoesActive, setInscricoesActive] = useState<boolean>(false)

    const handleActive = (index: number) => {
        const dispatchs = [
            setInicioActive,
            setShortsActive,
            setInscricoesActive,
        ]
        dispatchs.forEach((dispatch, dispatchIndex) =>
            dispatch(dispatchIndex === index)
        )
    }

    const menuItems: ItemMenu[] = [
        {
            text: "Início",
            icon: <GoHomeFill />,
            iconInactive: <GoHome />,
            active: inicioActive,
            onClick: () => handleActive(0),
        },
        {
            text: "Shorts",
            icon: <SiYoutubeshorts />,
            iconInactive: <SiYoutubeshorts />,
            active: shortsActive,
            onClick: () => handleActive(1),
        },
        {
            text: "Inscrições",
            icon: <MdSubscriptions />,
            iconInactive: <MdOutlineSubscriptions />,
            active: inscricoesActive,
            onClick: () => handleActive(2),
        },
    ]
    return <Menu items={menuItems} />
}
