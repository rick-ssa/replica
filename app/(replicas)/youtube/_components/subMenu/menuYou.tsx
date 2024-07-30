import { ItemMenu, Menu } from "../menu/menu"
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

export const MenuYou = ({
    active,
    handleActive,
}: {
    active: boolean[]
    handleActive: (arrayIndex: number, index: number) => void
}) => {
    const menuItems: ItemMenu[] = [
        {
            id: "you-1",
            text: ">",
            icon: <span className="font-semibold text-sm capitalize">you</span>,
            iconInactive: (
                <span className="font-semibold text-sm capitalize">you</span>
            ),
            active: active[0],
            onClick: () => handleActive(1, 0),
        },
        {
            id: "you-2",
            text: "your channel",
            icon: <PiUserSquareBold />,
            iconInactive: <PiUserSquare />,
            active: active[1],
            onClick: () => handleActive(1, 1),
        },
        {
            id: "you-3",
            text: "History",
            icon: <GoHistory className="font-bold" />,
            iconInactive: <GoHistory />,
            active: active[2],
            onClick: () => handleActive(1, 2),
        },
        {
            id: "you-4",
            text: "Playlist",
            icon: <MdPlaylistPlay />,
            iconInactive: <MdOutlinePlaylistPlay />,
            active: active[3],
            onClick: () => handleActive(1, 3),
        },
        {
            id: "you-5",
            text: "Your videos",
            icon: <CgPlayButtonR />,
            iconInactive: <CgPlayButtonR />,
            active: active[4],
            onClick: () => handleActive(1, 4),
        },
        {
            id: "you-6",
            text: "Your movies",
            icon: <BiSolidMoviePlay />,
            iconInactive: <BiMoviePlay />,
            active: active[5],
            onClick: () => handleActive(1, 5),
        },
        {
            id: "you-7",
            text: "watch later",
            icon: <MdWatchLater />,
            iconInactive: <MdOutlineWatchLater />,
            active: active[6],
            onClick: () => handleActive(1, 6),
        },
        {
            id: "you-8",
            text: "thumbup videos",
            icon: <RiThumbUpFill />,
            iconInactive: <RiThumbUpLine />,
            active: active[7],
            onClick: () => handleActive(1, 7),
        },
    ]
    return <Menu items={menuItems} />
}
