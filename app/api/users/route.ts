export async function GET() {
    const users = await (
        await fetch("https://randomuser.me/api/?results=10", {
            next: { revalidate: 60 * 10 },
        })
    ).json()

    return Response.json(users)
}
