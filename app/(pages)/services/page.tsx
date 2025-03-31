import { Breadcrumb } from '@/components/Breadcrumb'
import GetQuote from '@/components/GetQuote'
import Header from '@/components/Layout/Navbar'
import ServicesPageCard from '@/components/Services/Services'
import React from 'react'


function page() {
  return (
    <div>
      <Header>
        <Breadcrumb title="Empowering Businesses with Cutting-Edge Development & Data Solutions" description="We provide world-class web & mobile development, data analytics, AI solutions, and custom software to help you scale and innovate." imgUrl='services.png' linkurl1='/' link1='Get Quote' link2='Explore Our Work' linkurl2='/bootcamp' />
      </Header>
      <div className=" text-center  our-services bg-slate-50  dark:bg-gray-900 dark:text-white py-8 md:py-32 space-y-2 p-2 mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className='text-2xl uppercase'> Overview of <span className='text-3xl text-yellow-500'>Services</span></h2>
        <p className='text-xl text-gray-500'>Comprehensive Digital Solutions for Your Business</p>
        <p className='text-xm text-gray-500'>We specialize in web & mobile app development, AI-driven data analysis, and custom software solutions tailored to your business needs. Explore our services below</p>


        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ServicesPageCard
            imageSrc="/webilus.png"
            title="Web Development"
            description="Custom websites built for performance, scalability, and security."
            keyFeatures={["Responsive Design", "SEO Optimization", "CMS Integration", "E-Commerce Solutions"]}
            urlLink="/services/web-development"
          />
        
  <ServicesPageCard 
    imageSrc="/mobileilus.png" 
    title="Mobile App Development" 
    description="Innovative mobile apps for iOS and Android to elevate your business." 
    keyFeatures={["Cross-Platform Development", "User-Friendly UI", "High Performance", "App Store Optimization"]} 
    urlLink="/services/mobile-app-development" 
  />



  <ServicesPageCard 
    imageSrc="/webilus.png" 
    title="Data Analytics & Visualization" 
    description="Unlock insights with powerful data analytics and visualization tools." 
    keyFeatures={["Business Intelligence", "Real-Time Analytics", "Custom Dashboards", "Predictive Modeling"]} 
    urlLink="/services/data-analytics" 
  />



  <ServicesPageCard 
    imageSrc="/mobileilus.png" 
    title="AI & Machine Learning" 
    description="Smart AI-powered solutions to automate and optimize processes." 
    keyFeatures={["Natural Language Processing", "Computer Vision", "AI Chatbots", "Deep Learning Models"]} 
    urlLink="/services/ai-machine-learning" 
  />


  <ServicesPageCard 
    imageSrc="/webilus.png" 
    title="Custom Software Development" 
    description="Bespoke software solutions tailored to your business needs." 
    keyFeatures={["Enterprise Solutions", "Cloud Integration", "API Development", "Security & Compliance"]} 
    urlLink="/services/custom-software" 
  />




  <ServicesPageCard 
    imageSrc="/webilus.png" 
    title="UI/UX Design" 
    description="Beautiful and intuitive designs that enhance user experience." 
    keyFeatures={["User Research", "Wireframing & Prototyping", "Interaction Design", "Accessibility Optimization"]} 
    urlLink="/services/ui-ux-design" 
  />




  <ServicesPageCard 
    imageSrc="/mobileilus.png" 
    title="Consulting Services" 
    description="Expert guidance to help you navigate complex tech challenges." 
    keyFeatures={["IT Strategy", "Digital Transformation", "Project Management", "Risk Assessment"]} 
    urlLink="/services/consulting" 
  />


        </div>

        <GetQuote />
      </div>

    </div>
  )
}

export default page
