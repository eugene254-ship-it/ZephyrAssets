import "./layout.js";
import "../styles/globals.css";
import React from "react";
import { Why1, Question } from "@/components/Text.js";
import PurposePart from "@/components/PurposePart.js";
import Showcase from "@/components/Showcase.js";
import FadeUp from "@/components/fadeEffect.js";
import Steps from "@/components/Steps.js";
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
          <div className="space-y-4">
  <details
    className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-gray-900">
        Lorem ipsum dolor sit amet consectetur adipisicing?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
      molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
      voluptate dicta quo officiis explicabo consequuntur distinctio corporis
      earum similique!
    </p>
  </details>

  <details
    className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-gray-900">
        Lorem ipsum dolor sit amet consectetur adipisicing?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
      molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
      voluptate dicta quo officiis explicabo consequuntur distinctio corporis
      earum similique!
    </p>
  </details>
</div>

        </section>
        
      </FadeUp>
    </main>
  );
};

export default Home;
