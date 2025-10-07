import Image from "next/image"
import Link from "next/link"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"

type ItemCardProps = {
    id?: string | number
    imageSrc: string
    title: string
    subtitle?: string
    count?: number
}

const ItemCardComponent = ({ id, imageSrc, title, subtitle, count }: ItemCardProps) => {
    const wrapper = (
        <Card className="p-0 overflow-hidden gap-0 rounded-lg h-full relative group">
            <CardContent className="p-0 relative">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            </CardContent>
            <CardFooter className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-sm">
                <div className="text-white w-full">
                    <h3 className="text-xl font-semibold leading-tight">{title}</h3>
                    {subtitle && (
                        <p className="text-xs text-gray-200 mt-1">
                            {subtitle}
                            <span className="text-white font-medium"> {count} nəfər</span>
                        </p>
                    )}
                </div>
            </CardFooter>
        </Card>
    )

    if (id) {
        return (
            <Link href={`/details/${id}`} className="block">
                {wrapper}
            </Link>
        )
    }

    return wrapper
}

export default ItemCardComponent