import { CheckCircle2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function CoreValue() {
  return (
    <div
      className='my-16 md:p-6 p-2 bg-neutral-50 dark:bg-gray-900 dark:shadow-sm dark:shadow-white'
    >
      <h2 className='font-bold text-3xl uppercase py-8 px-2'>Why Choose Us?</h2>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 ">
          <video width="520" height="440" loop autoPlay muted >
            <source src="/coding.mp4" type="video/mp4" />
            {/* <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            /> */}
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="">
          <h3>Why Work With Us</h3>
          <div className="mb-8">

            <p className="flex items-center gap-2 "> <CheckCircle2Icon className='w-8 h-8 text-yellow-700'/> 10+ Years of Experience </p>
            <p className="flex items-center gap-2 "> <CheckCircle2Icon className='w-8 h-8 text-yellow-700'/>  Trusted by 100+ Companies </p>
            <p className="flex items-center gap-2 "> <CheckCircle2Icon className='w-8 h-8 text-yellow-700'/> Hands-On, Industry-Relevant Bootcamps </p>
            <p className="flex items-center gap-2 " > <CheckCircle2Icon className='w-8 h-8 text-yellow-700'/> End-to-End Development & Data Solutions</p>
            <p className="flex items-center gap-2 "> <CheckCircle2Icon className='w-8 h-8 text-yellow-700'/> Certified Expert Instructors</p>
            <p className="flex items-center gap-2 "> <CheckCircle2Icon className='w-8 h-8 text-yellow-700'/> Real-World Client Projects</p>
          </div>
          <div className="">
          <Link className='dark:bg-yellow-700 bg-green-500 p-2 mt-8 rounded-md text-white font-semibold text-md hover:bg-green-700' href="/contact">Contact Us</Link>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default CoreValue