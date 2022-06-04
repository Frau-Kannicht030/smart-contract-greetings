/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config({
  path: __dirname + '/.env'
});
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const {
  API_URL,
  API_KEY,
  PRIVATE_KEY
} = process.env;

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};