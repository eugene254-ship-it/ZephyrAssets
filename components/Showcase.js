import Buy_Button from '@/components/Buy_Button.js';
import React from 'react';

const Showcase = () => {
  return (
    <section className="red-container">
        <div>
            <h1 className="bw-title">Tokenize your Real-World Assets Today !</h1>
          <ul className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4 ring-2 ring-black rounded-md items-center">

            <li className="nft-card hover:shadow-xl rounded-lg bg-[#616179] p-4 transition duration-300 ease-in-out">
              <div className="badge-container flex justify-between">
                <span className="text-white font-semibold">NYC House</span>
                <img src="./blue-badge.png" className="w-[20px]"></img>
              </div>
              <img src="./nfts/pixel-house.png" alt="pixelated-house" className="ring-2 ring-black mt-2 rounded-md" ></img>
              <h2 className="text-white font-bold mt-2">Estimated Value: 10 ETH</h2>
              <Buy_Button className="mt-2"></Buy_Button>
            </li>

            <li className="nft-card hover:shadow-xl p-4 transition duration-300 ease-in-out bg-white">
              <div className="badge-container flex justify-between">
                <span className="text-black font-semibold">BMW Special Car</span>
                <img src="./blue-badge.png" className="w-[20px]"></img>
              </div>
              <img src="./nfts/pixel-car.png" alt="pixelated-car" className="ring-2 ring-black mt-2 rounded-md" ></img>
              <h2 className="text-black font-bold mt-2">Estimated Value: 10 ETH</h2>
              <Buy_Button className="mt-2"></Buy_Button>
            </li>

            <li className="nft-card hover:shadow-xl p-4 transition duration-300 ease-in-out bg-[#784647] rounded-md shadow-slate-950 shadow-lg">
              Official Documents
              <img src="./blue-badge.png" className="w-[20px] inline-block mx-2"></img>
              <img src="./nfts/pixel-paper.png" alt="pixelated-paper" className="ring-2 ring-black mt-2"></img>
              <h2 className="text-bold font-bold mt-2"> Estimated Value : 10 ETH</h2>
              <Buy_Button></Buy_Button>

            </li>
           </ul>
          {/* <p className="mt-5 text-center font-semibold">Welcome to the first world-class Token Real Assets </p> */}

        </div>
        
      </section>
  )
}

export default Showcase;