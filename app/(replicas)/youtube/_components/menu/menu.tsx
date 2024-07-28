import { ReactNode } from "react"
import { MenuItem } from "./menuItem"

export interface ItemMenu {
    id: string | number
    text: ReactNode
    icon: ReactNode
    iconInactive: ReactNode
    onClick?: () => void
    active?: boolean
}

export const Menu = ({
    items,
    title = "",
}: {
    items: ItemMenu[]
    title?: string
}) => {
    return (
        <ul className="border-b flex-1 justify-start py-3 pr-3 pl-1 flex-col">
            {title && (
                <span className="flex capitalize font-semibold ml-4 mb-3">
                    {title}
                </span>
            )}
            {items.map((item) => (
                <MenuItem
                    key={item.id}
                    text={item.text}
                    icon={item.icon}
                    iconInactive={item.iconInactive}
                    active={item.active}
                    onClick={item.onClick}
                />
            ))}
        </ul>
    )
}
