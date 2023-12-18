// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {AssetManager} from "../src/AssetsManagerV1.sol";
import {Zephyr} from "../src/ZephyrTokenV1.sol";


contract CounterTest is Test {
    AssetManager assets;
    Zephyr zephyrToken;

    function setUp() public {
        zephyrToken = new Zephyr(msg.sender, msg.sender, msg.sender);
        assets = AssetManager(payable(address(zephyrToken)));

    }

    function test_Increment() public {
       
    }

    function testFuzz_SetNumber(uint256 x) public {
       
    }
}
