// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Test, console} from "forge-std/Test.sol";
import {EventerToken} from "../src/EventerToken.sol";
import {Aeven} from "../src/Aeven.sol";

contract AevenTest is Test {
    EventerToken public eventerToken;
    Aeven public aeven;

    address owner = address(0x123);
    address user1 = address(0x456);

    function setUp() public {
        // Set the base URI for the EventerToken metadata
        string memory baseUri = "https://api.example.com/metadata/";

        // Deploy EventerToken contract
        vm.prank(owner);
        eventerToken = new EventerToken(baseUri);
        console.log("EventerToken deployed at:", address(eventerToken));

        // Deploy Aeven contract with the address of the EventerToken contract
        vm.prank(owner);
        aeven = new Aeven();
        console.log("Aeven deployed at:", address(aeven));

        // Register a user
        vm.prank(user1);
        aeven.registerUser("user1", "user1@example.com", "https://user1.com");
    }

    function test_RegisterUser() public {
        uint256 userId = aeven.searchUser(1).userId;
        assertEq(userId, 1);

        address userAddress = aeven.searchUser(1).userAddress;
        assertEq(userAddress, user1);

        string memory userName = aeven.searchUser(1).userName;
        assertEq(userName, "user1");
    }

    function test_CreateEvent() public {
        vm.prank(user1);
        aeven.createEvent(
            "Sample Event",
            "This is a description",
            "Category",
            "Creator",
            "Location",
            "2023-01-01",
            "10:00"
        );

        Aeven.Event[] memory events = aeven.showAllEvents();
        assertEq(events.length, 1);
        assertEq(events[0].title, "Sample Event");
        assertEq(events[0].creator, "Creator");
    }

    // function test_MintEventToken() public {
    //     vm.prank(owner);
    //     eventerToken.mint(user1, EventerToken.EVENT_TICKET, 1, "");

    //     uint256 balance = eventerToken.balanceOf(user1, EventerToken.EVENT_TICKET);
    //     assertEq(balance, 1);
    // }

    function test_RegisterForEvent() public {
        vm.prank(user1);
        aeven.createEvent(
            "Sample Event",
            "This is a description",
            "Category",
            "Creator",
            "Location",
            "2023-01-01",
            "10:00"
        );

        uint256 eventId = aeven.showAllEvents()[0].eventId;

        vm.prank(user1);
        aeven.registerForEvent(eventId);

        uint256 numberOfAttendees = aeven.numberRegisteredForEvent(eventId);
        assertEq(numberOfAttendees, 1);
    }
}
