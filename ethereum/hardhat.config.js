require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  network: {
    localhost:{
      url: "http://127.0.0.1:8545/",
      chainId: 6845,
      gas: "auto",
    }
    
    

  }
};
