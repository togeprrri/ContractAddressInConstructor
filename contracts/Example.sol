// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract Example {
    address public contractAddressEthers;
    address public contractAddressSolidity;
    uint8 private someVariable;

    constructor(uint8 _var) {
        someVariable = _var;
    }

    function someGetter() external view returns(uint8){
        return someVariable;
    }

    function someSetter(uint8 _new) external {
        someVariable = _new;
    }

}