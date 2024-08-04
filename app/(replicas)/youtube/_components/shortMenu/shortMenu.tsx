import { ReactNode } from "react"

export const ShortMenu = ({ children }: { children: ReactNode }) => {
    return (
        <ul className="p-1 flex flex-1 fixed justify-between bottom-0 left-0 right-0 bg-white ">
            {children}
        </ul>
    )
}
