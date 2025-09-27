"use client"

import { MoveRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import ItemCardComponent from "./ItemCardComponent"
import { useMemo } from "react"

type Item = {
    id: string | number
    category: string
    imageSrc: string
    title: string
    subtitle?: string
    count?: number
}

type ItemsCategoriesProps = {
    category?: string
}

const makeStaticItems = (category = "General"): Item[] =>
    Array.from({ length: 10 }).map((_, i) => ({
        id: `item-${i}`,
        category,
        imageSrc: "/images/hilton.jpg",
        title: ["Hilton", "Mariot", "Whit City", "Park Side"][i % 4],
        subtitle: "Minimum iştirakçı sayı:",
        count: 4 + i,
    }))

const ItemsCategories = ({ category = "Otellər" }: ItemsCategoriesProps) => {
    const items = useMemo(() => makeStaticItems(category), [category])

    return (
        <section className="mt-10  container mx-auto">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold leading-tight drop-shadow-sm">{category}</h2>
                <div className="flex gap-2">
                    <MoveRight />
                </div>
            </div>

            <Carousel>
                <CarouselPrevious className="hidden md:block border-none " />
                <CarouselNext className="hidden md:block border-none " />

                <CarouselContent className="items-stretch">
                    {items.map((item) => (
                        <CarouselItem key={item.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4">
                            <ItemCardComponent
                                imageSrc={item.imageSrc}
                                title={item.title}
                                subtitle={item.subtitle}
                                count={item.count}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}

export default ItemsCategories