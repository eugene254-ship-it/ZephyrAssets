// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./ZephyrTokenV1.sol";

/// @title Asset Management Contract
/// @dev Manages real-world assets tokenized as NFTs on the blockchain on ZephyrAssets.
contract AssetManager is AccessControl {
    Zephyr zephyrNft;

    /// @dev MINTER_ROLE of ERC721 Contract
    bytes32 public MINTER;

    /// @notice Constructor to set up the Asset Manager contract
    /// @param _zephyrNftAddress Address of the Zephyr NFT contract
    /// @param _adminAddress Address of the admin to be granted MINTER_ROLE
    constructor(address _zephyrNftAddress, address _adminAddress) {
        zephyrNft = Zephyr(_zephyrNftAddress);
        MINTER = zephyrNft.MINTER_ROLE();
        _grantRole(MINTER, _adminAddress);
    }

    /// @notice Custom errors for specific revert conditions :
    /**
     * @dev 
     *     Unauthorized : Not enough Information or Access Revoked
     *     UserAlreadyRegistered : User's address has already been indexed
     *     UserNotRegistered : Function Requiring a user to be registered and throw if not
     *     CannotFindAsset : AssetId cannot be found ( when not registered or deleted )
     */
    error Unauthorized();
    error UserAlreadyRegistered(address user);
    error UserNotRegistered(address user);
    error CannotFindAsset(bytes32 assetId);

    /// @notice Modifiers for access control and checks
    /// @dev Modifier to restrict function access to users with MINTER role
    modifier requireMinter(address _userAddress) {
        if (!zephyrNft.hasRole(MINTER, _userAddress)) revert Unauthorized();
        _;
    }

    /// Ensure user is not registered
    modifier isNotRegistered(address _userAddress) {
        if (isRegistered[_userAddress]) revert UserAlreadyRegistered(_userAddress);
        _;
    }

    /// Ensure user is already registered
    modifier isAlreadyRegistered(address _userAddress) {
        if (!isRegistered[_userAddress]) revert UserNotRegistered(_userAddress);
        _;
    }

    // Struct definitions
    /// @dev Structure to represent an Asset

    struct Assets {
        address holderAddress;
        bytes32 assetId;
        string description;
        uint256 price;
        assetType classType;
    }

    /// @dev Enumeration of different types of assets
    enum assetType {
        realEstate,
        vehicle,
        jewelry,
        commodities,
        accessories,
        other
    }

    /// @dev Enumeration of different types of transactions
    enum transactionType {
        Purchase,
        Sale,
        Transfer,
        Mint,
        Burn
    }

    /// @dev Structure to represent a User
    struct User {
        string username;
        address userAddress;
        bytes32 userId;
    }

    // State variables
    /// @notice mappings
    /**
     * @dev
     *     mapping
     *         userAssets : bytes userId to Possessed Assets
     *         userTransactions : UserId to array with all users's transactions 
     *         isRegistered : Address is registered
     *         getId : Address to get bytes32 id
     *         idExists : bytes32 Id already exists
     *         HoldingAssets : Address's amount of Assets Holding
     */
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

    /// @notice Register a new user
    /// @param _username The username of the user
    /// @param _address The wallet address of the user
    /// @dev Registers a new user and assigns them a unique userId
    function registerUser(string memory _username, address _address) public isNotRegistered(_address) {
        bytes32 id = keccak256(abi.encodePacked(block.timestamp, _username, _address));
        User memory newUser = User({username: _username, userAddress: _address, userId: id});
        users.push(newUser);
        isRegistered[_address] = true;
        TotalUsers++;
    }

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

    /// @notice Allows a registered user to create a listing for an asset
    /// @param _assetId The unique identifier of the asset
    /// @param _userId The unique identifier of the user creating the listing
    /// @param _newDescription New description for the asset
    /// @param _listingPrice Price at which the asset is listed for sale
    /// @dev Updates asset details for listing and records the transaction
    /// @return Status code indicating success (0 for success)
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

    /// @notice Allows a user to buy a listed asset
    /// @param _assetId The unique identifier of the asset to be purchased
    /// @param _userId The unique identifier of the buyer
    /// @dev Transfers ownership of the asset and updates the price to zero (unlisted)
    /// @return Boolean indicating whether the purchase was successful
    function buyAsset(bytes32 _assetId, bytes32 _userId) 
    private pure returns (bool) {
        // Logic to handle asset purchase
        // Update asset ownership, transfer funds, etc.
        // Update transaction history
        return true;
    }

    /// @notice Allows a user to place a bid on an asset
    /// @param _assetId The unique identifier of the asset
    /// @param _userId The unique identifier of the bidder
    /// @param _bidAmount The amount of the bid
    /// @dev Records the bid and updates asset state if necessary
    function placeBid(bytes32 _assetId, bytes32 _userId, uint256 _bidAmount) public {
        // Logic to handle placing a bid
        // Update asset state to reflect bid
        // Record the bid transaction
    }
    
    /// @notice Removes a listing for an asset
    /// @param _assetId The unique identifier of the asset to be unlisted
    /// @dev Sets the asset price to zero and updates its state to unlisted
    function removeListing(bytes32 _assetId) private {}


    function removeAsset() private {}

    function modifyAssetDescription() private {}

    function modifyAssetPrice() private {}

    function modifyAssetAddressOwner() private {}

    receive() external payable {}
    fallback() external payable {}

    function getNumberOfHolders() public view returns (uint256) {
        return TotalUsers;
    }

    function getUserTransactionHistory(bytes32 _userId) public view returns (transactionType[] memory) {
        return userTransactions[_userId];
    }

    function getUserId() public view returns (bytes32) {
        return getId[msg.sender];
    }
}
