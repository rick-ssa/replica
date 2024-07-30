import { GroupMenu } from "./_components/groupMenu/groupMenu"

export default async function YoutubePage() {
    const response = await (await fetch(`${process.env.URL}/api/users/`)).json()
    const users = response.results
    return <GroupMenu users={users} />
}
