import "./layout.js";
import "../styles/globals.css";
import React from "react";
import { Why1, Question } from "@/components/Text.js";
import PurposePart from "@/components/PurposePart.js";
import Showcase from "@/components/Showcase.js";
import FadeUp from "@/components/fadeEffect.js";
import Steps from "@/components/Steps.js";
import FAQ from "@/components/FAQ.js";
// import { DAppProvider, useEthers, Mainnet, Config, getDefaultProvider } from '@usedapp/core';

const Home = () => {
  return (
    <main>
      <FadeUp>
        <Showcase></Showcase>
        <PurposePart></PurposePart>

        <section className=" text-white">
          <div className="red-container">
            <h2 className="bw-title ring-2 ring-white">
              Why should you Tokenize your assets ?
            </h2>
            <Why1></Why1>
          </div>
        </section>
        <section className="container mx-auto">
          <Steps></Steps>
          <FAQ></FAQ>
          </section>
        
      </FadeUp>
    </main>
  );
};

export default Home;
