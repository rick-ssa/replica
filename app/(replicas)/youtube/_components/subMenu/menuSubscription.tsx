import { Suspense } from "react"
import { Avatar } from "../avatar"
import { ItemMenu, Menu } from "../menu/menu"
import { FiRadio } from "react-icons/fi"

export const MenuSubscription = ({ users }: { users: any }) => {
    const items: ItemMenu[] = users.map(
        (user: any, index: number): ItemMenu => {
            let Text
            switch (index) {
                case 0:
                    Text = (
                        <span className="flex flex-1 items-center justify-between">
                            {user.login.username}
                            <FiRadio color="red" />
                        </span>
                    )
                    break
                case 3:
                case 4:
                case 5:
                    Text = (
                        <span className="flex flex-1 items-center justify-between">
                            {user.login.username}
                            <span className="relative flex w-1 h-1 rounded-full bg-blue-600" />
                        </span>
                    )
                    break
                default:
                    Text = user.login.username
                    break
            }
            return {
                id: user.login.username,
                text: Text,
                icon: (
                    <Avatar
                        src={user.picture.thumbnail}
                        alt={user.name.first}
                    />
                ),
                iconInactive: (
                    <Avatar
                        src={user.picture.thumbnail}
                        alt={user.name.first}
                    />
                ),
            }
        }
    )
    return (
        <Suspense fallback={"loading..."}>
            <Menu items={items} title="subscriptions" />
        </Suspense>
    )
}
