import React from "react";
import Connect_Wallet from "@/components/Connect_Wallet.js";
import Link from "next/link";

// Navigation Bar
const Navbar = () => {
  return (
    <section>
      <div className="">
        <nav className="flex sticky top-0 z-50 ring-1 ring-black items-center bg-black text-white  mx-auto justify-around">
          <Link href="/">
          <img
            src="./logo.png"
            className="w-[120px] invert mx-5"
            alt="logo"
          />
          </Link>
          {/* <h1 className="flex text-3xl text-white font-extrabold ">ZephyrX</h1> */}
          <ul
            className="flex justify-center space-x-4 items-center
        text-center text-lg font-semibold m-2 cursor-default"
          >
            <li>
              <Link href="/">
                <div className="group flex bg-red-600 items-center ring-1 container rounded-md ring-white hover:scale-125 duration-300">
                  <span className="px-1 group-hover:text-black text-white">
                    Create
                  </span>
                  <img
                    className="mt-[2px] w-[25px] h-[25px] group-hover:filter group-hover:invert"
                    src="./plus-button.png"
                    alt=""
                  />
                </div>
              </Link>
            </li>
          <li>
            <Link href="/Explore" className='text-fuchsia-400 hover:text-cyan-500 active:text-green-400'>
              Explore
              </Link>
          </li>
        
          <li className="hover:text-blue-300 active:text-white">
            <Link href="/About">
            About
            </Link>
            </li>
            <li className="hover:text-blue-300 active:text-white">
            <Link href="/Tips">
              Tips
            </Link>
              </li>
            <li className="hover:text-blue-300 active:text-white">
            <Link href="/Profile">
              Profile
            </Link>
            </li>
            <li className="flex">
              <Connect_Wallet></Connect_Wallet>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

// Footer Section Part
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
          <Link href="/" className="text-sm  hover:text-blue-300">
            Home
          </Link>
          <Link href="/About" className="text-sm  hover:text-blue-300">
            About
          </Link>
          <Link href="/Services" className="text-sm  hover:text-blue-300">
            Services
          </Link>
          <Link href="/" className="text-sm  hover:text-blue-300">
            FAQ
          </Link>
          <Link href="/Contact" className="text-sm  hover:text-blue-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export { Footer, Navbar };
