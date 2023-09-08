import React from 'react'
import Connect_Wallet from '@/components/Connect_Wallet.js';


const Navbar = () => {
  return (
    <section className="sticky ">
       
    <nav className='flex p-4 ring-2 ring-black justify-center items-center bg-white
      bg-opacity-80 mx-auto rounded-md'>
       <h1 className="text-bold text-3xl">TKRW</h1>
      <ul className='flex justify-center space-x-5 items-center
       text-center m-3 cursor-default'>
        <li className="hover:text-blue-300 ">Home</li>
        <li>About</li>
        <li>Tips</li>
        <li>Profile</li>
        <li className="flex">
          <Connect_Wallet></Connect_Wallet>
        </li>
      </ul>
    </nav>
  </section>
  )
}

export default Navbar;