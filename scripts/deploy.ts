import { ethers } from "hardhat";

async function main() {

  const initialBalance = 20;
  const contract = await ethers.deployContract("NumberStorage", [initialBalance]);

  await contract.waitForDeployment();

  console.log(
    `NumberStorage with ETH and unlock timestamp deployed to ${contract.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
