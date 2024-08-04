import { Card } from "./_components/card/card"
import { GroupMenu } from "./_components/groupMenu/groupMenu"
import { YoutubeShortMenu } from "./_components/shortMenu/youtubeShortMenu"
import picExemple from "@/app/_assets/medium-shot-woman-living-farmhouse.jpg"
import picExample2 from "@/app/_assets/homemade-round-lemon-cake-with-topping-lemon-zest-plate-rustic-wooden-table.jpg"

export default async function YoutubePage() {
    const response = await (await fetch(`${process.env.URL}/api/users`)).json()
    const users = response.results
    return (
        <>
            <GroupMenu users={users} />
            <YoutubeShortMenu activeItemIndex={2} />
            <div className="flex self-start gap-4 flex-wrap">
                <Card image={picExemple} />
                <Card image={picExample2} />
                <Card image={picExemple} />
            </div>
        </>
    )
}
