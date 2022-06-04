/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config({path:__dirname+'/.env'});
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: "https://eth-goerli.alchemyapi.io/v2/NNSC4vzqU_9D80OVHlbNHKeX6GvIDTEU",
         accounts: ["0x8b4640dac7c9c1cb064785fefa866c80e5a54070a7e0cb5568c6e77ea68bc7d7"]
      }
   },
};
