'use client'
import { ethers } from 'ethers';
import React, { useState, useEffect } from 'react';

const Connect_Wallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountImage, setAccountImage] = useState('');

  useEffect(() => {
    async function checkAccount() {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const selectedAddress = accounts[0];
          console.log('Account is Connected:', selectedAddress);
          setIsConnected(true);
          setAccountAddress(selectedAddress);

          // You should replace this with your logic to fetch the associated image for the address.
          // Example: const imageUrl = await fetchImageForAddress(selectedAddress);
          const imageUrl = ''; // Replace with the actual image URL

          setAccountImage(imageUrl);
        } catch (error) {
          console.error(error);
        }
      }
    }

    checkAccount();
  }, []);

  return (
    <div className="flex items-center space-x-2">
      {isConnected ? (
        <>
          <span className="text-white">{accountAddress.slice(0, 6)}...</span>
        </>
      ) : (
        <button
          className="bg-blue-500 p-2 text-white hover:bg-cyan-400 active:bg-cyan-700 mx-2 rounded-xl"
          
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Connect_Wallet;
