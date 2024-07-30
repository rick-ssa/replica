"use client"

import { ItemMenu, Menu } from "../menu/menu"
import {
    SiYoutube,
    SiYoutubekids,
    SiYoutubemusic,
    SiYoutubestudio,
} from "react-icons/si"

export const MenuMore = ({
    active,
    handleActive,
}: {
    active: boolean[]
    handleActive: (arrayIndex: number, index: number) => void
}) => {
    const menuItems: ItemMenu[] = [
        {
            id: "more-1",
            text: "youtbe premium",
            icon: <SiYoutube color="red" />,
            iconInactive: <SiYoutube color="red" />,
            active: active[0],
            onClick: () => handleActive(4, 0),
        },
        {
            id: "more-2",
            text: "youtube studio",
            icon: <SiYoutubestudio color="red" />,
            iconInactive: <SiYoutubestudio color="red" />,
            active: active[1],
            onClick: () => handleActive(4, 1),
        },
        {
            id: "more-3",
            text: "youtube music",
            icon: <SiYoutubemusic color="red" />,
            iconInactive: <SiYoutubemusic color="red" />,
            active: active[2],
            onClick: () => handleActive(4, 2),
        },
        {
            id: "more-4",
            text: "youtube kids",
            icon: <SiYoutubekids color="red" />,
            iconInactive: <SiYoutubekids color="red" />,
            active: active[3],
            onClick: () => handleActive(4, 3),
        },
    ]
    return <Menu items={menuItems} title="more from youtube" />
}
