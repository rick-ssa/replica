import { Card } from "./_components/card/card"
import { GroupMenu } from "./_components/groupMenu/groupMenu"
import { YoutubeShortMenu } from "./_components/shortMenu/youtubeShortMenu"

export default async function YoutubePage() {
    const response = await (await fetch(`${process.env.URL}/api/users`)).json()
    const users = response.results
    return (
        <>
            <GroupMenu users={users} />
            <YoutubeShortMenu activeItemIndex={2} />
            <div className="flex self-start gap-4 flex-wrap">
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}
