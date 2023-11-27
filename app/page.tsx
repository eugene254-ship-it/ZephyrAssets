import "./layout";
import "../styles/globals.css";
import React from "react";
import { Why1 } from "@/components/Text";
import PurposePart from "@/components/PurposePart";
import Showcase from "@/utils/Showcase";
import FadeUp from "@/components/fadeEffect";
import Steps from "@/components/Steps";
import FAQ from "@/utils/FAQ";
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
