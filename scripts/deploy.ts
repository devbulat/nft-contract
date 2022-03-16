import { ethers } from "hardhat";

async function main() {
  const NftContractFactory = await ethers.getContractFactory("Nft");
  const NftContract = await NftContractFactory.deploy();

  await NftContract.deployed();

  console.log("Nft deployed to:", NftContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
