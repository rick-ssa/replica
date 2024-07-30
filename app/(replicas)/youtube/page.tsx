import { GroupMenu } from "./_components/groupMenu/groupMenu"

export default async function YoutubePage() {
    const response = await (
        await fetch("https://randomuser.me/api/?results=10", {
            next: { revalidate: 60 * 60 * 24 },
        })
    ).json()
    const users = response.results
    return <GroupMenu users={users} />
}
