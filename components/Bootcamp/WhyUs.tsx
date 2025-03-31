// import { CheckSquare2 } from 'lucide-react'
// import Image from 'next/image'
// import React from 'react'

// function WhyUs() {
//   return (
//     <div>
//         <div className="flex md:flex-row flex-col gap-16 pt-8 justify-center">
//             <div className="">
//                 <Image src={"/bootcamp.png"} alt="coding image" width={600} height={600}  className='w-[500px] h-[400px] object-cover rounded-tr-[50px] rounded-bl-[50px]'/>
//             </div>
//             <div className="">
//                 <h2>Why Choose Our Bootcamp?</h2>
//                 <div className="space-y-4 mt-6">
//                     <p className='flex items-center'> <CheckSquare2 className='text-green-500 w-6 h-6'/> Industry-expert instructors</p>
//                     <p className='flex items-center'> <CheckSquare2 className='text-green-500 w-6 h-6'/>Hands-on projects & real-world applications</p>
//                     <p className='flex items-center'> <CheckSquare2 className='text-green-500 w-6 h-6'/> Personalized mentorship & career coaching</p>
//                     <p className='flex items-center'> <CheckSquare2 className='text-green-500 w-6 h-6'/> Flexible learning (online, hybrid, in-person options</p>
//                     <p className='flex items-center'> <CheckSquare2 className='text-green-500 w-6 h-6'/> Certifications recognized by top companies

// </p>
                    
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default WhyUs

import { CheckSquare2 } from "lucide-react";
import Image from "next/image";
import React from "react";

function WhyUs() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/bootcamp.png"
            alt="Coding Bootcamp"
            width={600}
            height={400}
            priority
            className="w-full max-w-[500px] h-auto object-cover rounded-tr-[50px] rounded-bl-[50px] shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Why Choose Our Bootcamp?
          </h2>

          <div className="mt-6 space-y-4">
            {[
              "Industry-expert instructors",
              "Hands-on projects & real-world applications",
              "Personalized mentorship & career coaching",
              "Flexible learning (online, hybrid, in-person)",
              "Certifications recognized by top companies",
            ].map((item, index) => (
              <p key={index} className="flex items-center text-lg text-gray-700 dark:text-gray-300">
                <CheckSquare2 className="text-green-500 w-6 h-6 mr-2" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
