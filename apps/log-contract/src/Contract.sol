// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

struct Log {
    string content;
    uint256 timestamp;
}

contract LogContract {
    uint256 constant MAX_CHARACTER_AMOUNT = 140;

    mapping(address => Log[]) public logs;

    event LogUpdated(address indexed user, string newLog, uint256 timestamp);

    function addLogMsg(string memory _logMsg) public {
        require(bytes(_logMsg).length <= MAX_CHARACTER_AMOUNT, "Log is over the max character amount.");

        logs[msg.sender].push(Log({
            content: _logMsg,
            timestamp: block.timestamp
        }));

        emit LogUpdated(msg.sender, _logMsg, block.timestamp);
    }


    function getLogs() public view returns (Log[] memory) {
        Log[] memory userLogs = logs[msg.sender];
        if (userLogs.length == 0) {
            return new Log[](0);
        }
        return userLogs;
    }

}