import './layout.js'
import '../styles/globals.css';
import React from 'react';
import Navbar from '@/components/Navbar.js';
import Footer from '@/components/Footer.js';
import { Why1, Why2, Why3, Why4} from '@/components/Text.js';
import PurposePart from '@/components/PurposePart.js';
import Showcase from '@/components/Showcase.js';

const Home = () => {
  return (
    <main>
     <Navbar></Navbar>
      <Showcase></Showcase>
      <PurposePart></PurposePart>

      <section className="why-do-it? mt-5 mx-auto text-center justify-center 
      bg-white ring-2 ring-black items-center container p-4 rounded-xl">
        <div>
          <h2 className="text-3xl font-semibold text-">Why should you Tokenize your assets ?</h2>
          <Why1></Why1>
          <Why2></Why2>
          <Why3></Why3>
          <Why4></Why4>
        </div>
      </section>
      <section className="container mx-auto grid grid-cols-2 gap-3">
        <div className="main-div">
          <h1>How it Works</h1>
        </div>
        <div className="main-div">
          <h1 className="text-3xl font-semibold">Most common Questions</h1>
          <></>
        </div>
      </section>
      <Footer></Footer>
    </main>
    
  )
}

export default Home;