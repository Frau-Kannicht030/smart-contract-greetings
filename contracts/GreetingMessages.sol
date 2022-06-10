// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.3;

// Defines a contract named `GreetingMessages`
contract GreetingMessages {
   //Emitted when update function is called
   event UpdatedMessages(string oldStr, string newStr);
   // Declares a state variable `message` of type `string`

   string public message;
   constructor(string memory initMessage) {
      message = initMessage;
   }

   // A public function that accepts a string argument and updates the `message` storage variable.
   function update(string memory newMessage) public {
      string memory oldMsg = message;
      message = newMessage;
      emit UpdatedMessages(oldMsg, newMessage);
   }
}
