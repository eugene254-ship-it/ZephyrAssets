require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("fs");
require("dotenv").config();



/** @type import('hardhat/config').HardhatUserConfig */

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

module.exports = {
  solidity: {
    version: "0.8.20",
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
    sepolia : {
      chainId: 11155111,
      url: String(process.env.SEPOLIA_RPC_URL),
      accounts: [String(process.env.PRIVATE_KEY)],
    }
  },
  namedAccounts:{
    owner: {
      default: 0,
    },
  },
};
