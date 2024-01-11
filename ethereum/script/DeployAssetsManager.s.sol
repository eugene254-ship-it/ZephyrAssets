// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script, console2} from "forge-std/Script.sol";
import {AssetManager} from "../src/AssetsManagerV1.sol";
import {Zephyr} from "../src/ZephyrTokenV1.sol";

/// @title Deployment Script for AssetManager and Zephyr Contracts
/// @dev This script deploys the AssetManager and Zephyr contracts using Foundry
contract DeployAssetsManager is Script {
    AssetManager assets;
    Zephyr zephyrToken;

    /// @notice Deploys the Zephyr and AssetManager contracts
    /// @dev The script uses Foundry's Script functionality to deploy contracts
    /// The Zephyr contract is deployed first, followed by the AssetManager contract
    function run() public {
        vm.startBroadcast();
        // Deploy Zephyr contract with the deploying address as admin, pauser, and minter
        zephyrToken = new Zephyr(msg.sender, msg.sender, msg.sender);
        // Deploy AssetManager contract with the address of the Zephyr contract
        assets = AssetManager(payable(address(zephyrToken)));
        vm.stopBroadcast();
    }
}
