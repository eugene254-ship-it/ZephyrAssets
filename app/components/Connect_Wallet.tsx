"use client"
import React, { useState, useEffect } from 'react';

const Connect_Wallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState('');

//  MAKE A FULLY RESPONSIVE CONNECT WALLET
  const connectWallet = async () => {
  };


  useEffect(() => {
   
  }, []);

  return (
    <div className="flex items-center space-x-2">
      {isConnected ? (
        <>
          <span className="text-white ring-2 p-2 rounded-xl ring-black bg-red-700 hover:bg-blue-300">
            {accountAddress.slice(0, 6)}...
          </span>
        </>
      ) : (
        <button
          className="bg-blue-500 p-2 text-white hover:bg-cyan-600 active:bg-cyan-700 duration-300 hover:scale-105 mx-2 rounded-xl"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Connect_Wallet;
