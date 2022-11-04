// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract portfolio{
    string name;
    uint age;

    constructor(string memory _name, uint _age){
      name = _name;
      age = _age;
    }

    function getName() public view returns (string memory){
        return name;
    }

    function getAge() external view returns (uint256){
        return age * 2;
    }
}