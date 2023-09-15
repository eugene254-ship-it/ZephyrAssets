
const Showcase = () => {
  return (
    <section className="mt-5 mx-auto bg-white text-center justify-center items-center bg-opacity-90 container p-4 rounded-xl shadow-lg">
        <div>
          <h1 className="p-4 mt-4 mb-6 shadow-xl text-bold font-bold text-2xl inline-block ring-2
           ring-cyan-500 rounded-xl bg-gray-500 bg-opacity-40">Tokenize your Real-World Assets Today !</h1>
           <ul className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4 ring-2 ring-black rounded-md  ">
            <li className="nfts-assets bg-[#616179]">
              <span className="inline-flex">NYC House</span>
                <img src="./blue-badge.png" className="w-[20px] inline-block mx-2"></img>
              <img src="./pixel-house.png" alt="pixelated-house" className="ring-2 ring-black mt-2" ></img>
              <h2 className="text-bold font-bold"> Estimated Value : 10 ETH</h2>
            </li>
            <li className="nfts-assets bg-white">
              BMW Special Car
              <img src="./blue-badge.png" className="w-[20px] inline-block mx-2"></img>
              <img src="./pixel-car.png" alt="pixelated-car" className="ring-2 ring-black mt-2" ></img>
              <h2 className="text-bold font-bold"> Estimated Value : 10 ETH</h2>

            </li>
            <li className="nfts-assets bg-[#784647]">
              Official Documents
              <img src="./blue-badge.png" className="w-[20px] inline-block mx-2"></img>
              <img src="./pixel-paper.png" alt="pixelated-paper" className="ring-2 ring-black mt-2"></img>
              <h2 className="text-bold font-bold"> Estimated Value : 10 ETH</h2>

            </li>
           </ul>
          {/* <p className="mt-5 text-center font-semibold">Welcome to the first world-class Token Real Assets </p> */}

        </div>
        
      </section>
  )
}

export default Showcase;