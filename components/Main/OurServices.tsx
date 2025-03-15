import { ChevronRightCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import  ServiceCard  from './servicesCard'

function OurServices() {
  return (
    <div className='bg-rose-50 dark:bg-gray-900 py-4 md:py-8 px-4 '>
      <h1 className='text-yellow-500 text-center font-bold text-4xl uppercase mb-4'>Our Services</h1>
    <div className=" md:mb-10 grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center place-items-center  overflow-x-auto w-full ">

  <ServiceCard title="Web development" description='Website building from scratch' imgUrl="/car6.webp" />
  <ServiceCard title='App development' description='We build mobile apps' imgUrl='/car1.webp'/>
  <ServiceCard  title='Digital Marketing' description='We help your business grow' imgUrl='/cars.webp'/>
  <ServiceCard title='Data analysis ' description='We make future predictions for your business growth' imgUrl='/commercial.webp'/>
   
    
    
      
    </div>
    </div>
  )
}

export default OurServices
