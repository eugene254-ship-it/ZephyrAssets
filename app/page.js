import './layout.js'
import '../styles/globals.css';
import React from 'react';
import { Navbar, Footer } from '@/components/NavFoot.js';
import { Why1, Why2, Why3, Why4} from '@/components/Text.js';
import PurposePart from '@/components/PurposePart.js';
import Showcase from '@/components/Showcase.js';
import FadeUp from '@/components/fadeEffect.js';
// import { DAppProvider, useEthers, Mainnet, Config, getDefaultProvider } from '@usedapp/core';




const Home = () => {
  return (
    <main>
    <FadeUp>
     <Navbar></Navbar>
      <Showcase></Showcase>
      <PurposePart></PurposePart>
      
      <section className=" text-white">
        <div className="red-container">
          <h2 className="bw-title ring-2 ring-white">Why should you Tokenize your assets ?</h2>
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
        <div className="black-container text-white">
          <h1 className="text-3xl font-semibold mb-4">Most Common Questions</h1>
          <div className="rounded-md p-4">
            <h2 className="text-xl font-semibold mb-2">1. How does tokenization of real-world assets work?</h2>
            <p className="red mb-4">
              Tokenization involves converting ownership rights of real-world assets into digital tokens on a blockchain. Each token represents a share of the asset.
            </p>

            <h2 className="text-xl font-semibold mb-2">2. What are the benefits of tokenizing assets as <span>NFTs?</span></h2>
            <p className="red mb-4">
              Tokenization provides liquidity, fractional ownership, and transparency. NFTs enhance uniqueness and provenance tracking.
            </p>
            <h2 className="text-xl font-semibold mb-2">3. How do I buy tokens representing real-world assets?</h2>
            <p className="red mb-4">
              Simply browse through our platform's asset listings, select the asset you're interested in, and purchase the corresponding tokens using your preferred cryptocurrency. The process is instant and seamless.
            </p>

            <h2 className="text-xl font-semibold mb-2">4. What types of assets can be tokenized?</h2>
            <p className="red mb-4">
              Our platform supports a wide range of assets including real estate, cars, art, diamonds, and more. Each asset is carefully vetted for authenticity and legal compliance.
            </p>

            <h2 className="text-xl font-semibold mb-2">5. Is my investment secure?</h2>
            <p className="red mb-4">
              Security is our top priority. All tokenized assets are backed by legal contracts and undergo regular audits. The blockchain technology ensures transparency and immutability.
            </p>

            <h2 className="text-xl font-semibold mb-2">6. How do I sell my tokens?</h2>
            <p className="red mb-4">
              You can list your tokens on our platform's marketplace for sale. Alternatively, you can trade them on secondary markets that support our tokens.
            </p>

            <h2 className="text-xl font-semibold mb-2">7. What are the transaction fees?</h2>
            <p className="red mb-4">
              Our platform charges a minimal fee for token purchases and sales. The fee structure is transparent and can be viewed on our website.
            </p>

            <h2 className="text-xl font-semibold mb-2">8. Can I tokenize my own asset?</h2>
            <p className="red mb-4">
              Yes, you can! Our platform offers a user-friendly interface for asset owners to tokenize and list their assets for investment.
            </p>

            <h2 className="text-xl font-semibold mb-2">9. How does the platform ensure the authenticity of assets?</h2>
            <p className="red mb-4">
              Each asset undergoes a rigorous vetting process, including legal checks and physical inspections, to ensure its authenticity and ownership.
            </p>

            <h2 className="text-xl font-semibold mb-2">10. What happens if the asset gets damaged or lost?</h2>
            <p className="red mb-4">
              Our assets are insured to protect against unforeseen circumstances. Token holders will be compensated in such events as per the terms of the insurance policy.
            </p>
          </div>
        </div>

      </section>
      <Footer></Footer>
      </FadeUp>
    </main>
    
  )
}

export default Home;