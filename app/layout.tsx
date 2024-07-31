import type { Metadata } from "next"
import "./globals.css"
import { Tab } from "./_components/Tab"
import "dotenv/config"
import { headers } from "next/headers"

export const metadata: Metadata = {
    title: "Replica",
    description: "Practicing made some site replicas",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    console.log(headers().get("x-forwarded-for"))
    return (
        <html lang="en">
            <body>
                <Tab>{children}</Tab>
            </body>
        </html>
    )
}
