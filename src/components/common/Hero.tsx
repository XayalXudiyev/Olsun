import Image from "next/image"

const Hero = ({
    title = "KOMANDA QURUCULUĞU",
    subtitle = "Sizin Üçün Olsun",
    imageSrc = "/images/main.png",
}: {
    title?: string
    subtitle?: string
    imageSrc?: string
}) => {
    return (
        <header className="w-full my-10">
            <div className="relative w-full h-56 md:h-72 lg:h-44 overflow-hidden ">
                <Image src={imageSrc} alt={title} fill className="object-cover" priority />

                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(70deg, rgba(72,65,116,0.70) 0%, rgba(238,221,237,0.1) 100%)",
                    }}
                />

                <div className="absolute inset-0 bg-black/12" />

                <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-28">
                    <div className="max-w-3xl">
                        <h1 className="text-2xl md:text-4xl lg:text-[2.5rem] font-bold text-white drop-shadow-sm">
                            {title}
                        </h1>
                        <p className="mt-3 text-white/90 text-sm md:text-xl">{subtitle}</p>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center items-center gap-3 bg-[#F3F3F3] rounded-md container mx-auto py-6 mt-12">
                <Image src="/images/nazirlik.png" alt="Nazirlik" className="object-cover" width={100} height={100} />
                <div>
                    <div className="text-[#979797] text-xs md:text-base text-center mt-2">
                        Layihə <span className="font-semibold text-black">Mədəniyyət Nazirliyi</span> tərəfindən dəstəklənir
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero