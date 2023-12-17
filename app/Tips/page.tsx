import React from "react";
import FadeUp from "../components/fadeEffect";

const page = () => {
  return (
    <FadeUp>
      <section className="p-[360px] tips-bg">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-blue-300 sm:text-3xl md:text-5xl">
              Tokenizer Guide Center
            </h2>

            <p className="mt-2 p-4 text-center text-purple-200">
              In this page, you will find below a guide about how can we make
              your real-world assets tokenized on our website. By being able to
              tokenize your assets you unlock access to every property that is
              located in Europe or North America.
              <br className="mb-2 "></br>Even if private, When the property is
              listed, we are prone and happy to sell it to everyone that bids
              the offer. Buying assets, houses and cars has never been so easy.
            </p>

            <div className="mt-4 sm:mt-8">
              <a
                href="#"
                className="inline-block rounded-full bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Start Below
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        
      </section>
    </FadeUp>
  );
};

export default page;
