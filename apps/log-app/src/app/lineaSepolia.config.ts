import { Chain } from "@thirdweb-dev/chains";
export const lineaSepolia: Chain = {
  "chain": "ETH",
  "chainId": 59141,
  "explorers": [
    {
      "name": "Etherscan",
      "url": "https://sepolia.lineascan.build",
      "standard": "EIP3091"
    }
  ],
  "name": "Linea Sepolia",
  "nativeCurrency": {
    "name": "Linea Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 59141,
  "rpc": [
    "https://rpc.sepolia.linea.build",
  ],
  "shortName": "linea-sepolia",
  "slip44": 1,
  "slug": "linea-sepolia",
  "status": "active",
  "testnet": true,
  "title": "Linea Sepolia Testnet"
}