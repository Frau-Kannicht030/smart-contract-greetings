async function main() {
  const GreetingMessages = await ethers.getContractFactory("GreetingMessages");

  // Start deployment, returning a promise that resolves to a contract object
  const greeting_messages = await GreetingMessages.deploy("Hello and Welcome");
  console.log("Contract deployed to address:", greeting_messages.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });