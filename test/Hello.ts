import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";

describe("Hello", () => {

  async function initFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    console.log(owner.address);

    const Hello = await ethers.getContractFactory("Hello");

    Hello.


    const helloContract = Hello.deploy()
    return { helloContract }
  }




  describe("TestsCollection", () => {

    it("greetings", async () => {

    });

  });
});