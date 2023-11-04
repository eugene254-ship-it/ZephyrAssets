const { DeployFunction } = require("hardhat-deploy/dist/types");
const { HardhatRuntimeEnvironment } = require("hardhat/types");


const DeployToken = async(hre) => {
    
    const {getNamedAccounts, deployments} = hre;
    const { log, deploy} = deployments;
    const { owner } = await getNamedAccounts();
    
    log("------------------------------------");

    const Deploy = await deploy("Zephyr", {
        from: owner,
        args: [owner, owner, owner],
        log: true,
    })
    
}

module.exports = DeployToken;