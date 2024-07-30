"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

const links = [
    { link: "/youtube", label: "Youtube" },
    { link: "/netflix", label: "Netflix" },
]

export const Tab = ({ children }: { children: ReactNode }) => {
    const pathName = usePathname()

    return (
        <div className="relative flex flex-1 flex-col pt-4">
            <nav className="flex border-b-2">
                {links.map((linkObj) => {
                    const tabColors =
                        pathName === linkObj.link
                            ? "bg-blue-950 text-blue-200"
                            : "bg-blue-200 text-blue-950"
                    return (
                        <Link
                            className={
                                "w-20 " +
                                "flex items-center justify-center " +
                                " border-r-blue-500 " +
                                "rounded-t-md " +
                                tabColors
                            }
                            href={linkObj.link}
                            key={linkObj.link}
                        >
                            {linkObj.label}
                        </Link>
                    )
                })}
            </nav>
            <div className="realtive flex-1 flex">{children}</div>
        </div>
    )
}
