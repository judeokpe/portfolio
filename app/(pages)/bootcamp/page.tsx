import WhyUs from '@/components/Bootcamp/WhyUs'
import { Breadcrumb } from '@/components/Breadcrumb'
import Header from '@/components/Layout/Navbar'
import React from 'react'


function Bootcamp() {
  return (
    <div>
        <Header>
        <Breadcrumb title="Bootcamps" description="Master In-Demand Tech Skills & Launch Your Career!" videoUrl='/bootcampvid.mp4' linkurl1='/' link1='Start Learning Today' link2='Contact Us' linkurl2='/bootcamp' />
      </Header>
      <main className='pb-[40px] -pt-[60px] p-2 mx-auto max-w-7xl px-4 lg:px-8'>
      <WhyUs/>
      </main>
   
    </div>
  )
}

export default Bootcamp