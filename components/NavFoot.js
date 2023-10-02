import React from 'react'
import Connect_Wallet from '@/components/Connect_Wallet.js';

const Navbar = () => {
  return (
    <section>
      <div className="sticky top-0">
        <nav className='flex rounded-md mx-auto ring-1 ring-black items-center bg-gray-900 text-white {/* bg-[#D1AAF2] */} mx-auto rounded-mf justify-around'> {/* Added justify-between */}
        <img src='./logo.png' className='w-[120px]' alt="logo"/>  {/* <h1 className="font-bold text-3xl mx-4">ZephyrX</h1> */}
        <ul className='flex justify-center space-x-4 items-center
        text-center text-lg font-semibold m-2 cursor-default'>
          <li className="hover:text-blue-300 active:text-white">Home</li>
          <li className="hover:text-blue-300 active:text-white">About</li>
          <li className="hover:text-blue-300 active:text-white">Tips</li>
          <li className="hover:text-blue-300 active:text-white">Profile</li>
          <li className="flex">
            <Connect_Wallet></Connect_Wallet>
          </li>
        </ul>
        </nav>
  </div>
</section>

  
  )
};

const Footer = () => {
    return (
      <footer className="bg-black text-white py-10 mt-5 ring-1 ring-black">
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

export {Footer, Navbar};
  