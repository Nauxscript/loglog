// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract LogContract {
    uint256 constant MAX_CHARACTER_AMOUNT = 140;

    mapping(address => string[]) public logs;

    event LogUpdated(address indexed user, string newLog, uint256 timestamp);

    function addLogMsg(string memory _logMsg) public {
        require(bytes(_logMsg).length <= MAX_CHARACTER_AMOUNT, "Log is over the max character amount.");

        logs[msg.sender].push(_logMsg);

        emit LogUpdated(msg.sender, _logMsg, block.timestamp);
    }


    function getLogs() public view returns (string[] memory) {
        string[] memory userLogs = logs[msg.sender];
        if (userLogs.length == 0) {
            return new string[](0);
        }
        return userLogs;
    }

}