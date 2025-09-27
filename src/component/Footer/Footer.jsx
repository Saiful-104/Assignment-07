import React from 'react';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-8">
      <div className="max-w-[1240px] mx-auto  grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-1 lg:grid-cols-6 lg:gap-1 ">
    
        <div className="lg:col-span-2">
          {/* Changed the dash here for best practice */}
          <h3 className="font-bold text-xl text-white mb-4">CS -- Ticket System</h3>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

          </p>
        </div>

       
        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Mission</a></li>
            <li><a href="#" className="hover:text-white">Contact Speed</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Products & Services</a></li>
            <li><a href="#" className="hover:text-white">Customer Stories</a></li>
            <li><a href="#" className="hover:text-white">Download Apps</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Information</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Join Us</a></li>
          </ul>
        

        </div>

        <div className="">
    <h4 className="font-semibold text-white ">Social Links </h4>
 
     
          <a href="https://twitter.com" target="_blank" className=" flex items-center text-white p-2 gap-2 rounded-full ">
            <FaTwitter size={15} />  <span>@CS — Ticket System</span>
        </a>
      

       
        <a href="https://www.linkedin.com" target="_blank" className=" flex items-center gap-2 text-white p-2 rounded-full ">
            <FaLinkedinIn size={15} />  <span>@CS — Ticket System</span>
        </a>

      
          
        <a href="https://www.facebook.com" target="_blank" className=" flex items-center gap-2 text-white p-2 rounded-full ">
            <FaFacebookF size={15} /> <span>@CS — Ticket System</span>
        </a>
     


        <a href="mailto:example@gmail.com" className=" flex items-center gap-2 text-white p-2 rounded-full">
            <FaEnvelope size={15} /> <span>@CS — Ticket System</span>
        </a>
    
   
</div>
      </div>
    </footer>
  );
};

export default Footer;