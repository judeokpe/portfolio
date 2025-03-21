import React from 'react'
import ServiceCard from './servicesCard'
import { Button } from '../ui/button'
import Link from 'next/link'
function Training() {
  return (
    <div className='bg-gray-50 dark:bg-gray-700 p-2 md:p-6 text-center gap-4'>
        <h2>Upskill with Our Training Programs </h2>
        <div className="w-32 h-1 mb-4 mx-auto bg-yellow-700" />
        <p className="text-gray-500 dark:text-gray-300">Master Web & App Development, Data Analysis, and AI with our industry-leading bootcamps and certification courses</p>

        <div className="mt-4 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            <ServiceCard title="Full-Stack Web Development Bootcamp" showMore description='Master HTML, CSS, JavaScript, React, and Node.js' imgUrl='/webdev.jpg'/>
            <ServiceCard title="Data Analysis & AI Bootcamp" description='Learn Python, SQL, Power BI, and AI-driven analytics.' imgUrl='/webdev.jpg' showMore/>
            <ServiceCard title="Mobile App Development " imgUrl='/webdev.jpg' description='Build iOS & Android apps with Flutter and React Native.' showMore/>
            <ServiceCard title="CyberSecurity" imgUrl='/webdev.jpg' description='Mastering the act of securing the network space' showMore/>
           
        </div>
        <Link href={"/courses"} className=''> <Button   className='p-1 bg-green-500 text-white rounded-md text-xl mt-4 dark:bg-yellow-700'>View All Courses</Button></Link>
    </div>
  )
}

export default Training