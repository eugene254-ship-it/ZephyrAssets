'use client'
import React from "react";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Copyright */}
          <div className="text-sm">
            <p>&copy; 2023 ZephyrX Inc. All rights reserved.</p>
          </div>
          
          {/* Navigation */}
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white">Home</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">About</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Services</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">FAQ</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a>
          </div>
  
        </div>
      </footer>
    );
  };

  export default Footer;
  