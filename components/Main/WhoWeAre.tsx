


import React from "react";
import { Button } from "../ui/button";

function WhoWeAre() {
  return (
    <div className="dark:shadow-sm dark:shadow-white mt-16 dark:bg-gray-900 dark:text-white md:bg-gray-50 pt-32 ">
      <p className="text-green-600 text-center font-bold text-3xl">WHO WE ARE</p>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 p-4 md:p-8 max-w-7xl ">
        {/* Left Section with Background Image and Title */}

        <div className="relative rounded-tl-[50px] rounded-br-[50px]  bg-[url('/devteam.webp')] bg-cover bg-center w-full md:w-1/2 h-[350px]">
          <div
            className="flex items-center justify-center mt-[150px] text-white font-bold text-4xl p-6 text-center "

          >

          </div>
        </div>

        {/* Vertical Blue Separator */}
        {/* <div className="w-6 bg-blue-600 h-40 md:h-auto"></div> */}

        {/* Right Section with Detailed Description */}
        <div className="w-full md:w-2/3 text-gray-700 dark:text-gray-500 space-y-2 text-lg text-justify">
          <p>
            We are a team of passionate professionals driven by innovation, excellence, and a commitment to empowering individuals and businesses. Our expertise spans across technology, education, consulting, and digital solutions.
          </p>
          <p>
            Whether you're an aspiring developer, a business owner, or someone looking to upskill, our cutting-edge bootcamps, training programs, and tech-driven services provide the right tools to help you succeed.
          </p>
          <p>
            Our mission is to bridge the gap between knowledge and real-world application, ensuring that our clients and students gain hands-on experience, industry-relevant skills, and expert guidance to navigate the modern tech landscape.
          </p>
          <p>
            With a focus on scalability, performance, and user experience, we deliver high-quality solutions tailored to meet your needs. Join us and be part of a future driven by technology, learning, and growth.
          </p>
          <Button variant="tertiary" className="rounded-md flex items-center justify-center w-full">Apply</Button>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
