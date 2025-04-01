import CourseCategories from '@/components/Bootcamp/CourseCategories'
import WhyUs from '@/components/Bootcamp/WhyUs'
import { Breadcrumb } from '@/components/Breadcrumb'
import Header from '@/components/Layout/Navbar'
import React from 'react'


function Bootcamp() {
  return (
    <div>
        <Header>
        <Breadcrumb title="Bootcamps" description="Master In-Demand Tech Skills & Launch Your Career!" videoUrl='/bootcampvid.mp4' linkurl1='/' link1='Start Learning Today' link2='Contact Us' linkurl2='/bootcamp' />
      </Header>
      <main className='pb-[40px] -pt-[60px] p-2 mx-auto max-w-7xl px-4 lg:px-8'>
      <WhyUs/>
      <div className="grid sm:grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
  
  <CourseCategories
    imageUrl="/webdev.jpg"
    heading="🖥️ Web Development"
    description={[
      "Frontend, Backend & Full Stack Development",
      "Tools: HTML, CSS, JavaScript, React, Node.js",
      "Ideal for aspiring web developers & professionals"
    ]}
    learnMore="/services/webdevelopment"
  />

  <CourseCategories
    imageUrl="/mobileilus.png"
    heading="📱 Mobile Development"
    description={[
      "Build Android (Kotlin) & iOS (Swift) apps",
      "Learn Flutter & React Native for cross-platform apps",
      "Ideal for aspiring mobile developers"
    ]}
    learnMore="/courses/mobile-development"
  />

  <CourseCategories
    imageUrl="/mobileilus.png"
    heading="📊 Data Science & Analytics"
    description={[
      "Master Python, SQL, and Machine Learning",
      "Data Visualization & AI Fundamentals",
      "Great for analysts & data engineers"
    ]}
    learnMore="/courses/data-science"
  />

  <CourseCategories
    imageUrl="/webilus.png"
    heading="🔐 Cybersecurity & Ethical Hacking"
    description={[
      "Penetration Testing & Network Security",
      "Hands-on Ethical Hacking with Kali Linux",
      "For IT security professionals & ethical hackers"
    ]}
    learnMore="/courses/cybersecurity"
  />

  <CourseCategories
    imageUrl="/webilus.png"
    heading="📡 Cloud & DevOps"
    description={[
      "Deploy apps using AWS, Docker, Kubernetes",
      "Learn CI/CD Pipelines & Terraform",
      "For DevOps engineers & cloud professionals"
    ]}
    learnMore="/courses/cloud-devops"
  />

  <CourseCategories
    imageUrl="/webilus.png"
    heading="💼 Product Management & UI/UX Design"
    description={[
      "Learn UI Design with Figma & Adobe XD",
      "Agile methodologies & product roadmaps",
      "For designers & product managers"
    ]}
    learnMore="/courses/product-management"
  />
   <CourseCategories
    imageUrl="/mobileilus.png"
    heading="🤖 Artificial Intelligence & Machine Learning"
    description={[
      "Build AI models using Python & TensorFlow",
      "Work with Natural Language Processing (NLP)",
      "Ideal for AI researchers, engineers, and data scientists"
    ]}
    learnMore="/courses/artificial-intelligence"
  />


      </div>
      
      </main>
   
    </div>
  )
}

export default Bootcamp