import './layout.js'
import '../styles/globals.css';
import React from 'react';
import Connect_Wallet from '@/components/Connect_Wallet.js';

const Home = () => {
  return (
    <main>
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
      <section className="mt-5 bg-white bg-opacity-90 container p-4 rounded-xl shadow-lg">
        <div>
          <h1 className="p-4 mt-4 mb-6 shadow-xl text-bold font-bold text-2xl inline-block ring-2
           ring-cyan-500 rounded-xl bg-gray-500 bg-opacity-40">Tokenize your Real-World Assets Today !</h1>
           <ul>
            <li className="w-[150px] mt-4 mb-2 ring-2 ring-black text-center">
              NYC House
              <img src="./pixel-house.png" alt="pixelated-house" ></img>
            </li>
           </ul>
          <p className="mt-5 text-center font-semibold">Welcome to the first world-class Token Real Assets </p>
        </div>
        <div></div>
      </section>
    </main>
  )
}

export default Home;