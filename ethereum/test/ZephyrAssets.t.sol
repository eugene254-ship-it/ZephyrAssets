// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test, console2} from "forge-std/Test.sol";
import {AssetManager} from "../src/AssetsManagerV1.sol";
import {Zephyr} from "../src/ZephyrTokenV1.sol";
import "forge-std/console.sol";

/// @title Zephyr Test Contract
/// @dev Testing contract for Asset Manager and Zephyr Token functionalities
contract ZephyrTest is Test {
    AssetManager assets;
    Zephyr zephyrToken;

    struct fuzz {
        string name;
        address addr;
    }

    uint256 constant JEWELRY_PRICE = 41;
    fuzz admin = fuzz("John Marston", makeAddr("johnmarston"));
    fuzz fuzz1 = fuzz("SAMURAI OKISHITA", makeAddr("okishitaSamuraika"));
    fuzz fuzz2 = fuzz("Jean Frank Chabal", makeAddr("JFC"));

    string BASIC_DESCRIPTION = "A red white incrusted diamond watch";

    /// @notice Sets up the testing environment before each test
    /// @dev Deploys Zephyr and AssetManager contracts and registers an admin user
    function setUp() public {
        zephyrToken = new Zephyr(admin.addr, admin.addr, admin.addr);
        assets = new AssetManager(address(zephyrToken), admin.addr);
        vm.prank(admin.addr);
        assets.registerUser(admin.name, admin.addr);
        assertEq(assets.isRegistered(admin.addr), true);
    }

    /// @notice Tests the registration of a new user in the Asset Manager
    /// @dev Ensures that a new user can successfully register
    function testAssetsManagerRegistersUser() public {
        vm.prank(fuzz1.addr);
        assets.registerUser(fuzz1.name, fuzz1.addr);
        assertEq(assets.isRegistered(fuzz1.addr), true);
    }

    /// @notice Tests that registering an already registered user fails
    /// @dev Ensures that the contract prevents duplicate registrations
    function testFailsifAlreadyRegistered() public {
        vm.prank(fuzz1.addr);
        assets.registerUser(fuzz1.name, fuzz1.addr);
        vm.expectRevert();
        assertEq(assets.isRegistered(fuzz1.addr), true);
    }

    /// @notice Tests minting of Zephyr tokens by an admin with MINTER_ROLE
    /// @dev Ensures that an admin can mint Zephyr tokens
    function testZephyrTokensMintwithAdminRole() public {
        vm.prank(admin.addr);
        zephyrToken.safeMint(admin.addr);
        assertEq(zephyrToken.balanceOf(admin.addr), 1);
        assertEq(zephyrToken.ownerOf(0), admin.addr);
    }

    /// @notice Tests granting MINTER_ROLE and minting Zephyr tokens
    /// @dev Ensures that a user with MINTER_ROLE can mint tokens
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

    /// @notice Tests that minting fails for users without MINTER_ROLE
    /// @dev Ensures that the contract enforces role-based access control for minting
    function testMintFailsifNotMINTER() public {
        vm.expectRevert();
        zephyrToken.safeMint(fuzz2.addr);
    }

    function testverifyAdminisMinterandVerifyMinterRoleInternally() public {
        vm.startPrank(admin.addr);
        // internal calls
        bool ZephTokenResult = zephyrToken.hasRole(zephyrToken.MINTER_ROLE(), admin.addr);
        bool AssetsResult = assets.hasRole(assets.MINTER(), admin.addr);
        vm.stopPrank();
        assertEq(ZephTokenResult, true);
        assertEq(AssetsResult, true);
    }

    function testverifyAdminisMinterandVerifyMinterRoleExternally() public {
        // external calls
        vm.startPrank(admin.addr);
        bool ZephTokenResult = zephyrToken.hasRole(assets.MINTER(), admin.addr);
        bool AssetsResult = assets.hasRole(zephyrToken.MINTER_ROLE(), admin.addr);
        vm.stopPrank();
        assertEq(ZephTokenResult, true);
        assertEq(AssetsResult, true);
    }

    /**
     * @dev Modifier that checks that an account has a specific role. Reverts
     * with an {AccessControlUnauthorizedAccount} error including the required role.
     *  
     * modifier onlyRole(bytes32 role) {
     *     _checkRole(role);
     *     _;
     * }   
     * 
     * @dev Reverts with an {AccessControlUnauthorizedAccount} error if `_msgSender()`
     * is missing `role`. Overriding this function changes the behavior of the {onlyRole} modifier.
     *  
     * function _checkRole(bytes32 role) internal view virtual {
     * _checkRole(role, _msgSender());
     * }
     */

    function testCreateNewAsset() public {
        vm.startPrank(admin.addr);
        bytes32 userId = assets.getUserId();
        assets.createNewAsset(fuzz1.addr, userId, BASIC_DESCRIPTION, JEWELRY_PRICE, AssetManager.assetType.jewelry);
        assertEq(assets.HoldingAssets(admin.addr), 1);
        vm.stopPrank();
    }
}
