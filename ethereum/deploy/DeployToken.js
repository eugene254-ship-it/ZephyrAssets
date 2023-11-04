import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const DeployToken = async(hre) => {
    hre = HardhatRuntimeEnvironment;
    const {getNamedAccounts, deployments} = hre;
    const { log, deploy} = deployments;
    const { owner } = await getNamedAccounts();


    const Deploy = await deploy("Zephyr", {
        from: owner,
        args: [],
        log: true,
    })
    
}

export default DeployToken;