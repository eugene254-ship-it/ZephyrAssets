import './layout.js'
import '../styles/globals.css';
import React from 'react';
import Navbar from '@/components/Navbar.js';
import Footer from '@/components/Footer.js';
import { Why1, Why2, Why3, Why4} from '@/components/Text.js';
import PurposePart from '@/components/PurposePart.js';
import Showcase from '@/components/Showcase.js';
// import { DAppProvider, useEthers, Mainnet, Config, getDefaultProvider } from '@usedapp/core';




const Home = () => {
  return (
    <main>
     <Navbar></Navbar>
      <Showcase></Showcase>
      <PurposePart></PurposePart>

      <section className="why-do-it? mt-5 mx-auto text-center justify-center 
      bg-white ring-2 ring-black items-center container p-4 rounded-xl">
        <div>
          <h2 className="text-3xl font-semibold text-">Why should you Tokenize your assets ?</h2>
          <ul>
          <li>
          <Why1></Why1>
          </li>
          <li>
          <Why2></Why2>
          </li>
          <li></li>
          <li></li>
          </ul>
          

          <Why3></Why3>
          <Why4></Why4>
        </div>
      </section>
      <section className="container mx-auto grid grid-cols-2 gap-3">
        <div className="main-div">
          <h1>How it Works</h1>
        </div>
        <div className="main-div">
          <h1 className="text-3xl font-semibold mb-4">Most Common Questions</h1>
          <div className="bg-white rounded-md shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-2">1. How does tokenization of real-world assets work?</h2>
            <p className="text-gray-700 mb-4">
              Tokenization involves converting ownership rights of real-world assets into digital tokens on a blockchain. Each token represents a share of the asset.
            </p>

            <h2 className="text-xl font-semibold mb-2">2. What are the benefits of tokenizing assets as NFTs?</h2>
            <p className="text-gray-700 mb-4">
              Tokenization provides liquidity, fractional ownership, and transparency. NFTs enhance uniqueness and provenance tracking.
            </p>

          </div>
        </div>

      </section>
      <Footer></Footer>
    </main>
    
  )
}

export default Home;