import React from "react";
import { Button } from "@/components/ui/button";
import {FaFacebook, FaLinkedin} from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="mx-auto  max-w-7xl grid md:grid-cols-4 gap-8 px-6 pb-6">
        
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>1234 Bootcamp Street, Tech City</p>
          <p>Email: support@bootcamp.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Important Links</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-blue-400">About Us</Link></li>
            <li><Link href="#" className="hover:text-blue-400">Our Programs</Link></li>
            <li><Link href="#" className="hover:text-blue-400">Testimonials</Link></li>
            <li><Link href="#" className="hover:text-blue-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-blue-400 hover:text-white"><FaFacebook /> </Link>
            <Link href="#" className="text-blue-400 hover:text-white"><BsTwitterX /></Link>
            <Link href="#" className="text-blue-400 hover:text-white"><FaInstagram /></Link>
            <Link href="#" className="text-blue-400 hover:text-white"><FaLinkedin /></Link>
         
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p>Subscribe to get our latest updates.</p>
          <form className="mt-3 flex align-center">
            <input type="email" placeholder="Enter your email" className="w-full px-4 focus:outline-0 rounded-l-md text-gray-700" />
            <Button type="submit" className="bg-blue-500 px-4 py-4 rounded-r-md hover:bg-blue-600">Subscribe</Button>
          </form>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-center py-3 mt-6">
        <p>&copy; {new Date().getFullYear()} Bootcamp. All rights reserved.</p>
      </div>
    </footer>
  );
}
