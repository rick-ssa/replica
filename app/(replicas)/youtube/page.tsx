import { MenuConfig } from "./_components/subMenu/menuConfig"
import { MenuExplore } from "./_components/subMenu/menuExplore"
import { MenuInicio } from "./_components/subMenu/menuInicio"
import { MenuMore } from "./_components/subMenu/menuMore"
import { MenuSubscription } from "./_components/subMenu/menuSubscription"
import { MenuYou } from "./_components/subMenu/menuYou"

export default function YoutubePage() {
    return (
        <div className="w-60">
            <MenuInicio />
            <MenuYou />
            <MenuSubscription />
            <MenuExplore />
            <MenuMore />
            <MenuConfig />
        </div>
    )
}
