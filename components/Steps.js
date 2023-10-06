import React from 'react'

const Steps = () => {
  return (
    <div className="main-div ring-4 ring-red-600 bg-white">
          <h1 className="bw-title container inline-block text-center">What Steps Need to Be Taken to Achieve This?</h1>
          <div className="step-div">
            <h2 className="text-red-100">Initial Assessment</h2>
            <p className="text-black p-2">Evaluate the property's worth through an accredited agency.</p>
          </div>
          <div className="step-div">
            <h2 className="text-red-200">Legal Framework</h2>
            <p className="text-black p-2">Consult legal advisors to set up a legal structure that complies with local real estate laws.</p>
          </div>
          <div className="step-div">
            <h2 className="text-red-300">Token Creation</h2>
            <p className="text-black p-2">Use a blockchain platform to create tokens that represent shares in the property.</p>
          </div>
          <div className="step-div">
            <h2 className="text-red-400">Token Sale</h2>
            <p className="text-black p-2">This could be a private sale to accredited investors or a public offering, depending on jurisdiction and compliance.</p>
          </div>
          <div className="step-div">
            <h2 className="text-red-500">Management and Operations</h2>
            <p className="text-black p-2">A management company could be responsible for the property, with token holders voting on significant decisions.</p>
          </div>
          <div className="step-div">
            <h2 className="text-red-600">Dividends and Payouts</h2>
            <p className="text-black p-2">Use smart contracts to automatically distribute profits from rent or eventual sale to token holders.</p>
          </div>
      </div>
  )
}

export default Steps