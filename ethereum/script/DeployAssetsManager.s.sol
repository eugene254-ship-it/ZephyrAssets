// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Script, console2} from "forge-std/Script.sol";
import {AssetManager} from "../src/AssetsManagerV1.sol";
import {Zephyr} from "../src/ZephyrTokenV1.sol";


contract CounterScript is Script {

    AssetManager assets;
    Zephyr zephyrToken;

    // function setUp() public {}

    function run() public {
        vm.startBroadcast();
        zephyrToken = new Zephyr(msg.sender, msg.sender, msg.sender);
        assets = AssetManager(payable(address(zephyrToken)));
        vm.stopBroadcast();



    }
}
