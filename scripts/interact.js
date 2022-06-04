const API_KEY = "https://eth-goerli.alchemyapi.io/v2/NNSC4vzqU_9D80OVHlbNHKeX6GvIDTEU";
const PRIVATE_KEY = "0x8b4640dac7c9c1cb064785fefa866c80e5a54070a7e0cb5568c6e77ea68bc7d7";
const CONTRACT_ADDRESS = "0xac272645d1d6a6186570ddad788149b664672ba6";

const contract = require("../artifacts/contracts/GreetingMessages.sol/GreetingMessages.json");

console.log(JSON.stringify(contract.abi));