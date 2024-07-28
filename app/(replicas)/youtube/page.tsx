import { MenuExplore } from "./_components/menu/menuExplore"
import { MenuInicio } from "./_components/menu/menuInicio"
import { MenuMore } from "./_components/menu/menuMore"
import { MenuSubscription } from "./_components/menu/menuSubscription"
import { MenuYou } from "./_components/menu/menuYou"

export default function YoutubePage() {
    return (
        <div className="w-60">
            <MenuInicio />
            <MenuYou />
            <MenuSubscription />
            <MenuExplore />
            <MenuMore />
        </div>
    )
}
