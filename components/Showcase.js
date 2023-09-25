import Buy_Button from '@/components/Buy_Button.js';
import React from 'react';

const Showcase = () => {
  return (
    <section className="mt-5 mx-auto bg-white text-center justify-center items-center container p-4 rounded-xl">
        <div>
          <h1 className="p-4 mt-4 mb-6 shadow-xl text-bold font-bold text-2xl inline-block ring-2
           ring-pink-700 rounded-xl bg-purple-200 ">Tokenize your Real-World Assets Today !</h1>

           <ul className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4 ring-2 ring-black rounded-md items-center">

            <li className="nfts-assets hover:text-white rounded-md bg-[#616179] shadow-slate-950 shadow-lg">
              <span className="inline-flex">NYC House</span>
                <img src="./blue-badge.png" className="w-[20px] inline-block mx-2"></img>
              <img src="./nfts/pixel-house.png" alt="pixelated-house" className="ring-2 ring-black mt-2" ></img>
              <h2 className="text-bold font-bold mt-2"> Estimated Value : 10 ETH</h2>
              <Buy_Button></Buy_Button>
            </li>
            <li className="nfts-assets hover:text-black bg-white rounded-md shadow-slate-950 shadow-lg ">
              BMW Special Car
              <img src="./blue-badge.png" className="w-[20px] inline-block mx-2"></img>
              <img src="./nfts/pixel-car.png" alt="pixelated-car" className="ring-2 ring-black mt-2" ></img>
              <h2 className="text-bold font-bold mt-2"> Estimated Value : 10 ETH</h2>
              <Buy_Button></Buy_Button>

            </li>
            <li className="nfts-assets hover:text-white bg-[#784647] rounded-md shadow-slate-950 shadow-lg">
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