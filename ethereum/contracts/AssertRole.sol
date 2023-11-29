// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./ZephyrTokenV1.sol";
import "./AssetsManagerV1.sol";

contract AssertRole is AccessControl {

    Zephyr zephyr;
    AssetManager assets;

    constructor(address _zephyrAddress, address _assetsAddress){
        zephyr = Zephyr(_zephyrAddress);
        assets = AssetManager(payable(_assetsAddress));

    }

    function checkingRole(bytes32 role, address account) public view  returns (bool) {
        require(zephyr.hasRole(role, account),"NO ROLE");
        return true;
    }

    


}