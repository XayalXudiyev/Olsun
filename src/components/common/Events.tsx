
import Image from "next/image"

type EventItem = {
  id: string
  name: string
  icon: string
  backgroundColor: string
}

const eventItems: EventItem[] = [
  {
    id: "1",
    name: "Yeni il tədbiriləri",
    icon: "/images/events/cocktails.svg",
    backgroundColor: "bg-pink-100"
  },
  {
    id: "2", 
    name: "Kamplar",
    icon: "/images/events/tent.svg",
    backgroundColor: "bg-orange-100"
  },
  {
    id: "3",
    name: "Səhər yeməkləri", 
    icon: "/images/events/cup-of-tea.svg",
    backgroundColor: "bg-blue-100"
  },
  {
    id: "4",
    name: "Yemək bişirmə",
    icon: "/images/events/cooking.svg", 
    backgroundColor: "bg-gray-100"
  },
  {
    id: "5",
    name: "Futbol stadionları",
    icon: "/images/events/goal-post.svg",
    backgroundColor: "bg-green-100"
  },
  {
    id: "6",
    name: "Təbiət səyahəti",
    icon: "/images/events/campfire.svg",
    backgroundColor: "bg-amber-100"
  }
]

const Events = () => {
  return (
    <section className="container mx-auto pb-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {eventItems.map((item) => (
          <div
            key={item.id}
            className={`${item.backgroundColor} rounded-2xl px-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow cursor-pointer min-h-[120px]`}
          >
            <div className="mb-1">
              <Image
                src={item.icon}
                alt={item.name}
                width={48}
                height={48}
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-800 ">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Events