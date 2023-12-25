// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test, console2} from "forge-std/Test.sol";
import {AssetManager} from "../src/AssetsManagerV1.sol";
import {Zephyr} from "../src/ZephyrTokenV1.sol";
import "forge-std/console.sol";

contract ZephyrTest is Test {
    AssetManager assets;
    Zephyr zephyrToken;

    struct FUZZ_NAME {
        string name;
        address addr;
    }

    uint256 constant JEWELRY_PRICE = 41; 
    FUZZ_NAME admin = FUZZ_NAME("John Marston", makeAddr("johnmarston"));
    FUZZ_NAME fuzz1 = FUZZ_NAME("SAMURAI OKISHITA", makeAddr("okishitaSamuraika"));
    FUZZ_NAME fuzz2 = FUZZ_NAME("Jean Frank Chabal", makeAddr("JFC"));

    string BASIC_DESCRIPTION = "A red white incrusted diamond watch";

    function setUp() public {
        zephyrToken = new Zephyr(admin.addr, admin.addr, admin.addr);
        assets = new AssetManager(address(zephyrToken), admin.addr);
        vm.prank(admin.addr);
        assets.registerUser(admin.name, admin.addr);
        assertEq(assets.isRegistered(admin.addr), true);
    }

    function testAssetsManagerRegistersUser() public {
        vm.prank(fuzz1.addr);
        assets.registerUser(fuzz1.name, fuzz1.addr);
        assertEq(assets.isRegistered(fuzz1.addr), true);
    }

    function testFailsifAlreadyRegistered() public {
        vm.prank(fuzz1.addr);
        assets.registerUser(fuzz1.name, fuzz1.addr);
        vm.expectRevert();
        assertEq(assets.isRegistered(fuzz1.addr), true);
    }

    function testZephyrTokensMintwithAdminRole() public {
        vm.prank(admin.addr);
        zephyrToken.safeMint(admin.addr);
        assertEq(zephyrToken.balanceOf(admin.addr), 1);
        assertEq(zephyrToken.ownerOf(0), admin.addr);
    }

    function testZephyrTokensGrantAdminRoleAndMint() public {
        bytes32 minterRole = zephyrToken.MINTER_ROLE();
        vm.prank(admin.addr);
        zephyrToken.grantRole(minterRole, fuzz2.addr);
        assertEq(zephyrToken.hasRole(minterRole, fuzz2.addr), true);
        vm.prank(fuzz2.addr);
        zephyrToken.safeMint(fuzz2.addr);
        assertEq(zephyrToken.balanceOf(fuzz2.addr), 1);
        assertEq(zephyrToken.ownerOf(0), fuzz2.addr);
    }

    function testMintFailsifNotMINTER() public {
        vm.expectRevert();
        zephyrToken.safeMint(fuzz2.addr);
    }


    function verifyAdminisMinterandVerifyMINTERROLE() public{
        
    }
    // function testCreateNewAsset() public {
    //     vm.startPrank(admin.addr);
    //     bytes32 userId = assets.getUserId();
    //     assets.createNewAsset(fuzz1.addr, userId, BASIC_DESCRIPTION, JEWELRY_PRICE, AssetManager.assetType.jewelry);
    //     assertEq(assets.HoldingAssets(admin.addr), 1);
    //     vm.stopPrank();
    // }

   
}
