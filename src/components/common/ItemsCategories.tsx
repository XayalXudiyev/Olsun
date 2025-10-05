"use client"

import { MoveRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import ItemCardComponent from "./ItemCardComponent"
import { useMemo, useState } from "react"

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

const makeStaticItems = (category = "General", count = 10): Item[] =>
    Array.from({ length: count }).map((_, i) => ({
        id: `item-${i}`,
        category,
        imageSrc: "/images/rafting.jpg",
        title: ["Hilton", "Mariot", "Whit City", "Park Side", "Grand Hotel", "City Center", "Beach Resort", "Mountain View", "Garden Hotel", "Luxury Suite"][i % 10],
        subtitle: "Minimum iştirakçı sayı:",
        count: 4 + i,
    }))

const ItemsCategories = ({ category = "Otellər" }: ItemsCategoriesProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const items = useMemo(() => makeStaticItems(category, 10), [category])
    const allItems = useMemo(() => makeStaticItems(category, 50), [category])

    return (
        <section className="mt-10  container mx-auto">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-semibold leading-tight drop-shadow-sm">{category}</h2>
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogTrigger asChild>
                        <div className="flex mr-20 hover:cursor-pointer hover:underline text-sm font-medium text-[#7D7D7D]">
                            Hamısına bax
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-5xl max-h-[90vh] flex flex-col py-4">
                        <DialogHeader className="flex-shrink-0 pb-2 border-b border-gray-200">
                            <DialogTitle className="text-2xl font-bold">{category} - Bütün seçimlər</DialogTitle>
                        </DialogHeader>
                        <div className="flex-1 overflow-y-auto py-">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {allItems.map((item) => (
                                    <ItemCardComponent
                                        key={item.id}
                                        imageSrc={item.imageSrc}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        count={item.count}
                                    />
                                ))}
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                    skipSnaps: false,
                    dragFree: false,
                    slidesToScroll: 1,
                }}
            >
                <CarouselPrevious className="rounded-lg  -top-6 left-[93.5%] size-7 hover:bg-transparent hover:cursor-pointer bg-[#FFEFFE]" />
                <CarouselNext className="rounded-sm -top-6 -right-0
                 size-7 hover:bg-transparent hover:cursor-pointer bg-[#FFEFFE]" />

                <CarouselContent className="items-stretch">
                    {items.map((item) => (
                        <CarouselItem key={item.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4">
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