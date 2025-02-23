import React from "react";
import { Button } from "@/components/ui/button";


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
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Our Programs</a></li>
            <li><a href="#" className="hover:text-blue-400">Testimonials</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-facebook fa-lg"></i></a>
            <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-twitter fa-lg"></i></a>
            <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-instagram fa-lg"></i></a>
            <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-linkedin fa-lg"></i></a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p>Subscribe to get our latest updates.</p>
          <form className="mt-3 flex">
            <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-l-md text-gray-700" />
            <Button type="submit" className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600">Subscribe</Button>
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
