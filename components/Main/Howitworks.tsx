// "use client"

// import Image from "next/image"
// import HowitworksCard from "./HowitworksCard"

// export const Howitworks = ()=>{
//     return(
//         <div className="flex md:justify-between flex-col md:flex-row my-[70px] gap-4 items-center">
//             <div className="">
//                 <h2 className="font-bold text-3xl text-green-500">How the programs works</h2>

//                 <div className="w-full">
                  
//                    <HowitworksCard 
//   title="Step 1: Apply & Get Screened" 
//   description="Submit your application and go through our screening process to assess your potential, mindset, and readiness for the program."
// />

// <HowitworksCard 
//   title="Step 2: Enroll & Start Learning" 
//   description="Once admitted, join either our intensive onsite bootcamp or flexible regular program and begin your journey into tech."
// />

// <HowitworksCard 
//   title="Step 3: Hands-On Training" 
//   description="Engage in real-world projects and an apprenticeship-style curriculum designed to build a solid programming foundation."
// />

// <HowitworksCard 
//   title="Step 4: Graduate & Get Matched" 
//   description="Top-performing students will either join our company as engineers or be placed with our partner organizations for full-time roles."
// />

//                 </div>
//             </div>
//             <div className="w-[500]">
//                 <Image src={"/breadhome.jpg"} width={600} height={400} alt="student" className="w-[600px] h-[300px] object-cover"/>
//             </div>
//         </div>
//     )
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HowitworksCard from "./HowitworksCard";

export const Howitworks = () => {
  return (
    <div className="flex flex-col md:flex-row md:mb-[100px] bg-gray-50 dark:bg-gray-900 pb-[100px] items-center dark:border-b dark:text-yellow-500 pt-16 justify-between md:my-32 my-16 gap-8 px-4 md:px-8">
      <div className="w-full md:w-1/2">
        <h2 className="font-bold text-3xl text-green-500 mb-6">How the program works</h2>

        <div className="space-y-4">
          <HowitworksCard 
            title="Step 1: Apply & Get Screened" 
            description="Submit your application and go through our screening process to assess your potential, mindset, and readiness for the program."
          />

          <HowitworksCard 
            title="Step 2: Enroll & Start Learning" 
            description="Once admitted, join either our intensive onsite bootcamp or flexible regular program and begin your journey into tech."
          />

          <HowitworksCard 
            title="Step 3: Hands-On Training" 
            description="Engage in real-world projects and an apprenticeship-style curriculum designed to build a solid programming foundation."
          />

          <HowitworksCard 
            title="Step 4: Graduate & Get Matched" 
            description="Top-performing students will either join our company as engineers or be placed with our partner organizations for full-time roles."
          />
        </div>
      </div>
      
      <div className="hidden relative w-full md:w-1/2 md:flex justify-center items-center">
        <motion.div 
          initial={{ scale: 0.9 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 1 }}
        >
          <Image 
            src="/breadhome.jpg" 
            width={600} 
            height={500} 
            alt="student" 
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.img 
          src="/breadhome.jpg" 
          alt="floating" 
          className="absolute w-[200px] h-[100px] -z-20 -top-20 left-5"
          animate={{ rotate: [0, 5, 0], y: [0, 10, 0] }}
          

          transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.img 
          src="/breadhome.jpg" 
          alt="floating" 
          className="absolute w-[200px] h-[100px] -z-20 -top-20 right-5"
          animate={{ rotate: [0, 5, 0], y: [10, 0, 10] }}
          

          transition={{ repeat: Infinity, duration: 2 }}
        />
        
        <motion.img 
          src="/breadhome.jpg" 
          alt="floating" 
          className="absolute w-[200px] h-[100px]  -bottom-10 right-10"
          animate={{ x: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 3 }}
        />
        
        <motion.img 
          src="/breadprogram.jpg" 
          alt="floating" 
          className="absolute w-[200px] h-[100px]  bottom-0 left-10"
          animate={{ rotate: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 4 }}
        />
      </div>
    </div>
  );
};
