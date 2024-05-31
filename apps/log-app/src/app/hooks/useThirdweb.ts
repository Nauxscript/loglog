import { createThirdwebClient, getContract } from "thirdweb";
import { ABI } from "../../../constant/abi";

export const useThirdWeb = (address: string = '', clientId: string = '', ) => {

  const client = createThirdwebClient({ clientId });
  const contract = getContract({
    // the client you have created via `createThirdwebClient()`
    client,
    // the chain the contract is deployed on
    chain: {
      id: 59141,
      testnet: true,
      rpc: "https://rpc.sepolia.linea.build"
    },
    // the contract's address
    address, 
    abi: ABI
  });

  return { client, contract };
};
