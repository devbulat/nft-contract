import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, ContractFactory } from "ethers";

let NftContractFactory: ContractFactory, NftContract: Contract;

beforeEach(async function () {
   NftContractFactory = await ethers.getContractFactory("Nft");
   NftContract = await NftContractFactory.deploy();

  await NftContract.deployed();
})

describe("Nft", function () {
  it("Should mint item", async function () {
    const [addr1] = await ethers.getSigners();
    await NftContract.mint(addr1.address, 'test');

    expect(await NftContract.balanceOf(addr1.address)).to.equal(1);
  });

  it("Should return items URI", async function () {
    const [addr1] = await ethers.getSigners();
    await NftContract.mint(addr1.address, 'test');

    expect(await NftContract.getTokenUri(1)).to.equal('test');
  });
});
