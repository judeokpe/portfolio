import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function Quote() {
  return (
    <div>
        <h1 className='text-center'>Let’s Build Something Amazing Together!</h1>
      <p className='text-gray-500 text-center'>Whether you need a digital solution or want to level up your skills, we’re here to help.</p>

      <div className="flex items-center justify-center md:gap-8 gap-2">
        <Link href={"#"}>
        <Button>
        Get a Quote

        </Button>
        </Link>
        <Link href={"#"}>
        <Button variant={'secondary'} className='hover:text-white'>
        Enroll Now
      

        </Button>
        </Link>
        <Link href={"#"}>
        <Button variant={'tertiary'} className=''>
        Contact Us

        </Button>
        </Link>
      </div>
    </div>
  )
}

export default Quote
