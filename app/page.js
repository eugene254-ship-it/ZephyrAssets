import './layout.js'
import '../styles/globals.css';
import React from 'react';

const Home = () => {
  return (
    <main>
      <section className="sticky ">
       
        <nav className='flex p-4 ring-2 ring-black justify-center items-center bg-white
          bg-opacity-80 mx-auto rounded-md'>
           <h1 className="text-bold text-3xl">TKRW</h1>
          <ul className='flex justify-center space-x-5 items-center
           text-center m-3 cursor-default'>
            <li className="hover:text-blue-300 ">Home</li>
            <li>About</li>
            <li>Tips</li>
            <li>Profile</li>
            <li className="flex">
              <button className="mx-2 rounded-xl bg-blue-500 p-2 text-white hover:bg-cyan-400">
                Connect Wallet
              </button>
            </li>
          </ul>
        </nav>
      </section>
      <section className="bg-white bg-opacity-90 container p-4 rounded-xl shadow-lg">
        <div>
          <h1 className="p-4">Tokenize your Real-World Assets Today !</h1>
        </div>
        <div></div>
      </section>
    </main>
  )
}

export default Home;