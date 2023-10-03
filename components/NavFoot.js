import React from 'react'
import Connect_Wallet from '@/components/Connect_Wallet.js';
import Link from 'next/link';

const Navbar = () => {
  return (
    <section>
      <div className="sticky top-0">
        <nav className='flex ring-1 ring-black items-center bg-black text-white  mx-auto justify-around'> {/* Added justify-between */}
        <img src='./logo.png' className='w-[120px]' alt="logo" href="/"/> 
         <h1 className="flex text-3xl text-white font-extrabold ">ZephyrX</h1>
        <ul className='flex justify-center space-x-4 items-center
        text-center text-lg font-semibold m-2 cursor-default'>
          <li className="hover:text-blue-300 active:text-white">
            <Link href="/">
            Home
            </Link>
            </li>
          <li className="hover:text-blue-300 active:text-white">
            <Link href="/about">
            About
            </Link>
            </li>
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
          <div className="flex space-x-4 text-white">
            <a href="#" className="text-sm  hover:text-blue-300">Home</a>
            <a href="#" className="text-sm  hover:text-blue-300">About</a>
            <a href="#" className="text-sm  hover:text-blue-300">Services</a>
            <a href="#" className="text-sm  hover:text-blue-300">FAQ</a>
            <a href="#" className="text-sm  hover:text-blue-300">Contact</a>
          </div>
  
        </div>
      </footer>
    );
  };

export {Footer, Navbar};
  