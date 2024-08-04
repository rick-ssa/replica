import Image from "next/image"

interface AvatarProps {
    src: string
    alt: string
    size?: 24 | 32 | 64
}
export const Avatar = ({ src, alt, size = 24 }: AvatarProps) => {
    return (
        <Image
            className="rounded-full"
            src={src}
            alt={alt}
            height={size}
            width={size}
        />
    )
}
