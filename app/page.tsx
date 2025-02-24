import Navbar from '@/components/Layout/Navbar';
import WhoWeAre from '@/components/Main/WhoWeAre';
import React from 'react';

function Page() {
  return (
    <div>
      <Navbar/ >
        
      <main className="mt-[60px] p-4">
       <WhoWeAre />
      </main>
    </div>
  );
}

export default Page;
