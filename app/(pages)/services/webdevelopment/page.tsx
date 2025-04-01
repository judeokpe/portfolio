"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Header from "@/components/Layout/Navbar";
import { FileText, Download, Calendar, DollarSign, CheckCircle, Briefcase } from "lucide-react"; // Import illustrations from lucide-react

const WebDevelopmentCourse = () => {
  return (
    <>
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="dark:bg-gray-900 bg-white text-black dark:text-white min-h-screen py-16 px-8"
      >
        <div className="pb-[40px] -pt-[60px] p-2 mx-auto max-w-7xl px-4 lg:px-8">

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-600 mb-4">🖥️ Web Development</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              Learn to build websites and web applications, from front-end design to back-end development.
            </p>
          </div>

          {/* Course Details Section */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-cover bg-center rounded-lg h-96" style={{ backgroundImage: "url('/webdev.jpg')" }}></div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Course Overview</h2>
              <p className="text-lg text-gray-700 dark:text-gray-400">
                This comprehensive Web Development course will take you through the essentials of both front-end and back-end web development. You will learn how to create dynamic and responsive websites using HTML, CSS, JavaScript, and popular frameworks like React and Node.js.
              </p>
              <ul className="list-disc pl-6">
                <li>Frontend development with HTML, CSS, and JavaScript</li>
                <li>Backend development with Node.js and Express</li>
                <li>Database integration using MongoDB</li>
                <li>Responsive web design and user experience principles</li>
                <li>Hands-on projects to build real-world applications</li>
              </ul>
            </div>
          </div>

          {/* Course Syllabus Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-6">Course Syllabus</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Module 1: Introduction to Web Development</h3>
                <p className="text-lg text-gray-700 dark:text-gray-400">
                  Understand the basics of web development and how websites work. Learn the tools and technologies required for building websites.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Module 2: Frontend Development</h3>
                <p className="text-lg text-gray-700 dark:text-gray-400">
                  Learn HTML, CSS, and JavaScript to build interactive and responsive websites. Explore popular frameworks like React to enhance your front-end skills.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Module 3: Backend Development</h3>
                <p className="text-lg text-gray-700 dark:text-gray-400">
                  Dive into server-side development with Node.js and Express. Learn how to set up REST APIs and work with databases like MongoDB.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Module 4: Building Projects</h3>
                <p className="text-lg text-gray-700 dark:text-gray-400">
                  Apply your knowledge by working on hands-on projects that simulate real-world web development tasks.
                </p>
              </div>
            </div>
          </div>

          {/* Duration, Pricing, Requirements Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {/* Duration */}
            <div className="space-y-4">
              <Calendar className="text-green-600" size={40} />
              <h3 className="text-2xl font-semibold">Duration</h3>
              <p className="text-lg text-gray-700 dark:text-gray-400">
                12 weeks (Part-Time). Learn at your own pace, with weekly assignments and hands-on projects.
              </p>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <DollarSign className="text-green-600" size={40} />
              <h3 className="text-2xl font-semibold">Pricing</h3>
              <p className="text-lg text-gray-700 dark:text-gray-400">
                $799 for full course access. Financing options and installment plans are available. Scholarships may also be offered based on need.
              </p>
            </div>

            {/* Requirements */}
            <div className="space-y-4">
              <CheckCircle className="text-green-600" size={40} />
              <h3 className="text-2xl font-semibold">Requirements</h3>
              <p className="text-lg text-gray-700 dark:text-gray-400">
                No prior experience is necessary. This course is beginner-friendly, but basic knowledge of computers and the internet is recommended.
              </p>
            </div>
          </div>

          {/* What You'll Learn & Build Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-6">What You’ll Learn & Build</h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
              By the end of the course, you will have developed the skills needed to build a complete website or web application, both on the front-end and back-end. You'll also work on hands-on projects like a portfolio website, a blog application, and a small e-commerce site.
            </p>
          </div>

          {/* Career Outcomes Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-6">Career Outcomes</h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
              After completing this course, you will be qualified for job roles such as:
            </p>
            <ul className="list-disc pl-6">
              <li>Frontend Developer</li>
              <li>Backend Developer</li>
              <li>Full Stack Developer</li>
            </ul>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-400">
              The average salary for web developers in the U.S. is around $75,000 per year, with demand for developers expected to grow by 8% over the next decade.
            </p>
          </div>

          {/* Download Curriculum Section */}
          <div className="mt-12 text-center">
            <a href="/pdf/Django.4.By.Example.4th.Edition.Antonio.Mele.Bob.Belderbos.Packt.9781801813051.EBooksWorld.ir.pdf" download>
              <Button variant="secondary" className="px-8 py-3 text-xl flex items-center justify-center">
                <Download className="mr-2" size={24} /> Download Curriculum
              </Button>
            </a>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button variant="tertiary" className="px-8 py-3 text-xl">
              Enroll Now
            </Button>
          </div>

        </div>
      </motion.div>
    </>
  );
};

export default WebDevelopmentCourse;



// "use client";

// import React from "react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import Header from "@/components/Layout/Navbar";

// const WebDevelopmentCourse = () => {
//   return (
//     <>
//       <Header />

//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeInOut" }}
//         className="dark:bg-gray-900 bg-white text-black dark:text-white min-h-screen py-16 px-8"
//       >
//         <div className="pb-[40px] -pt-[60px] p-2 mx-auto max-w-7xl px-4 lg:px-8">

//           {/* Header Section */}
//           <div className="text-center">
//             <h1 className="text-4xl font-bold text-green-600 mb-4">🖥️ Web Development</h1>
//             <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
//               Learn to build websites and web applications, from front-end design to back-end development.
//             </p>
//           </div>

//           {/* Course Details Section */}
//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="bg-cover bg-center rounded-lg h-96" style={{ backgroundImage: "url('/webdev.jpg')" }}></div>

//             <div className="space-y-4">
//               <h2 className="text-3xl font-bold">Course Overview</h2>
//               <p className="text-lg text-gray-700 dark:text-gray-400">
//                 This comprehensive Web Development course will take you through the essentials of both front-end and back-end web development. You will learn how to create dynamic and responsive websites using HTML, CSS, JavaScript, and popular frameworks like React and Node.js.
//               </p>
//               <ul className="list-disc pl-6">
//                 <li>Frontend development with HTML, CSS, and JavaScript</li>
//                 <li>Backend development with Node.js and Express</li>
//                 <li>Database integration using MongoDB</li>
//                 <li>Responsive web design and user experience principles</li>
//                 <li>Hands-on projects to build real-world applications</li>
//               </ul>
//             </div>
//           </div>

//           {/* Course Syllabus Section */}
//           <div className="mt-12">
//             <h2 className="text-3xl font-bold text-center mb-6">Course Syllabus</h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="space-y-4">
//                 <h3 className="text-2xl font-semibold">Module 1: Introduction to Web Development</h3>
//                 <p className="text-lg text-gray-700 dark:text-gray-400">
//                   Understand the basics of web development and how websites work. Learn the tools and technologies required for building websites.
//                 </p>
//               </div>
//               <div className="space-y-4">
//                 <h3 className="text-2xl font-semibold">Module 2: Frontend Development</h3>
//                 <p className="text-lg text-gray-700 dark:text-gray-400">
//                   Learn HTML, CSS, and JavaScript to build interactive and responsive websites. Explore popular frameworks like React to enhance your front-end skills.
//                 </p>
//               </div>
//               <div className="space-y-4">
//                 <h3 className="text-2xl font-semibold">Module 3: Backend Development</h3>
//                 <p className="text-lg text-gray-700 dark:text-gray-400">
//                   Dive into server-side development with Node.js and Express. Learn how to set up REST APIs and work with databases like MongoDB.
//                 </p>
//               </div>
//               <div className="space-y-4">
//                 <h3 className="text-2xl font-semibold">Module 4: Building Projects</h3>
//                 <p className="text-lg text-gray-700 dark:text-gray-400">
//                   Apply your knowledge by working on hands-on projects that simulate real-world web development tasks.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Duration, Pricing, Requirements Section */}
//           <div className="mt-12 grid md:grid-cols-3 gap-8">
//             {/* Duration */}
//             <div className="space-y-4">
//               <h3 className="text-2xl font-semibold">Duration</h3>
//               <p className="text-lg text-gray-700 dark:text-gray-400">
//                 12 weeks (Part-Time). Learn at your own pace, with weekly assignments and hands-on projects.
//               </p>
//             </div>

//             {/* Pricing */}
//             <div className="space-y-4">
//               <h3 className="text-2xl font-semibold">Pricing</h3>
//               <p className="text-lg text-gray-700 dark:text-gray-400">
//                 $799 for full course access. Financing options and installment plans are available. Scholarships may also be offered based on need.
//               </p>
//             </div>

//             {/* Requirements */}
//             <div className="space-y-4">
//               <h3 className="text-2xl font-semibold">Requirements</h3>
//               <p className="text-lg text-gray-700 dark:text-gray-400">
//                 No prior experience is necessary. This course is beginner-friendly, but basic knowledge of computers and the internet is recommended.
//               </p>
//             </div>
//           </div>

//           {/* What You'll Learn & Build Section */}
//           <div className="mt-12">
//             <h2 className="text-3xl font-bold text-center mb-6">What You’ll Learn & Build</h2>
//             <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
//               By the end of the course, you will have developed the skills needed to build a complete website or web application, both on the front-end and back-end. You'll also work on hands-on projects like a portfolio website, a blog application, and a small e-commerce site.
//             </p>
//           </div>

//           {/* Career Outcomes Section */}
//           <div className="mt-12">
//             <h2 className="text-3xl font-bold text-center mb-6">Career Outcomes</h2>
//             <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
//               After completing this course, you will be qualified for job roles such as:
//             </p>
//             <ul className="list-disc pl-6">
//               <li>Frontend Developer</li>
//               <li>Backend Developer</li>
//               <li>Full Stack Developer</li>
//             </ul>
//             <p className="mt-4 text-lg text-gray-700 dark:text-gray-400">
//               The average salary for web developers in the U.S. is around $75,000 per year, with demand for developers expected to grow by 8% over the next decade.
//             </p>
//           </div>

//           {/* Call to Action */}
//           <div className="text-center mt-12">
//             <Button variant="tertiary" className="px-8 py-3 text-xl">
//               Enroll Now
//             </Button>
//           </div>

//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default WebDevelopmentCourse;
