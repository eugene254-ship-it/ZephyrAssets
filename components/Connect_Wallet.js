'use client';
import React, { useState, useEffect } from 'react';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const Connect_Wallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState('');

  let web3Modal;

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "822d31f00fbf44048318b8a7bc4c4098"  // Insert your Infura Project ID here
      }
    }
  };

  web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions
  });

  const connectWallet = async () => {
    const provider = await web3Modal.connect();
    const web3 = new ethers.providers.Web3Provider(provider);
    const signer = web3.getSigner();
    const address = await signer.getAddress();
    
    setIsConnected(true);
    setAccountAddress(address);
  };

  const checkAccount = async () => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  };

  useEffect(() => {
    checkAccount();
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
