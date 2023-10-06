'use client';
import { ethers } from 'ethers';
import React, { useState, useEffect } from 'react';

const Connect_Wallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountImage, setAccountImage] = useState('');

  const checkAccount = async () => {
    console.log("Checking account...");
    
    if (window.ethereum) {
      console.log("window.ethereum is available");
      
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const selectedAddress = accounts[0];
        console.log('Account is Connected:', selectedAddress);
        setIsConnected(true);
        setAccountAddress(selectedAddress);
      } catch (error) {
        console.log("An error occurred:", error);
      }
    } else {
      console.log("window.ethereum is not available");
    }
  };
  
  useEffect(() => {
    // Comment this out if you don't want to automatically check for account connection
    checkAccount();
  }, []);

  return (
    <div className="flex items-center space-x-2">
      {isConnected ? (
        <>
          <span className="text-white ring-2 p-2 rounded-xl ring-black bg-red-700 hover:bg-blue-300">{accountAddress.slice(0, 6)}...</span>
        </>
      ) : (
        <button
          className="bg-blue-500 p-2 text-white hover:bg-cyan-400 active:bg-cyan-700 mx-2 rounded-xl"
          onClick={checkAccount}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Connect_Wallet;
