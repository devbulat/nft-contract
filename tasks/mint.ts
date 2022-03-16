import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

task("mint", "Mint")
  .addParam("contract", "Contract address")
  .addParam("user", "Address")
  .addParam("tokenUri", "Token Uri")
  .setAction(async (args, hre) => {
    const { contract, user, tokenUri } = args;
    const Contract = await hre.ethers.getContractFactory("Nft");
    const accounts = await hre.ethers.getSigners();
    const signer = accounts[0];

    const NftContract = await new hre.ethers.Contract(
      contract,
      Contract.interface,
      signer
    );

    await NftContract.mint(user, tokenUri).then(() => {
      console.log(`Token with token URI ${tokenUri} is minted for ${user}!`);
    });
  });

export default {};