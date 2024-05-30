export const ABI = [
  {
    "type": "event",
    "name": "LogUpdated",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "string",
        "name": "newLog",
        "indexed": false,
        "internalType": "string"
      },
      {
        "type": "uint256",
        "name": "timestamp",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "addLogMsg",
    "inputs": [
      {
        "type": "string",
        "name": "_logMsg",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getLogs",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "string",
            "name": "content",
            "internalType": "string"
          },
          {
            "type": "uint256",
            "name": "timestamp",
            "internalType": "uint256"
          },
          {
            "type": "address",
            "name": "owner",
            "internalType": "address"
          }
        ],
        "internalType": "struct Log[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "logs",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "content",
        "internalType": "string"
      },
      {
        "type": "uint256",
        "name": "timestamp",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "owner",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  }
] as const;
