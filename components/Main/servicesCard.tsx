"use client"

import { ChevronRightCircle } from "lucide-react"
import Image from "next/image"




interface ServiceCardProp{
    title: string;  //postion in other context
    description?: string;
    imgUrl: string;
    showMore?: boolean;
    fullname?: string

}

function servicesCard({title, description, imgUrl, showMore, fullname}:ServiceCardProp) {

  return (
    <div className=" shadow-md dark:border bg-white dark:bg-gray-800 p-2">
    <div className="group  relative ">
        <Image src={imgUrl} alt='mobile-dev'  width={600} height={600} className='rounded-2xl  w-[700px] h-[250px] object-cover shadow-sm shadow-gray-100' />
        <div className="hidden group-hover:block absolute  left-0 bg-gray-900 opacity-70 text-white inset-0 w-full h-full">
          <div className="flex items-center justify-center flex-col mt-[40px]">
          <p className="text-center underline">{title}</p>
          <p className="text-center p-1">{description}</p>
          <ChevronRightCircle className='cursor-pointer w-8 h-8'  />
          </div>
      
        </div>
      </div>
      {showMore && (
         <div className="mt-4 border-t-2 dark:border-gray-200 border-yellow-500">
          <p className="pt-2 text-center text-green-700 uppercase font-bold">{fullname}</p>
         <p className="pt-2 text text-green-500 uppercase font-bold py-3">{title}</p>
         <p className="text-gray-500 text-wrap">{description}</p>
       </div>
      )}
       
      </div>
  )
}

export default servicesCard