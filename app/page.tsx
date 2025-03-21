import { Breadcrumb } from '@/components/Breadcrumb';
import Header from '@/components/Layout/Navbar';
import Navbar from '@/components/Layout/Navbar';
import CoreValue from '@/components/Main/CoreValue';
import { Howitworks } from '@/components/Main/Howitworks';
import OurServices from '@/components/Main/OurServices';
import OurTeam from '@/components/Main/OurTeam';
import WhoWeAre from '@/components/Main/WhoWeAre';

import React from 'react';

function Page() {
  return (
    <div>
    <Header>
      <Breadcrumb title= "Empowering innovation with web, App $ Data Solution + Industry Leading Traning" description= "We develop high-performing digital solutions and eqip future tech professionals through hands on bootcamps and expert led courses" imgUrl='/herobest.webp' linkurl1='/' link1='Get Started' link2='Explore Our Course' linkurl2='/bootcamp' link3='Contact Us' linkurl3='/contact' />
    </Header>
        
      <main className="mt-[60px] p-4 mx-auto max-w-7xl px-6 lg:px-8">
       <WhoWeAre />
 
       <OurServices />
             <CoreValue />
       <Howitworks />
    
       <OurTeam />
      </main>
    </div>
  );
}

export default Page;
