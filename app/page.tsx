import { Breadcrumb } from '@/components/Breadcrumb';
import Header from '@/components/Layout/Navbar';
import Navbar from '@/components/Layout/Navbar';
import { Howitworks } from '@/components/Main/Howitworks';
import OurServices from '@/components/Main/OurServices';
import WhoWeAre from '@/components/Main/WhoWeAre';

import React from 'react';

function Page() {
  return (
    <div>
    <Header>
      <Breadcrumb title= "HOME" description= "Explore our programs and services to find the best fit for your needs." imgUrl='/bg1.webp' linkurl1='/' link1='Home' link2='Explore' linkurl2='/bootcamp' />
    </Header>
        
      <main className="mt-[60px] p-4">
       <WhoWeAre />
       <Howitworks />
       <OurServices />
      </main>
    </div>
  );
}

export default Page;
