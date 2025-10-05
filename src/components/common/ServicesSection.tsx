import Image from "next/image"

type ServiceItem = {
    id: string
    category: string
    title: string
    description: string
    imageSrc: string
    imagePosition: "left" | "right"
}

const serviceItems: ServiceItem[] = [
    {
        id: "1",
        category: "Nəqliyyat",
        title: "Nəqliyyatla təmin edirik",
        description: "Biz sizi və komandanızı təhlükəsiz və komfortlu nəqliyyat vasitələri ilə təmin edirik. Modern avtobuslarımız və peşəkar sürücülərimiz vasitəsilə istədiyiniz məkana rahat şəkildə çatmanızı təmin edirik. Hər növ qrup ölçüsü üçün uyğun nəqliyyat həlləri təklif edirik.",
        imageSrc: "/images/services/traffic.svg",
        imagePosition: "left"
    },
    {
        id: "2",
        category: "Hotel",
        title: "Hotel rezervasiyası",
        description: "Büdcənizə və tələblərinizə uyğun ən yaxşı yaşayış yerlərini sizin üçün seçirik və rezervasiya edirik. Beş ulduzlu lüks hotellərdən tutmuş boutique mehmanxanalara qədər geniş seçimimiz ilə hər zövqə uyğun variantlar təklif edirik. Komfort və keyfiyyəti bir araya gətirən yaşayış təcrübəsi vəd edirik.",
        imageSrc: "/images/services/hotel-reservation.svg",
        imagePosition: "right"
    },
    {
        id: "3",
        category: "Nəqliyyat",
        title: "Nəqliyyatla təmin edirik",
        description: "Səyahət planınızın hər mərhələsində etibarlı nəqliyyat dəstəyi təqdim edirik. Müasir texnologiya ilə təchiz edilmiş avtobuslarımız, təcrübəli sürücülərimiz və 24/7 dəstək xidmətimiz ilə səyahət təcrübənizi ən yüksək səviyyədə yaşayın.",
        imageSrc: "/images/services/traffic.svg",
        imagePosition: "left"
    },
    {
        id: "4",
        category: "Hotel",
        title: "Hotel rezervasiyası",
        description: "Ətraflı araşdırma və partnyorlarımızla sıx əməkdaşlıq əsasında sizə ideal hotel seçimlərini təqdim edirik. Lokasiya, xidmət keyfiyyəti və qiymət baxımından optimal variantları təmin edirik. Səyahətinizin hər anını rahat və xatirələndirəcək şəkildə keçirməyiniz üçün ən yaxşı rezervasiya şərtlərini təmin edirik.",
        imageSrc: "/images/services/hotel-reservation.svg",
        imagePosition: "right"
    }
]

const ServicesSection = () => {
    return (
        <section className="container mx-auto py-16">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-4">
                    Sizin üçün nələr edirik?
                </h2>
            </div>

            <div className="space-y-20">
                {serviceItems.map((item) => (
                    <div
                        key={item.id}
                        className={`flex flex-col ${item.imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
                            } items-center gap-5 lg:gap-10`}
                    >
                        <div className="flex-1 space-y-4">
                            <div className="inline-block">
                                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                                    {item.category}
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 ">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-[17px] text-justify ">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex-1">
                            <div className="relative rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={item.imageSrc}
                                    alt={item.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-64 object-center"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ServicesSection