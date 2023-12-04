import "./layout";
import "../styles/globals.css";
import React from "react";
import { Why1 } from "@/app/utils/Text";
import PurposePart from "@/app/components/PurposePart";
import Showcase from "@/app/utils/Showcase";
import FadeUp from "@/app/components/fadeEffect";
import Steps from "@/app/components/Steps";
import FAQ from "@/app/utils/FAQ";
import PromotionalSection from "./components/Popup";
// import { DAppProvider, useEthers, Mainnet, Config, getDefaultProvider } from '@usedapp/core';

const Home = () => {
  return (
    <main>
      <FadeUp>
        <PromotionalSection/>
        <Showcase/>
        <PurposePart/>
        <section className="blur-container text-white">
          <div className="bg-white container p-6 ring-2 ring-black rounded-lg">
            <h2 className="p-4 mt-4 mb-6 shadow-xl font-bold text-2xl inline-block rounded-xl ring-2 ring-white text-white bg-black">         Why should you Tokenize your assets ?
            </h2>
            <Why1/>
          </div>
        </section>
        <section className="container mx-auto">
          <Steps/>
          <FAQ/>
        </section>
      </FadeUp>
    </main>
  );
};

export default Home;
