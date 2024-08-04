import Image from "next/image"
import { Avatar } from "../avatar"
import picExemple from "@/app/_assets/medium-shot-woman-living-farmhouse.jpg"
import { HiOutlineDotsVertical } from "react-icons/hi"
export const Card = () => {
    return (
        <div className="flex flex-col gap-3 flex-1 min-w-[170px]">
            <div className=" rounded-xl overflow-hidden flex-1">
                <Image src={picExemple} alt="" />
            </div>
            <div className="flex gap-3">
                <div>
                    <Avatar
                        src="https://randomuser.me/api/portraits/med/men/75.jpg"
                        alt=""
                        size={32}
                    />
                </div>
                <div className="flex flex-col flex-1">
                    <span className="line-clamp-2 leading-5 mb-2   font-semibold">
                        Esse Texto é Referente ao texto principal quero que
                        fique em duas linhas com elpises no final
                    </span>
                    <span className="text-sm text-slate-500">
                        devclub | programação
                    </span>
                    <span className="text-sm text-slate-500">
                        9 mil visualização . há 2 anos
                    </span>
                </div>
                <div>
                    <HiOutlineDotsVertical size={20} />
                </div>
            </div>
        </div>
    )
}
