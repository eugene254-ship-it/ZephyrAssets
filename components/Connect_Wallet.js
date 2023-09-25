'use client'
import { ethers } from'ethers';
import React, {useState} from 'react'


const Connect_Wallet = () => {
  const [isConnected, setIsConnected] = useState(false);



    const onClick = async () => {
      const eth = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/822d31f00fbf44048318b8a7bc4c4098"); 
      


      if (window.ethereum) {
        try {
          const acccounts = await window.ethereum.request({method: 'eth_requestAccounts'});
          console.log('Account is Connected');
          setIsConnected(true);

        } catch (error) {
          console.log(error);
        }
       
      };

    }
  return (
    <button 
    className={`${isConnected ? "bg-blue-800 text-stone-50 ring-pink-500 p-2 rounded-xl" : "bg-blue-500 p-2 text-white hover:bg-cyan-400 active:bg-cyan-700 mx-2 rounded-xl"}`} 
    onClick={onClick}>
      {isConnected ? "Connected" : "Connect Wallet"}
  </button>
         )
}

export default Connect_Wallet;

