// "use client"

// import { ChevronRight, ChevronRightCircle } from 'lucide-react'
// import Image from 'next/image'
// import React from 'react'
// import  ServiceCard  from './servicesCard'
// import { Button } from '../ui/button'
// import Link from 'next/link'

// function OurServices() {
//   return (
//     <div className='bg-[#f5f5f5] dark:bg-gray-900 py-4 md:py-8  md:px-4 '>
//       <h1 className='text-yellow-500 text-center font-bold text-4xl uppercase mb-4'>What We Do</h1>
//       <p className='text-gray-500 text-center mb-6'>From cutting-edge web & app development to insightful data analytics and career-transforming bootcamps, we deliver top-tier solutions</p>
//     <div className=" md:mb-10 grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center place-items-center  overflow-x-auto w-full ">

//   <ServiceCard title="Web & App development" description='Custom websites, mobile apps and software solutions tailored for your business success' imgUrl="/mobileapp.webp" showMore />
//   <ServiceCard title='BootCamp Training' description='Learn in-demand tech skills and get job-ready with our expert-led courses' imgUrl='/bootcamp.webp' showMore/>
//   <ServiceCard  title='Digital Marketing' description='Boost your brand’s online presence with data-driven marketing strategies, SEO, social media management, and targeted advertising to drive growth and engagement.' imgUrl='/marketing.webp' showMore/>
//   <ServiceCard title='Data analysis & AI ' description='Transform raw data into meaningful insights with our advanced analytics and AI-driven solutions' imgUrl='/webdev.jpg' showMore/>
   
    
    
      
//     </div>
//     <Link href={'/services'} className='text-center flex items-center justify-center bg-green-600 text-white w-[120px] mx-auto dark:bg-yellow-700'>
//     <Button className="flex">More Services <ChevronRight />
//     </Button>
//     </Link>
//     </div>
//   )
// }

// export default OurServices

"use client"

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import ServiceCard from './servicesCard'
import { Button } from '../ui/button'
import Link from 'next/link'

function OurServices() {
  return (
    <div className='bg-[#f5f5f5] dark:bg-gray-900 py-4 md:py-8 px-4'>
      <h1 className='text-yellow-500 text-center font-bold text-4xl uppercase mb-4'>What We Do</h1>
      <p className='text-gray-500 text-center mb-6'>
        From cutting-edge web & app development to insightful data analytics and career-transforming bootcamps, we deliver top-tier solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center place-items-center w-full">
        <ServiceCard 
          title="Web & App Development" 
          description="Custom websites, mobile apps, and software solutions tailored for your business success."
          imgUrl="/mobileapp.webp" 
          showMore 
        />
        <ServiceCard 
          title="Bootcamp Training" 
          description="Learn in-demand tech skills and get job-ready with our expert-led courses."
          imgUrl="/bootcamp.webp" 
          showMore
        />
        <ServiceCard  
          title="Digital Marketing" 
          description="Boost your brand’s online presence with data-driven marketing strategies, SEO, social media management, and targeted advertising to drive growth and engagement."
          imgUrl="/marketing.webp" 
          showMore
        />
        <ServiceCard 
          title="Data Analytics & AI" 
          description="Transform raw data into meaningful insights with our advanced analytics and AI-driven solutions."
          imgUrl="/webdev.jpg" 
          showMore
        />
      </div>

      <div className="flex justify-center mt-6">
        <Link href="/services">
          <Button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md dark:bg-yellow-700 hover:bg-green-700 transition">
            More Services <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default OurServices
