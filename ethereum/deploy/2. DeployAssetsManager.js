const { ethers } = require("hardhat");

const deployAssetsManager = async ( hre ) => {

    const { getNamedAccounts, deployments } = hre;
    const { log, deploy } = deployments;
    const signers = await ethers.getSigners();
    const owner = signers[0];
    const ownerAddress = owner.address;

    const tokenAddress = await ethers.getContract("Zephyr");

    const deployAssetsManager = await deploy("AssetManager", {
        from: ownerAddress,
        args: [tokenAddress.target],
        log: true,

    });

    

}

module.exports = deployAssetsManager;