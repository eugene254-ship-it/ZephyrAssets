import Link from "next/link";
import React from "react";
import "@/styles/globals.css";
import FadeUp from "@/app/components/fadeEffect";

const page = () => {
  return (
    <FadeUp>
      {/* Banner Section */}
      <section
        className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] 
  bg-cover bg-center bg-no-repeat p-4"
      >
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-red-700">
                Forever Home.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white bg-gray-900 shadow-black shadow-lg rounded-md p-2 sm:text-xl/relaxed">
              whether you're searching for a new home, new flat, used car or
              even collectibles, we do possess all your desires within the
              market. We make sure every seller is verified and trusted by our
              scouters
            </p>

            <div className="mt-8 mx-[60px] flex flex-wrap gap-4 text-center">
              <Link
                href="/"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </Link>
              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}

      <section className="about-bg w-full h-full p-[210px] -mb-[20px] text-white">
        <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              What makes us special ?
            </h2>

            <p className="mt-4 text-gray-300">
              Discover innovation at the intersection of real-world assets and
              blockchain technology with Zephyr Assets. We're pioneering a
              transformative approach that demystifies asset tokenization,
              enabling seamless integration into the digital economy. Experience
              the future of investment with us.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">
                  Robust Contractor Verification System
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                  Trust is paramount in the realm of asset tokenization, and
                  ZephyrAssets understands this. That's why we've implemented a
                  rigorous contractor verification system, ensuring that every
                  asset on our platform is authenticated and legal. Our network
                  of independent experts conducts meticulous verification so
                  that investors can trade with confidence. This added layer of
                  security is what sets ZephyrAssets apart, giving you the peace
                  of mind that comes with knowing your investments are
                  legitimate and protected.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="invert"
                >
                  <path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z" />
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">
                  Innovative Tokenization Process
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                  ZephyrAssets utilizes a state-of-the-art tokenization protocol
                  to transform your tangible assets into digital tokens. This
                  cutting-edge method not only streamlines the process of owning
                  and trading assets but also introduces unprecedented levels of
                  transparency and security. With ZephyrAssets, you're not just
                  investing in property or art; you're investing in a future
                  where asset management is democratized, and every transaction
                  is recorded on an immutable blockchain ledger, ensuring trust
                  and integrity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  height="1.2em"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z"
                    fill="#050D42"
                  />
                  <path
                    d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z"
                    fill="#050D42"
                  />
                  <path
                    d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z"
                    fill="#050D42"
                  />
                  <path
                    d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z"
                    fill="#2F4BFF"
                  />
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">
                  Direct Peer-to-Peer Marketplace
                </h2>

                <p className="mt-1  text-sm text-gray-300">
                  The essence of blockchain is the removal of unnecessary
                  intermediaries, and ZephyrAssets embodies this principle. Our
                  platform empowers users to engage in peer-to-peer transactions
                  without the need for traditional middlemen. This not only
                  reduces fees and increases the speed of transactions but also
                  puts the power back into the hands of the asset owners and
                  investors. By fostering a direct marketplace, ZephyrAssets is
                  pioneering a new era of asset management where control,
                  efficiency, and accessibility are in the hands of the user.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Email CTA */}
        <section className="mt-5 translate-y-12">
          <div className="ring-1 ring-black bg-white text-black rounded-lg mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Get started today!
              </h1>

              <p className="mt-4 text-gray-500">
                Subscribe to our newsletter to know more about new features,
                Policies and mostly superb projects coming !
              </p>
            </div>

            <form
              action=""
              className="mx-auto mt-[50px] mb-5 max-w-md space-y-4"
            >
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>

                <div className="relative">
                  <input
                    type="email"
                    className="w-full rounded-lg ring-1 ring-black p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter email"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-block rounded-lg bg-red-500 mx-5 px-[50px] py-4 text-sm font-medium text-white"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </FadeUp>
  );
};

export default page;
