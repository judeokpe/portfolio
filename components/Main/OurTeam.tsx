"use client"

import React, { useState } from "react";
import ServiceCard from "./servicesCard";

function OurTeam() {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="w-full my-[70px]">
      <h2 className="font-bold text-3xl text-green-500 mb-6 text-center">
        Meet Our Team
      </h2>

      {/* Scrollable container */}
      <div className="relative w-full overflow-x-auto">
        <div className="flex gap-6 px-4 py-6 overflow-x-auto scroll-smooth">
         
              <div  className=" w-[300px]  flex-shrink-0">
                <ServiceCard
                  title="FullStack Developer"
                  description="Expert in modern Technology"
                  imgUrl="/jude.jpg"
                  fullname="Jude Ifeanyi"
                  showMore
                />
              </div>
              <div  className=" w-[300px]  flex-shrink-0">
                <ServiceCard
                  title="CEO"
                  description="PM and Company CEO"
                  imgUrl="/car6.webp"
                  fullname="Chinaka Fortunatus"
                  showMore

                />
              </div>
              <div  className=" w-[300px]  flex-shrink-0">
                <ServiceCard
                  title="UI/UX Product Designer"
                  description="UI/UX Designer"
                  imgUrl="/car6.webp"
                  fullname="Mary Martha"
                  showMore
                />
              </div>
              <div  className=" w-[300px]  flex-shrink-0">
                <ServiceCard
                  title="Frontend Expert"
                  description="Website building from scratch with sweet animation"
                  imgUrl="/car6.webp"
                  fullname="Jerry Mark"
                  showMore
                />
              </div>
              <div  className=" w-[300px]  flex-shrink-0">
                <ServiceCard
                  title="Frontend Expert"
                  description="Website building from scratch with sweet animation"
                  imgUrl="/car6.webp"
                  fullname="Jerry Mark"
                  showMore
                />
              </div>
              <div  className=" w-[300px]  flex-shrink-0">
                <ServiceCard
                  title="Frontend Expert"
                  description="Website building from scratch with sweet animation"
                  imgUrl="/car6.webp"
                  fullname="Jerry Mark"
                  showMore
                />
              </div>
              
         
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
