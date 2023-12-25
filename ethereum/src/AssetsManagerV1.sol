// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./ZephyrTokenV1.sol";

contract AssetManager is AccessControl {
    Zephyr zephyrNft;
    bytes32 public immutable MINTER; 
    constructor(address _zephyrNftAddress, address _adminAddress) {
        zephyrNft = Zephyr(_zephyrNftAddress);
        MINTER = zephyrNft.MINTER_ROLE();
        _grantRole(MINTER, _adminAddress);

    }

    
    error Unauthorized(); // No additional information
    error UserAlreadyRegistered(address user);
    error UserNotRegistered(address user);
    error CannotFindAsset(bytes32 assetId);

    modifier requireMinter(address _userAddress) {
        if (!zephyrNft.hasRole(MINTER, _userAddress)) revert Unauthorized();
        _;
    }

    modifier isNotRegistered(address _userAddress) {
        if (isRegistered[_userAddress]) revert UserAlreadyRegistered(_userAddress);
        _;
    }

    modifier isAlreadyRegistered(address _userAddress) {
        if (!isRegistered[_userAddress]) revert UserNotRegistered(_userAddress);
        _;
    }

    struct Assets {
        address holderAddress;
        bytes32 assetId;
        string description;
        uint256 price;
        assetType classType;
    }

    enum assetType {
        realEstate,
        vehicule,
        jewelry,
        commodities,
        accessories,
        other
    }

    enum transactionType {
        Purchase,
        Sale,
        Transfer,
        Mint,
        Burn
    }

    struct User {
        string username;
        address userAddress;
        bytes32 userId;
    }

    mapping(bytes32 => Assets[]) public userAssets;
    mapping(bytes32 => transactionType[]) public userTransactions;

    User[] public users;
    Assets[] public assets;

    mapping(address => bool) public isRegistered;

    mapping(address => bytes32) public getId;
    mapping(bytes32 => bool) public idExists;
    mapping(address => uint256) public HoldingAssets;

    uint256 internal TotalUsers = 0;
    uint256 internal TotalAssets = 0;

    function registerUser(
        string memory _username,
        address _address) 
        public 
        isNotRegistered(_address) {
        bytes32 id = keccak256(abi.encodePacked(block.timestamp, _username, _address));

        User memory newUser = User({username: _username, userAddress: _address, userId: id});

        users.push(newUser);
        isRegistered[_address] = true;
        TotalUsers++;
    }

  

    /* problem here is that we need to call this function when the user makes a request of 
    adding his asset, then a minter accepts and then calls the function 
    with his account but how ? 

    maybe use a modifier that says minter Only */

    function createNewAsset(
        // address _minterAddress,
        address _holderAddress,
        bytes32 _userId,
        string memory _description,
        uint256 _price,
        assetType _classType
    ) public returns (bool) {
        //  requireMinter(_minterAddress)
        require(zephyrNft.hasRole(MINTER, msg.sender), "Cannot Interact with the contract");
        bytes32 id = keccak256(abi.encodePacked(_holderAddress, _classType, _price));
        Assets memory newAsset = Assets({
            holderAddress: _holderAddress,
            description: _description,
            price: _price,
            classType: _classType,
            assetId: id
        });

        zephyrNft.safeMint(_holderAddress);

        assets.push(newAsset);
        HoldingAssets[_holderAddress]++;
        TotalAssets++;
        idExists[id] = true;

        userTransactions[_userId].push(transactionType.Mint);
        return (true);
    }

    function testMint() public returns (int16) {
        zephyrNft.safeMint(msg.sender);
        return 0;
    }

    function createListing(bytes32 _assetId, bytes32 _userId, string memory _newDescription, uint256 _listingPrice)
        public
        isAlreadyRegistered(msg.sender)
        returns (uint16)
    {
        bool assetExists = false;
        uint256 assetIndex = 0;
        for (uint256 i = 0; i < assets.length; i++) {
            if (assets[i].assetId == _assetId) {
                assetExists = true;
                assetIndex = i;
                break;
            }
        }

        if (assetExists) revert CannotFindAsset(_assetId);

        require(assets[assetIndex].holderAddress == msg.sender, "Caller is not the asset owner.");

        // Update asset details for listing
        assets[assetIndex].price = _listingPrice;
        assets[assetIndex].description = _newDescription;
        // Optionally, mark the asset as listed in some way

        // Record the transaction
        userTransactions[_userId].push(transactionType.Sale);

        return 0;
    }

    // function removeAsset() private {}

    // function modifyAssetDescription() private {}

    // function modifyAssetPrice() private {}

    // function modifyAssetAddressOwner() private {}

    function removeListing() private {}

    function Buy() private returns (bool) {}

    function Bid() private pure {}

    receive() external payable {}
    fallback() external payable {}

      function getNumberOfHolders() public view returns (uint256) {
        return TotalUsers;
    }

    function getUserTransactionHistory(bytes32 _userId) public view returns (transactionType[] memory) {
        return userTransactions[_userId];
    }

    function getUserId() public view returns(bytes32) {
        return getId[msg.sender];
    }
}
