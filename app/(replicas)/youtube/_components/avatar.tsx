import Image from "next/image"

interface AvatarProps {
    src: string
    alt: string
}
export const Avatar = ({ src, alt }: AvatarProps) => {
    return (
        <img
            className="rounded-full"
            src={src}
            alt={alt}
            height={24}
            width={24}
        />
    )
}
