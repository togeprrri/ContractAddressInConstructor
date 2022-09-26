const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Contract = await ethers.getContractFactory("Example");

    const ex = await Contract.deploy(1);

    await ex.setAddressEthers(ex.address);
  
    console.log("Contract address:", await ex.contractAddressEthers());
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });