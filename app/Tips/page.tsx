import "./layout.js";
import "../styles/globals.css";
import React from "react";
import { Why1 } from "@/components/Text.jsx";
import PurposePart from "@/components/PurposePart.jsx";
import Showcase from "@/utils/Showcase.tsx";
import FadeUp from "@/components/fadeEffect.jsx";
import Steps from "@/components/Steps.jsx";
import FAQ from "@/utils/FAQ.tsx";
// import { DAppProvider, useEthers, Mainnet, Config, getDefaultProvider } from '@usedapp/core';

const Home = () => {
  return (
    <main>
      <FadeUp>
        <Showcase></Showcase>
        <PurposePart></PurposePart>

        <section className=" text-white">
          <div className="blur-container">
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
