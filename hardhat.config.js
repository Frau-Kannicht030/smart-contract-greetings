/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config({
  path: __dirname + '/.env'
});
require("@nomiclabs/hardhat-ethers");

const {
  API_URL,
  API_KEY,
  PRIVATE_KEY
} = process.env;

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL + API_KEY,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
};