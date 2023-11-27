import "./layout.tsx";
import "../styles/globals.css";
import React from "react";
import { Why1 } from "@/components/Text.tsx";
import PurposePart from "@/components/PurposePart.tsx";
import Showcase from "@/utils/Showcase.tsx";
import FadeUp from "@/components/fadeEffect.tsx";
import Steps from "@/components/Steps.tsx";
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
