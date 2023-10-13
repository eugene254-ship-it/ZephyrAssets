"use client"
import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import Web3 from 'web3';

const Connect_Wallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState('');

  // Set up Web3Modal
  const web3Modal = new Web3Modal();

  const connectWallet = async () => {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();

    if (accounts.length > 0) {
      setIsConnected(true);
      setAccountAddress(accounts[0]);
    }
  };

  const checkIfWalletIsConnected = async () => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
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
          className="bg-blue-500 p-2 text-white hover:bg-cyan-400 active:bg-cyan-700 mx-2 rounded-xl"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Connect_Wallet;
