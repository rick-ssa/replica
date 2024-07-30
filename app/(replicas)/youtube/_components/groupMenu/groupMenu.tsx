"use client"
import { useState } from "react"
import { MenuConfig } from "../subMenu/menuConfig"
import { MenuExplore } from "../subMenu/menuExplore"
import { MenuInicio } from "../subMenu/menuInicio"
import { MenuMore } from "../subMenu/menuMore"
import { MenuSubscription } from "../subMenu/menuSubscription"
import { MenuYou } from "../subMenu/menuYou"
import { MenuController } from "./menuController"

interface GroupMenuProps {
    users: any
}
export const GroupMenu = ({ users }: GroupMenuProps) => {
    const [visible, setVisible] = useState<boolean>(true)
    const [activeController, setActiveController] = useState<boolean[][]>([
        new Array(3).fill(false),
        new Array(8).fill(false),
        new Array(10).fill(false),
        new Array(10).fill(false),
        new Array(4).fill(false),
        new Array(4).fill(false),
    ])

    const onClose = () => {
        setVisible(false)
    }

    const handleActive = (arrayIndex: number, index: number) => {
        resetActive()
        setActiveController((ac) =>
            ac.map((arr, arrIndex) => {
                if (arrIndex === arrayIndex) {
                    return arr.map((_, itemIndex) => itemIndex === index)
                }
                return arr
            })
        )
    }

    const resetActive = () => {
        const newActive = activeController.map((arr) =>
            arr.map((item) => false)
        )
        setActiveController(newActive)
    }
    return (
        <div className={"pl-2 " + (visible ? "block" : "hidden")}>
            <MenuController onClick={onClose} />
            <menu>
                <MenuInicio
                    active={activeController[0]}
                    handleActive={handleActive}
                />
                <MenuYou
                    active={activeController[1]}
                    handleActive={handleActive}
                />
                <MenuSubscription
                    users={users}
                    active={activeController[2]}
                    handleActive={handleActive}
                />
                <MenuExplore
                    active={activeController[3]}
                    handleActive={handleActive}
                />
                <MenuMore
                    active={activeController[4]}
                    handleActive={handleActive}
                />
                <MenuConfig
                    active={activeController[5]}
                    handleActive={handleActive}
                />
            </menu>
        </div>
    )
}
