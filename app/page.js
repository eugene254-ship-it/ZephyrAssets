import './layout.js'
import '../styles/globals.css';
import React from 'react';
import Connect_Wallet from '@/components/Connect_Wallet.js';
import {PurposePart1, PurposePart2, PurposePart3} from '@/components/Text.js';

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
      <section className="mt-5 mx-auto bg-white text-center justify-center items-center bg-opacity-90 container p-4 rounded-xl shadow-lg">
        <div>
          <h1 className="p-4 mt-4 mb-6 shadow-xl text-bold font-bold text-2xl inline-block ring-2
           ring-cyan-500 rounded-xl bg-gray-500 bg-opacity-40">Tokenize your Real-World Assets Today !</h1>
           <ul className="grid grid-cols-5 p-4 ring-2 ring-black rounded-md">
            <li className="nfts-assets bg-[#616179]">
              <span className="inline-flex">NYC House</span>
                <img src="./blue-badge.png" className="w-[20px] inline-block mx-2"></img>
              <img src="./pixel-house.png" alt="pixelated-house" className="ring-2 ring-black mt-2" ></img>
              <h2 className="text-bold font-bold"> Estimated Value : 10 ETH</h2>
            </li>
            <li className="nfts-assets bg-white">
              BMW Special Car
              <img src="./blue-badge.png" className="w-[20px] inline-block mx-2"></img>
              <img src="./pixel-car.png" alt="pixelated-car" className="ring-2 ring-black mt-2" ></img>
              <h2 className="text-bold font-bold"> Estimated Value : 10 ETH</h2>

            </li>
            <li className="nfts-assets bg-[#784647]">
              Official Documents
              <img src="./blue-badge.png" className="w-[20px] inline-block mx-2"></img>
              <img src="./pixel-paper.png" alt="pixelated-paper" className="ring-2 ring-black mt-2"></img>
              <h2 className="text-bold font-bold"> Estimated Value : 10 ETH</h2>

            </li>
           </ul>
          {/* <p className="mt-5 text-center font-semibold">Welcome to the first world-class Token Real Assets </p> */}

        </div>
        
      </section>
      <section className="grid grid-cols-2 gap-5 mt-5 mx-auto text-center justify-center items-center bg-opacity-90 container p-4 rounded-xl">
       <div className="bg-white ring-2 ring-black rounded-xl inline-block p-4 shadow-lg">
        <h1 className="font-extrabold text-2xl p-2 ">What's the Purpose of Real-World Token Assets?</h1>
        <PurposePart1></PurposePart1>
        <PurposePart2></PurposePart2>
        <PurposePart3></PurposePart3>
        </div>
        {/* <h2>Enhanced Liquidity</h2>
        <p>Tokenized assets can be traded on various decentralized marketplaces with relative ease. This feature increases the liquidity of assets that are traditionally hard to move, enhancing their value and making them more appealing to investors.</p>

        <h2>Global Reach</h2>
        <p>Blockchain technology transcends geographical limitations. A tokenized asset can be bought or sold by anyone across the globe, subject to local regulations, which opens up global markets for goods that were previously confined to local or regional buyers.</p>

        <h2>Streamlined Processes</h2>
        <p>The use of smart contracts in managing tokenized assets can automate many aspects of asset management, from verifying ownership to executing terms of a contract when specific conditions are met. This reduces the time and cost of transactions, as well as the chance for human error.</p>

        <h2>Ecological Impact</h2>
        <p>Digitizing assets on the blockchain can significantly reduce the amount of paper and physical resources required in traditional asset management. This not only makes processes more efficient but also contributes to environmental sustainability.</p> */}
        <div className="bg-white ring-2 ring-black shadow-xl rounded-xl inline-block p-4">
          <img src='./first-img.png' alt="back-image"></img>
        </div>
      </section>
      <section className="why-do-it? ">
        
      </section>
    </main>
  )
}

export default Home;