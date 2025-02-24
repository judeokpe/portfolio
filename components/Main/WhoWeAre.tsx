// import React from "react";

// function WhoWeAre() {
//   return (
//     <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 p-8 max-w-7xl mx-auto">
//       {/* Left Section with Background Image */}
//       <div
//         className="relative flex items-center justify-center w-full md:w-1/3 h-48 md:h-auto bg-cover bg-center text-white font-bold text-4xl p-6 text-center"
//         style={{ backgroundImage: "url('/breadprogram.jpg)" }}
//       >
//         <span className="text-green-600">WHO WE ARE</span>
//       </div>

//       {/* Vertical Blue Separator */}
//       <div className="w-1 bg-blue-600 h-40 md:h-auto"></div>

//       {/* Right Section with Description */}
//       <div className="w-full md:w-2/3 text-gray-700 space-y-4 text-lg">
//         <p>
//           We are a team of dedicated professionals committed to delivering top-notch
//           services in various domains. Our expertise spans across technology, education,
//           consulting, and beyond.
//         </p>
//         <p>
//           Whether you're looking for innovative tech solutions, expert-led bootcamps,
//           or professional guidance, we've got you covered. Join us on this journey
//           to excellence.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default WhoWeAre;


import React from "react";
import { Button } from "../ui/button";

function WhoWeAre() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 p-8 max-w-7xl mx-auto bg-gray-200">
      {/* Left Section with Background Image and Title */}
      <div className="relative  bg-[url('/breadhome.jpg')] bg-cover bg-center w-full md:w-1/2 h-[350px]">
      <div
        className="flex items-center justify-center  text-white font-bold text-4xl p-6 text-center "
     
      >
        <span className="text-green-600">WHO WE ARE</span>
      </div>
      </div>

      {/* Vertical Blue Separator */}
      {/* <div className="w-6 bg-blue-600 h-40 md:h-auto"></div> */}

      {/* Right Section with Detailed Description */}
      <div className="w-full md:w-2/3 text-gray-700 space-y-2 text-lg text-justify">
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
        <Button className="bg-green-500 text-white rounded-md ">Apply</Button>
      </div>
    </div>
  );
}

export default WhoWeAre;
