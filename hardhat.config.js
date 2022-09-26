require("@nomicfoundation/hardhat-toolbox");

const {ALCHEMY_API_KEY, PRIVATE_KEY_IVS2} = require("./keys.js");


module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [PRIVATE_KEY_IVS2]
    }
  }
};
