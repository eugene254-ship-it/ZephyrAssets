// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./ZephyrTokenV1.sol";
import "./AssetsManagerV1.sol";

/// @title Assert Role Contract
/// @dev Contract designed to test and verify roles, particularly for external contracts
contract AssertRole is AccessControl {
    Zephyr zephyr;
    AssetManager assets;

    /// @notice Constructor to set up the Assert Role contract
    /// @param _zephyrAddress Address of the Zephyr ERC721 token contract
    /// @param _assetsAddress Address of the Asset Manager contract
    /// @dev Initializes contract with references to Zephyr and AssetManager contracts
    constructor(address _zephyrAddress, address _assetsAddress) {
        zephyr = Zephyr(_zephyrAddress);
        assets = AssetManager(payable(_assetsAddress));
    }

    /// @notice Checks if a specific account has a given role in the Zephyr contract
    /// @param role The role identifier to check
    /// @param account The account address to verify
    /// @return True if the account has the role, otherwise it reverts
    /// @dev This function is used to assert and verify roles, primarily for testing purposes
    function checkingRole(bytes32 role, address account) public view returns (bool) {
        if (zephyr.hasRole(role, account) == false) revert AccessControlUnauthorizedAccount(account, role);
        return true;
    }
}
