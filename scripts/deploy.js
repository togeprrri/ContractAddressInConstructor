const { ethers } = require("hardhat");
const { getContractAddress } = require("@ethersproject/address")

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const transactionsCount = await deployer.getTransactionCount();

    const contractAddress = getContractAddress({
        from: deployer.address,
        nonce: transactionsCount
    });

    console.log("Contract address before deployment:", contractAddress);
  
    const Contract = await ethers.getContractFactory("Example");

    const ex = await Contract.deploy(1);

    await ex.setAddressEthers(contractAddress); 
  
    console.log("Contract address after deployment:", await ex.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });