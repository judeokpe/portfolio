import Link from "next/link";
import { Button } from "./ui/button";


const HeroSection = () => {
    return (
      <div className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Content */}
        <div className="relative px-6 lg:px-20">
          <h1 className="text-5xl font-bold">Land Your Dream Job in Tech</h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            Learn Software Development, Product Management, or Data Science
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Link href="/apply">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">Apply Now</Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-gray-600 text-white hover:bg-gray-700">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  export default HeroSection