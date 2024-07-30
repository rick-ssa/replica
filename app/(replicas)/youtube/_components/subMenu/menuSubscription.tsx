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
                            <span className="max-w-24 truncate">
                                {user.login.username}
                            </span>
                            <FiRadio color="red" />
                        </span>
                    )
                    break
                case 3:
                case 4:
                case 5:
                    Text = (
                        <span className="flex flex-1 items-center justify-between">
                            <span className="max-w-24 truncate">
                                {user.login.username}
                            </span>
                            <span className="relative mx-2 flex w-1 h-1 rounded-full bg-blue-600" />
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
    return <Menu items={items} title="subscriptions" />
}
