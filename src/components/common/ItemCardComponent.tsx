import Image from "next/image"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"

type ItemCardProps = {
    imageSrc: string
    title: string
    subtitle?: string
    count?: number
}

const ItemCardComponent = ({ imageSrc, title, subtitle, count }: ItemCardProps) => {
    return (


        <Card className="p-0 overflow-hidden gap-0 rounded-md">
            <CardContent className="p-0">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={400}
                    height={260}
                    className="w-full h-40 object-cover"
                />
            </CardContent>

            <CardFooter className="bg-blue-800/80 py-3 px-4">
                <div className=" text-white">
                    <h3 className="text-xl font-semibold leading-tight drop-shadow-sm">{title}</h3>
                    {subtitle && (
                        <p className="text-xs text-[#dbcdcd] opacity-90 mt-1 drop-shadow-sm">{subtitle}
                            <span className="text-white"> {count} nəfər</span>
                        </p>
                    )}
                </div>
            </CardFooter>
        </Card>
    )
}

export default ItemCardComponent