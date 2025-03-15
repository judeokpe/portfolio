import { Breadcrumb } from '@/components/Breadcrumb';
import Header from '@/components/Layout/Navbar';
import Navbar from '@/components/Layout/Navbar';
import { Howitworks } from '@/components/Main/Howitworks';
import OurServices from '@/components/Main/OurServices';
import OurTeam from '@/components/Main/OurTeam';
import WhoWeAre from '@/components/Main/WhoWeAre';

import React from 'react';

function Page() {
  return (
    <div>
    <Header>
      <Breadcrumb title= "HOME" description= "Explore our programs and services to find the best fit for your needs." imgUrl='/herobest.webp' linkurl1='/' link1='Home' link2='Explore' linkurl2='/bootcamp' />
    </Header>
        
      <main className="mt-[60px] p-4 mx-auto max-w-7xl px-6 lg:px-8">
       <WhoWeAre />
       <Howitworks />
       <OurServices />
       <OurTeam />
      </main>
    </div>
  );
}

export default Page;
