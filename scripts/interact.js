const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const {
  ethers
} = require("hardhat");
const contract = require("../artifacts/contracts/GreetingMessages.sol/GreetingMessages.json");

console.log(JSON.stringify(contract.abi));

const provider = new ethers.providers.AlchemyProvider(network = "goerli", API_KEY);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const greetingMessagesContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
  const message = await greetingMessagesContract.message();
  console.log("The message is: ", message);

  console.log("Updating the message...");
  const tx = await greetingMessagesContract.update("Hola");
  await tx.wait();

  const message = await greetingMessagesContract.message();
  console.log("The new message is: ", message);
}
main();