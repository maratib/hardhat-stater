import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("NumberStorage", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function initFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const NumberStorage = await ethers.getContractFactory("NumberStorage");

    const numberStorage = await NumberStorage.deploy(20);

    return { numberStorage, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the value of storedNumber value to the value passed in", async function () {
      const { numberStorage, owner } = await loadFixture(initFixture);

      await numberStorage.setNumber(10);
      const response = await numberStorage.getNumber();
      console.log(response);
      expect(response).to.equal(30)

    });
  });
});
