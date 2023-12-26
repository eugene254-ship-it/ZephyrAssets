// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

/// @title Zephyr ERC721 Token
/// @dev Extends ERC721 Non-Fungible Token Standard with pausability and burnability
contract Zephyr is ERC721, ERC721Pausable, AccessControl, ERC721Burnable {
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    uint256 private _nextTokenId;

    /// @notice Contract constructor that sets up the ERC721 token with given roles
    /// @param defaultAdmin The address granted the default admin role
    /// @param pauser The address granted the pauser role
    /// @param minter The address granted the minter role
    constructor(address defaultAdmin, address pauser, address minter) ERC721("Zephyr", "ZPH") {
        _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
        _grantRole(PAUSER_ROLE, pauser);
        _grantRole(MINTER_ROLE, minter);
    }

    /// @notice Pauses all token transfers
    /// @dev The calling address must have the PAUSER_ROLE
    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    /// @notice Unpauses all token transfers
    /// @dev The calling address must have the PAUSER_ROLE
    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    /// @notice Mints a new token to a specified address
    /// @dev The calling address must have the MINTER_ROLE
    /// @param to The address that will receive the minted token
    function safeMint(address to) public onlyRole(MINTER_ROLE) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }

    /// @notice Gets the contract's address
    /// @return The contract's address
    function getAddress() public view returns (address) {
        return address(this);
    }

    // The following functions are overrides required by Solidity.

    /// @dev Internal function to update token state, overriding ERC721 and ERC721Pausable
    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Pausable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    /// @notice Determines if the contract implements an interface
    /// @dev Overrides ERC721 and AccessControl's supportsInterface method
    /// @param interfaceId The interface identifier, as specified in ERC-165
    /// @return True if the contract implements the interface
    function supportsInterface(bytes4 interfaceId) public view override(ERC721, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
