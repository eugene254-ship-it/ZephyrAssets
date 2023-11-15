const hre = require('hardhat');


const mintForAccounts = async () => {
  const { ethers } = hre;
  const signers = await ethers.getSigners();
  const deployer = signers[0].address;

  const ZephyrNft = await ethers.getContractFactory('Zephyr');

  const zephyrNft = await ZephyrNft.deploy(deployer, deployer, deployer); 
  
  const mintTx = await zephyrNft.safeMint(deployer);
  const mintTx2 = await zephyrNft.safeMint(deployer);
  await mintTx.wait(1);
  await mintTx2.wait(1);

  console.log(`Minted NFTs to ${deployer}`);

  // Call `balanceOf` to check the balance
  const balance = await zephyrNft.balanceOf(deployer);

  console.log(`Owner balance: ${balance}`);
}

// We don't pass `hre` here, as it's already imported at the top

mintForAccounts()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


