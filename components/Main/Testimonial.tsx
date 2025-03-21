// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// const testimonials = [
//   {
//     type: "Client",
//     text: "Our company saw a 3x increase in customer engagement after working with this team!",
//     author: "CEO, Tech Startup",
//   },
//   {
//     type: "Student",
//     text: "I landed my first job as a data analyst within 3 months of completing the bootcamp!",
//     author: "John D., Bootcamp Graduate",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <div className="flex flex-col items-center justify-center p-6 transition-colors duration-300 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
//       <div className="flex justify-between w-full max-w-4xl">
//         <h2 className="text-3xl font-bold text-center text-yellow-700">Hear From Our Clients & Students</h2>
//       </div>
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         modules={[Autoplay]}
//         className="mt-6 w-full max-w-4xl"
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide key={index}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {testimonials.map((item, idx) => (
//                 <Card key={idx} className="p-6 text-center shadow-lg">
//                   <CardContent>
//                     <p className="text-lg italic">"{item.text}"</p>
//                     <p className="mt-2 font-semibold text-green-500">– {item.author}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="mt-6">
//         <Button variant="outline" className="px-6 py-2 text-lg rounded-lg">
//           Read More Reviews
//         </Button>
//       </div>
//     </div>
//   );
// }



"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    type: "Client",
    text: "Our company saw a 3x increase in customer engagement after working with this team!",
    author: "CEO, Tech Startup",
  },
  {
    type: "Student",
    text: "I landed my first job as a data analyst within 3 months of completing the bootcamp!",
    author: "John D., Bootcamp Graduate",
  },
];

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center p-6 transition-colors duration-300 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="flex justify-between w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-yellow-700">Hear From Our Clients & Students</h2>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mt-6 w-full max-w-4xl"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card className="p-6 text-center shadow-lg">
              <CardContent>
                <p className="text-lg italic">"{testimonial.text}"</p>
                <p className="mt-2 font-semibold text-green-500">– {testimonial.author}</p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-6">
        <Button variant="outline" className="px-6 py-2 text-lg rounded-lg">
          Read More Reviews
        </Button>
      </div>
    </div>
  );
}
