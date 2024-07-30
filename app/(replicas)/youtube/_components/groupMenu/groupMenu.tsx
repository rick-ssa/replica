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
    const onClose = () => {
        setVisible(false)
    }
    return (
        <div className={"pl-2 " + (visible ? "block" : "hidden")}>
            <MenuController onClick={onClose} />
            <menu>
                <MenuInicio />
                <MenuYou />
                <MenuSubscription users={users} />
                <MenuExplore />
                <MenuMore />
                <MenuConfig />
            </menu>
        </div>
    )
}
