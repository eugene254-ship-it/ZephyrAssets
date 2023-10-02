'use client'
import React from "react"
import {PurposePart1, PurposePart2, PurposePart3} from './Text'


const PurposePart = () => (


<section className="grid grid-cols-2 gap-5  
      bg-white ring-2 ring-black black-container">
       <div className="main-div bg-white ring-2 ring-fuchsia-400">
        <h1 className="font-extrabold text-2xl red-container">What's the Purpose of Real-World Token Assets?</h1>
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
        <div className="rounded-xl inline-block p-4">
          <img src="/home_imgs/house.jpg" alt="dog_in_house_image" className="rounded-xl shadow-md shadow-black"/>
        </div>
      </section>
      )

export default PurposePart;