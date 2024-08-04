import { GoHome, GoHomeFill } from "react-icons/go"
import { ShortMenu } from "./shortMenu"
import { ShortMenuItem } from "./shortMenuItem"
import { SiYoutubeshorts } from "react-icons/si"
import { MdOutlineSubscriptions, MdSubscriptions } from "react-icons/md"
import { PiUserSquare, PiUserSquareBold } from "react-icons/pi"

export const YoutubeShortMenu = ({
    activeItemIndex,
}: {
    activeItemIndex: number
}) => {
    const activeArray = new Array(4)
        .fill(false)
        .map((_, index) => index === activeItemIndex)

    return (
        <ShortMenu>
            <ShortMenuItem
                icon={<GoHomeFill />}
                inactiveIcon={<GoHome />}
                text="Home"
                active={activeArray[0]}
            />
            <ShortMenuItem
                icon={<SiYoutubeshorts />}
                inactiveIcon={<SiYoutubeshorts />}
                text="Shorts"
                active={activeArray[1]}
            />
            <ShortMenuItem
                icon={<MdSubscriptions />}
                inactiveIcon={<MdOutlineSubscriptions />}
                text="Inscriptions"
                active={activeArray[2]}
            />
            <ShortMenuItem
                icon={<PiUserSquareBold />}
                inactiveIcon={<PiUserSquare />}
                text="You"
                active={activeArray[3]}
            />
        </ShortMenu>
    )
}
