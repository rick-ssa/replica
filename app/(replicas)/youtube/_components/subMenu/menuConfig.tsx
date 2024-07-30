import { ItemMenu, Menu } from "../menu/menu"
import { RiFeedbackFill, RiFeedbackLine } from "react-icons/ri"
import {
    IoSettings,
    IoSettingsOutline,
    IoFlagOutline,
    IoFlagSharp,
    IoHelpCircle,
    IoHelpCircleOutline,
} from "react-icons/io5"

export const MenuConfig = ({
    active,
    handleActive,
}: {
    active: boolean[]
    handleActive: (arrayIndex: number, index: number) => void
}) => {
    const menuItems: ItemMenu[] = [
        {
            id: "config-1",
            text: "settings",
            icon: <IoSettings />,
            iconInactive: <IoSettingsOutline />,
            active: active[0],
            onClick: () => handleActive(5, 0),
        },
        {
            id: "config-2",
            text: "reporting history",
            icon: <IoFlagSharp />,
            iconInactive: <IoFlagOutline />,
            active: active[1],
            onClick: () => handleActive(5, 1),
        },
        {
            id: "config-3",
            text: "help",
            icon: <IoHelpCircle />,
            iconInactive: <IoHelpCircleOutline />,
            active: active[2],
            onClick: () => handleActive(5, 2),
        },
        {
            id: "config-4",
            text: "send feedback",
            icon: <RiFeedbackFill />,
            iconInactive: <RiFeedbackLine />,
            active: active[3],
            onClick: () => handleActive(5, 3),
        },
    ]
    return <Menu items={menuItems} />
}
