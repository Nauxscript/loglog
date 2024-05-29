// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract StatusContract {
    uint256 constant MAX_CHARACTER_AMOUNT = 140;

    mapping(address => string[]) public logs;

    event LogUpdated(address indexed user, string newLog, uint256 timestamp);


    function setStatus(string memory _status) public {
        require(bytes(_status).length <= MAX_CHARACTER_AMOUNT, "Log is over the max character amount.");

        logs[msg.sender].push(_status);

        emit LogUpdated(msg.sender, _status, block.timestamp);
    }


    function getStatus(address _user) public view returns (string[] memory) {
        string[] memory userLogs = logs[_user];
        if (userLogs.length == 0) {
            return new string[](0);
        }
        return userLogs;
    }

}