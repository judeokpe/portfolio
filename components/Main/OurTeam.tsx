import React from "react";
import ServiceCard from "./servicesCard";

function OurTeam() {
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
                />
              </div>
              <div  className=" w-[300px]  flex-shrink-0">
                <ServiceCard
                  title="Web Development"
                  description="Website building from scratch"
                  imgUrl="/car6.webp"
                />
              </div>
              <div  className=" w-[300px]  flex-shrink-0">
                <ServiceCard
                  title="Web Development"
                  description="Website building from scratch"
                  imgUrl="/car6.webp"
                />
              </div>
              <div  className=" w-[300px]  flex-shrink-0">
                <ServiceCard
                  title="Web Development"
                  description="Website building from scratch"
                  imgUrl="/car6.webp"
                />
              </div>
              <div  className=" w-[300px]  flex-shrink-0">
                <ServiceCard
                  title="Web Development"
                  description="Website building from scratch"
                  imgUrl="/car6.webp"
                />
              </div>
              <div  className=" w-[300px]  flex-shrink-0">
                <ServiceCard
                  title="Web Development"
                  description="Website building from scratch"
                  imgUrl="/car6.webp"
                />
              </div>
              <div  className=" w-[300px]  flex-shrink-0">
                <ServiceCard
                  title="Web Development"
                  description="Website building from scratch"
                  imgUrl="/car6.webp"
                />
              </div>
              <div  className=" w-[300px]  flex-shrink-0">
                <ServiceCard
                  title="Web Development"
                  description="Website building from scratch"
                  imgUrl="/car6.webp"
                />
              </div>
              <div  className=" w-[300px]  flex-shrink-0">
                <ServiceCard
                  title="Web Development"
                  description="Website building from scratch"
                  imgUrl="/car6.webp"
                />
              </div>
              <div  className=" w-[300px]  flex-shrink-0">
                <ServiceCard
                  title="Web Development"
                  description="Website building from scratch"
                  imgUrl="/car6.webp"
                />
              </div>
         
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
