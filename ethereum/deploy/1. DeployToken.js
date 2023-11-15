const { sign } = require("crypto");
const { ethers } = require("hardhat");

const DeployToken = async(hre) => {
    
    const {getNamedAccounts, deployments} = hre;
    const { log, deploy} = deployments;
    const signers = await ethers.getSigners();
    const owner = signers[0];
    const ownerAddress = owner.address;
    
    log("------------------------------------");
    

    try {
      
    const deployresult = await deploy("Zephyr", {
        from: ownerAddress,
        args: [ownerAddress, ownerAddress, ownerAddress],
        log: true,
    });
    
    } catch (error) {
        console.log(error);
    }

    
}

module.exports = DeployToken;