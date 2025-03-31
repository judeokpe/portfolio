import { Breadcrumb } from '@/components/Breadcrumb'
import Header from '@/components/Layout/Navbar'
import React from 'react'


function Bootcamp() {
  return (
    <div>
       <Header>
      <Breadcrumb title= "Empowering innovation with web, App $ Data Solution + Industry Leading Traning" description= "We develop high-performing digital solutions and eqip future tech professionals through hands on bootcamps and expert led courses" videoUrl='/coding.mp4' linkurl1='/' link1='Get Started' link2='Explore Our Course' linkurl2='/bootcamp' link3='Contact Us' linkurl3='/contact' />
    </Header>
      Bootcamp
    </div>
  )
}

export default Bootcamp