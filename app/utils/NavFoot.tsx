import React from "react";
import Connect_Wallet from "@/app/components/Connect_Wallet";
import Link from "next/link";
import "@/styles/globals.css";
// Navigation Bar
const Navbar = () => {
  return (
    <section>
      <div>
        <nav className="flex ring-1 ring-white p-4 items-center transition-all sm:p-6 duration-300 top-[-50px] justify-center bg-black text-white">
          <Link href="/">
            <img
              src="./logo.png"
              className="w-[120px] invert mx-5"
              alt="logo"
            />
          </Link>
          {/* <h1 className="flex text-3xl text-white font-extrabold ">ZephyrX</h1> */}
          <ul
            className="flex justify-center space-x-4 gap-4 items-center
        text-center text-lg font-semibold m-2 cursor-default sm:flex"
          >
            <li className="scale-105 duration-300">
              <Link href="/">
                <div className="group flex bg-red-600 items-center ring-1 container rounded-md hover:scale-125 duration-300">
                  <span className="px-1 text-white">Create</span>
                  <img
                    className="mt-[2px] w-[20px] h-[20px] group-hover:filter -translate-x-[2px] -translate-y-[1px]"
                    src="./plus-button.png"
                    alt=""
                  />
                </div>
              </Link>
            </li>
            <li className="hover:scale-110 duration-300">
              <Link
                href="/Explore"
                className="text-fuchsia-500 hover:text-red-500 duration-500"
              >
                Explore
              </Link>
            </li>

            <li className="hover:text-purple-300 active:text-white hover:scale-110 duration-300">
              <Link href="/About">About</Link>
            </li>
            <li className="hover:text-yellow-300 active:text-white hover:scale-110 duration-300">
              <Link href="/Tips">Tips</Link>
            </li>
            <li className="hover:text-blue-300 active:text-white hover:scale-110 duration-500">
              <Link href="/Profile">Profile</Link>
            </li>
            <li className="flex translate-x-4 sm:hidden">
              <Connect_Wallet/>
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
    <footer className="flex bg-black text-white p-8 mt-5 ring-1 ring-black sm:p-6">
      <div className="container mx-auto flex justify-evenly items-center sm:space-y-0 sm:flex-row">
        {/* Copyright */}
        <div className="text-sm scale-105 hover:scale-125 duration-300">
          <p>&copy; 2023 ZephyrX Inc. All rights reserved.</p>
        </div>

        {/* Navigation */}
        <div className="space-x-6 text-lg p-4 rounded-lg text-white">
          <Link href="/" className="hover:text-red-300 transition">Home</Link>
          <Link href="/About" className="hover:text-purple-300 transition">About</Link>
          <Link href="/Explore" className="hover:text-fuchsia-300 transition">Explore</Link>
          <Link href="/Tips" className="hover:text-yellow-300 transition">Tips</Link>
          <Link href="/Contact" className="hover:text-blue-300">Contact</Link>
        </div>
        {/* Regulatory Information */}
        <div className="text-md">
            <p className="font-bold text-lg mb-2">Legal & Compliance</p>
            <Link href="/Legal/terms-of-service" className="hover:text-blue-300 block">Terms of Service</Link>
            <Link href="/Legal/privacy-policy" className="hover:text-blue-300 block">Privacy Policy</Link>
            <Link href="/Legal/disclaimer" className="hover:text-blue-300 block">Disclaimer</Link>
            <Link href="/Legal/regulatory-compliance" className="hover:text-blue-300 block">Regulatory Compliance</Link>
            <Link href="/Legal/intellectual-property" className="hover:text-blue-300 block">Intellectual Property Rights</Link>
          
        </div>
      </div>
    </footer>
  );
};

export { Footer, Navbar };
