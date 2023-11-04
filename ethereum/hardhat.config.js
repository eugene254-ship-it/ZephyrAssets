require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("dotenv");
require("fs");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    localhost :{
      chainId: 31337,
    },
    hardhat: {
      chainId: 31337,
    },
  },
  namedAccounts:{
    owner: {
      default: 0,
    },
  },
};
