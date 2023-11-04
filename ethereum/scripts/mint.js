const { getContract } = require("viem");
const hre = require('hardhat');


const mintForAccounts = async () => {
  const { getNamedAccounts, deployments, ethers } = hre;
  const { log } = deployments;
  const { owner } = await getNamedAccounts();

  // Assuming 'getContract' is a function that fetches the deployed contract instance
  const NFTContract = await getContract('Zephyr', owner);

  // Assuming `safeMint` is a transaction, it needs to be sent and awaited
  const mintTx = await NFTContract.safeMint(owner);
  await mintTx.wait(); // Wait for the transaction to be mined
  log(`Minted 100 NFTs to ${owner}`);

  // Call `balanceOf` to check the balance
  const balance = await NFTContract.balanceOf(owner);
  log(`Owner balance: ${balance}`);
}

// We don't pass `hre` here, as it's already imported at the top
mintForAccounts()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
