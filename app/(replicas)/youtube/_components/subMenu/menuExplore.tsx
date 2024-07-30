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

export const MenuExplore = ({
    active,
    handleActive,
}: {
    active: boolean[]
    handleActive: (arrayIndex: number, index: number) => void
}) => {
    const menuItems: ItemMenu[] = [
        {
            id: "explore-1",
            text: "trending",
            icon: <AiFillFire />,
            iconInactive: <AiOutlineFire />,
            active: active[0],
            onClick: () => handleActive(3, 0),
        },
        {
            id: "explore-2",
            text: "shopping",
            icon: <RiShoppingBag4Fill />,
            iconInactive: <RiShoppingBag4Line />,
            active: active[1],
            onClick: () => handleActive(3, 1),
        },
        {
            id: "explore-3",
            text: "Music",
            icon: <PiMusicNoteFill />,
            iconInactive: <PiMusicNote />,
            active: active[2],
            onClick: () => handleActive(3, 2),
        },
        {
            id: "explore-4",
            text: "Movies",
            icon: <BiSolidMoviePlay />,
            iconInactive: <BiMoviePlay />,
            active: active[3],
            onClick: () => handleActive(3, 3),
        },
        {
            id: "explore-5",
            text: "Live",
            icon: <FiRadio />,
            iconInactive: <FiRadio />,
            active: active[4],
            onClick: () => handleActive(3, 4),
        },
        {
            id: "explore-6",
            text: "gaming",
            icon: <IoGameController />,
            iconInactive: <IoGameControllerOutline />,
            active: active[5],
            onClick: () => handleActive(3, 5),
        },
        {
            id: "explore-7",
            text: "news",
            icon: <RiNewsFill />,
            iconInactive: <RiNewsLine />,
            active: active[6],
            onClick: () => handleActive(3, 6),
        },
        {
            id: "explore-8",
            text: "sports",
            icon: <IoTrophy />,
            iconInactive: <IoTrophyOutline />,
            active: active[7],
            onClick: () => handleActive(3, 7),
        },
        {
            id: "explore-9",
            text: "courses",
            icon: <PiLightbulbBold />,
            iconInactive: <PiLightbulb />,
            active: active[8],
            onClick: () => handleActive(3, 8),
        },
        {
            id: "explore-10",
            text: "podcasts",
            icon: <MdPodcasts />,
            iconInactive: <MdOutlinePodcasts />,
            active: active[9],
            onClick: () => handleActive(3, 9),
        },
    ]
    return <Menu items={menuItems} title="Explore" />
}
