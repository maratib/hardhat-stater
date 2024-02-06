//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract NumberStorage {
    uint storedNumber;

    // Storing function
    function setNumber(uint _number) public {
        console.log("Setting number : ", _number);
        storedNumber = _number;
    }

    //Reading function
    function getNumber() public view returns (uint) {
        console.log("Getting number : ", storedNumber);
        return storedNumber;
    }
}
