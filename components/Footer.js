'use client'
import React from "react";

const Footer = () => {
    return (
      <footer className="bg-[#D1AAF2] text-black py-6 ring-1 ring-black">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Copyright */}
          <div className="text-sm">
            <p>&copy; 2023 ZephyrX Inc. All rights reserved.</p>
          </div>
          
          {/* Navigation */}
          <div className="flex space-x-4 text-black">
            <a href="#" className="text-sm  hover:text-white">Home</a>
            <a href="#" className="text-sm  hover:text-white">About</a>
            <a href="#" className="text-sm  hover:text-white">Services</a>
            <a href="#" className="text-sm  hover:text-white">FAQ</a>
            <a href="#" className="text-sm  hover:text-white">Contact</a>
          </div>
  
        </div>
      </footer>
    );
  };

  export default Footer;
  