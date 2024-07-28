import { MenuInicio } from "./_components/menu/menuInicio"
import { MenuSubscription } from "./_components/menu/menuSubscription"
import { MenuYou } from "./_components/menu/menuYou"

export default function YoutubePage() {
    return (
        <div className="w-60">
            <MenuInicio />
            <MenuYou />
            <MenuSubscription />
        </div>
    )
}
