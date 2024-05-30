// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

struct Log {
    string content;
    uint256 timestamp;
    address owner;
}

contract LogContract {
    uint256 constant MAX_CHARACTER_AMOUNT = 140;
    Log[] public logs;

    event LogUpdated(address indexed user, string newLog, uint256 timestamp);

    function addLogMsg(string memory _logMsg) public {
        require(bytes(_logMsg).length <= MAX_CHARACTER_AMOUNT, "Log is over the max character amount.");

        // logs[msg.sender].push(Log(_logMsg, block.timestamp));
        logs.push(Log(_logMsg, block.timestamp, msg.sender));

        emit LogUpdated(msg.sender, _logMsg, block.timestamp);
    }


    function getLogs(address owner) public view returns (Log[] memory) {
        Log[] memory result = new Log[](logs.length);
        uint counter = 0;
        for (uint i = 0; i < logs.length; i++) {
            if (logs[i].owner == owner) {
                result[counter] = logs[i];
                counter++;
            }
        } 
        return result;
    }

}