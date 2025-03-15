import { ChevronRightCircle } from "lucide-react"
import Image from "next/image"



interface ServiceCardProp{
    title: string;
    description?: string;
    imgUrl: string 
}

function servicesCard({title, description, imgUrl}:ServiceCardProp) {
  return (
    <div className="group  relative shadow-sm  shadow-gray-500 dark:shadow-gray-100">
        <Image src={imgUrl} alt='mobile-dev'  width={600} height={600} className='rounded-2xl  w-[700px] h-[250px] object-cover shadow-sm shadow-gray-100' />
        <div className="hidden group-hover:block absolute  left-0 bg-gray-900 opacity-70 text-white inset-0 w-full h-full">
          <div className="flex items-center justify-center flex-col mt-[70px]">
          <p className="text-center">{title}</p>
          <p className="text-center">{description}</p>
          <ChevronRightCircle className='cursor-pointer w-8 h-8'  />
          </div>
      
        </div>
      </div>
  )
}

export default servicesCard