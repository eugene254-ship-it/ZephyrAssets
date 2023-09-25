import React from 'react'
import Connect_Wallet from '@/components/Connect_Wallet.js';

const Navbar = () => {
  return (
    <section className="sticky">
    <nav className='flex rounded-md mx-auto container ring-1 ring-black items-center bg-gray-600 {/* bg-[#D1AAF2] */} mx-auto rounded-mf justify-around'> {/* Added justify-between */}
    <div></div> {/* Empty div as a placeholder */}
    <img src='./logo.png' className='w-[120px]' alt="logo"/>
    {/* <h1 className="font-bold text-3xl mx-4">ZephyrX</h1> */}
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
</section>

  
  )
}


export default Navbar;