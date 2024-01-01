"use client";
import React from "react";
import { PurposePart1 } from "../utils/Text";

const PurposePart = () => (
  <section
    className="gap-5  
    purpose-bg backdrop:blur-sm text-center justify-center items-center p-[120px]"
  >
    <div className="main-div p-[90px] translate-x-[120px] container bg-white">
      <h1 className="font-extrabold text-2xl mb-4 -translate-y-4 ring-2 bg-gradient-to-r rounded-xl inline-block p-4 from-cyan-300 to-emerald-400 text-black red-container hover:scale-105 duration-300">
        What's the Purpose of Real-World Token Assets?
      </h1>
      <PurposePart1/>
      <img
        src="/home_imgs/docs.jpg"
        alt="documents_image"
        className="rounded-xl ring-1 ring-black"
      />
    </div>
    {/* <h2>Enhanced Liquidity</h2>
        <p>Tokenized assets can be traded on various decentralized marketplaces with relative ease. This feature increases the liquidity of assets that are traditionally hard to move, enhancing their value and making them more appealing to investors.</p>

        <h2>Global Reach</h2>
        <p>Blockchain technology transcends geographical limitations. A tokenized asset can be bought or sold by anyone across the globe, subject to local regulations, which opens up global markets for goods that were previously confined to local or regional buyers.</p>

        <h2>Streamlined Processes</h2>
        <p>The use of smart contracts in managing tokenized assets can automate many aspects of asset management, from verifying ownership to executing terms of a contract when specific conditions are met. This reduces the time and cost of transactions, as well as the chance for human error.</p>

        <h2>Ecological Impact</h2>
        <p>Digitizing assets on the blockchain can significantly reduce the amount of paper and physical resources required in traditional asset management. This not only makes processes more efficient but also contributes to environmental sustainability.</p> */}
    {/* <div className="rounded-xl inline-block p-4">
      <img
        src="/home_imgs/house.jpg"
        alt="house_image"
        className="rounded-xl ring-1 ring-white"
      /> */}
  </section>
);

export default PurposePart;
