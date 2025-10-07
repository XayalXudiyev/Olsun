import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"

type Props = {
    params: { id: string }
}

export default function DetailsPage({ params }: Props) {
    const { id } = params

    if (!id) return notFound()

    return (
        <main className="w-full py-12">
            <div className="container mx-auto">
                <div className="bg-[#F2F2F2] rounded-2xl shadow-sm p-3 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <div className="relative rounded-lg overflow-hidden">
                        <Carousel opts={{ align: "center", loop: true, skipSnaps: false }}>
                            <CarouselPrevious icon={<ChevronLeft />} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-20 rounded-sm border-none bg-black/25 hover:bg-black/30 hover:text-white text-white " />

                            <CarouselNext icon={<ChevronRight />} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-20 rounded-sm border-none bg-black/25 hover:bg-black/30 hover:text-white text-white " />


                            <CarouselContent className="overflow-hidden">
                                <CarouselItem className="pl-4">
                                    <Image
                                        src="/images/Details/hotel.jpg"
                                        alt="Detail image"
                                        width={1000}
                                        height={600}
                                        className="w-full h-80 md:h-80 object-cover rounded-lg"
                                    />
                                </CarouselItem>
                                <CarouselItem className="pl-4">
                                    <Image
                                        src="/images/Details/hotel.jpg"
                                        alt="Detail image 2"
                                        width={1000}
                                        height={600}
                                        className="w-full h-80 md:h-80 object-cover rounded-lg"
                                    />
                                </CarouselItem>
                                <CarouselItem className="pl-4">
                                    <Image
                                        src="/images/Details/hotel.jpg"
                                        alt="Detail image 3"
                                        width={1000}
                                        height={600}
                                        className="w-full h-80 md:h-80 object-cover rounded-lg"
                                    />
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>

                    <div className="flex flex-col justify-between bg-white p-3 rounded-lg shadow-sm h-full ">
                        <div className=" px-4 rounded-md bg-[#F0DBF3] text-[#484174] text-center text-2xl font-bold py-3">142 AZN/<span className="text-sm font-normal">1 nəfər</span></div>

                        <div>
                            <div className="bg-purple-100 w-fit text-purple-600 px-3 py-1 rounded-full text-sm font-medium">Hotel</div>

                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 ">OLSUN HOTEL</h1>
                            <div className="flex flex-col">
                                <div className="text-yellow-400">★★★★★</div>
                                <div className="text-gray-600">İştirakçı sayı: <strong className="text-gray-800">50-60 nəfər</strong></div>
                            </div>


                        </div>

                        <div className="mb-2">
                            <Button type="button" className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-lg">
                                <Image src="/images/icons/Vector.svg" alt="icon" width={18} height={18} />
                                Müraciət göndər
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
