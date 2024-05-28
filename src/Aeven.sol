// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./EventerToken.sol";
import "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

contract Aeven {

    event CreatedEvent(uint256 indexed eventId, string indexed creator, string indexed eventTitle);
    // event RegisteredForEvent(uint256 indexed eventId, address indexed msg.sender, string indexed eventTitle);
    event UserRegistered(uint256 indexed userId, address indexed userAddress, string userName, string emailAddress, string webSite);



    EventerToken public eventerToken;
    address public ownerAddress;
    address usdToken = 0xdAC17F958D2ee523a2206206994597C13D831ec7;

    enum EventStatus { NotStarted, Live, Completed }
    enum EventTicket { Free, Pay }

    // Array to store all events
    Event[] public allEvents;

    struct User {
        uint256 userId;
        address userAddress;
        string userName;
        string emailAddress;
        string webSite;
        bool isBlocked;
    }

    // Array to store all users
    User[] public allUsers;

    // Struct to represent event registration details
    struct EventRegister {
        uint256 eventId;
        RegisteredAddresses[] usersAddresses;
        uint256 numberOfAttendees;
    }

    // Struct to represent registered addresses
    struct RegisteredAddresses {
        address userAddress;
    }

    // Mapping to store event registrations and number of attendees
    mapping(uint256 => RegisteredAddresses[]) public eventRegistrations;
    mapping(uint256 => uint256) public numberOfAttendees;

    // payments
    mapping(address => uint256) accountBalance;

    // Modifier to check if the user is registered
    modifier onlyRegisteredUser() {
        bool isRegistered = false;
        for (uint256 i = 0; i < allUsers.length; i++) {
            if (msg.sender == allUsers[i].userAddress) {
                isRegistered = true;
                break;
            }
        }
        require(isRegistered, "You are not registered");
        _;
    }

    // Modifier to check if the user is blocked
    modifier blockedUser(address _admin, uint256 _userId) {
        bool userFound = false;
        for (uint256 i = 0; i < allUsers.length; i++) {
            if (allUsers[i].userId == _userId) {
                require(!allUsers[i].isBlocked, "Your account has been suspended");
                userFound = true;
                break;
            }
        }
        require(userFound, "User not found");
        _;
    }

    // Modifier to restrict access to only the owner of the contract
    modifier onlyOwner() {
        require(msg.sender == owner(), "Only contract owner can call this function");
        _; // Continue executing the function if the condition is met
    }

    // Event structure
    struct Event {
        uint256 eventId;
        string title;
        string description;
        string category;
        string creator;
        string location;
        string startDate;
        string startTime;
        uint256 registeredAttendees;
        EventStatus status;
        EventTicket ticket;
    }

    // Constructor
    constructor() {
        eventerToken = EventerToken(0x0c53B9C8D2a0dDCe027906043bfaCC97AbDDf9c5); // Initialize the EventerToken contract
        ownerAddress = msg.sender;
    }

    // Function to create a new event
    function createEvent(
        string memory _title,
        string memory _description,
        string memory _category,
        string memory _creator,
        string memory _location,
        string memory _startDate,
        string memory _startTime
    ) public onlyRegisteredUser {
        allEvents.push(Event(
            allEvents.length, // Use the index of the newly created event as its ID
            _title,
            _description,
            _category,
            _creator,
            _location,
            _startDate,
            _startTime,
            0,
            EventStatus.NotStarted,
            EventTicket.Pay
        ));

    }

    // Function to add a new event
    function addNewEvent(
        uint256 _eventId,
        string memory _title,
        string memory _description,
        string memory _category,
        string memory _creator,
        string memory _location,
        string memory _startDate,
        string memory _startTime
    ) internal {
        Event memory newEvent = Event(
            _eventId,
            _title,
            _description,
            _category,
            _creator,
            _location,
            _startDate,
            _startTime,
            0,
            EventStatus.NotStarted,
            EventTicket.Pay
        );

        allEvents.push(newEvent);
        emit CreatedEvent(_eventId, _creator, _title);
    }

    // Function to register for an event
    function registerForEvent(uint256 _eventId) public view onlyRegisteredUser {
        bool eventExists = false;

        for (uint256 i = 0; i < allEvents.length; i++) {
            if (_eventId == allEvents[i].eventId) {
                eventExists = true;
                break;
            }
        }

        require(eventExists, "Event does not exist");

        RegisteredAddresses[] storage attendees = eventRegistrations[_eventId];
        for (uint256 i = 0; i < attendees.length; i++) {
            require(attendees[i].userAddress != msg.sender, "User is already registered for this event");
        }
    }

    // Function to retrieve the address of the contract owner
    function owner() public view returns (address) {
        return ownerAddress;
    }

    // Function to mint event token after the event
    function mintEventToken(uint256 _eventId) public view onlyOwner {
        bool eventExists = false;
        for (uint256 i = 0; i < allEvents.length; i++) {
            if (_eventId == allEvents[i].eventId) {
                eventExists = true;
                break;
            }
        }

        require(eventExists, "Event does not exist");
    }

    // Function to retrieve the number of registered attendees for an event
    function numberRegisteredForEvent(uint256 _eventId) public view returns(uint256) {
        return numberOfAttendees[_eventId];
    }

    // Function to show all events
    function showAllEvents() public view returns(Event[] memory) {
        return allEvents;
    }

    function filterSearch(string memory _category, string memory _startDate, EventTicket _ticketType) public view returns (Event[] memory) {
        // Declare a dynamic array to store filtered events
        Event[] memory filteredEvents = new Event[](allEvents.length);
        uint256 count = 0;

        // Loop through all events and apply filters
        for (uint256 i = 0; i < allEvents.length; i++) {
            Event memory currentEvent = allEvents[i];
            
            // Check if the event matches the category filter
            if (keccak256(abi.encodePacked(currentEvent.category)) == keccak256(abi.encodePacked(_category))) {
                if (keccak256(abi.encodePacked(currentEvent.startDate)) == keccak256(abi.encodePacked(_startDate))) {
                    if (currentEvent.ticket == _ticketType) {
                        filteredEvents[count] = currentEvent;
                        count++;
                    }
                }
            }
        }

        // Resize the array to remove empty elements
        assembly {
            mstore(filteredEvents, count)
        }

        return filteredEvents;
    }

    // Function to archive an event
    function archiveEvent(uint256 _eventId) public {
        bool eventFound = false;

        // Iterates through all events to find the event to archive
        for (uint256 i = 0; i < allEvents.length; i++) {
            if (allEvents[i].eventId == _eventId) {
                // Mark the event as archived or remove it from the active events list
                allEvents[i].status = EventStatus.Completed;
                eventFound = true;
                break;
            }
        }

        // Ensure the event was found and archived
        require(eventFound, "Event not found or already archived");
    }

    // Function to register a new user
    function registerUser(
        string memory _userName,
        string memory _emailAddress,
        string memory _webSite
    ) public {
        // Check if the user is already registered
        for (uint256 i = 0; i < allUsers.length; i++) {
            require(msg.sender != allUsers[i].userAddress, "User is already registered");
        }

        uint256 _userId = allUsers.length + 1;
        // Register new user
        User memory newUser = User(
            _userId,
            msg.sender,
            _userName,
            _emailAddress,
            _webSite,
            false
        );

        allUsers.push(newUser);

        emit UserRegistered(_userId, msg.sender, _userName, _emailAddress, _webSite);
    }

    // Function to remove a user from the platform
    function removeUser() public {
        uint256 userIndexToRemove = findUserIndex(msg.sender);
        delete allUsers[userIndexToRemove];
    }

    // Function to find the index of a user
    function findUserIndex(address _userAddress) private view returns (uint256) {
        for (uint256 i = 0; i < allUsers.length; i++) {
            if (allUsers[i].userAddress == _userAddress) {
                return i; 
            }
        }
    }

    // Function to block a user
    function blockUser(address _admin, uint256 _userId) public {
        require(msg.sender == _admin, "Only admin can block a user");

        bool userFound = false;
        for (uint256 i = 0; i < allUsers.length; i++) {
            if (allUsers[i].userId == _userId) {
                allUsers[i].isBlocked = true;
                userFound = true;
                break;
            }
        }

        require(userFound, "User not found");
    }

    // Function to display all users on the platform
    function displayAllUsers() public view returns(User[] memory) {
        return allUsers;
    }

    // Function to search for a user by ID
    function searchUser(uint256 _userId) public view returns(User memory) {
        for (uint256 i = 0; i < allUsers.length; i++) {
            if (allUsers[i].userId == _userId) {
                return allUsers[i];
            }
        }
        revert("User not found");
    }

      
    // Function to pay for an event
   function payForEvent(uint256 _eventId, uint256 _amount) public onlyRegisteredUser {
        bool eventExists = false;
        for (uint256 i = 0; i < allEvents.length; i++) {
            if (_eventId == allEvents[i].eventId) {
                eventExists = true;
                break;
            }
        }
        require(eventExists, "Event does not exist");

        require(accountBalance[msg.sender] >= _amount, "Insufficient balance to pay for the event");
        accountBalance[msg.sender] -= _amount;
        accountBalance[ownerAddress] += _amount;

        registerForEvent(_eventId);
    }

    // Function to get the number of events created by a user
    function getUserEventCount(address _userAddress) public view returns (uint256) {
        uint256 count = 0;
        for (uint256 i = 0; i < allEvents.length; i++) {
            if (keccak256(abi.encodePacked(allEvents[i].creator)) == keccak256(abi.encodePacked(_userAddress))) {
                count++;
            }
        }
        return count;
    }

    function checkBalance() external view returns(uint256){
        return accountBalance[msg.sender];
    }

    
}