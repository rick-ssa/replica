import type { Metadata } from "next"
import "./globals.css"
import { Tab } from "./_components/Tab"
import "dotenv/config"

export const metadata: Metadata = {
    title: "Replica",
    description: "Practicing made some site replicas",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <Tab>{children}</Tab>
            </body>
        </html>
    )
}
