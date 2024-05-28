// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {EventerToken} from "../src/EventerToken.sol";
import {Aeven} from "../src/Aeven.sol";


contract AevenScript is Script {
    function setUp() public {}

    function run() public {
        // Begin broadcasting transactions
        vm.startBroadcast();

        // Deploy the EventerToken contract
        string memory baseUri = "https://api.example.com/metadata/";
        EventerToken eventerToken = new EventerToken(baseUri);
        console.log("EventerToken deployed at:", address(eventerToken));

        // Deploy the Aeven contract with the EventerToken address
        Aeven aeven = new Aeven();
        console.log("Aeven deployed at:", address(aeven));

        // End broadcasting transactions
        vm.stopBroadcast();
    }
}
