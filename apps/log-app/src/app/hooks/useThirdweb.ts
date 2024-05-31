import { createThirdwebClient, getContract, prepareEvent } from "thirdweb";
import { ABI } from "../../../constant/abi";
import { useContractEvents } from "thirdweb/react";

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
    abi: ABI,
  });

  const preparedEvent = prepareEvent({
    signature: ABI[0],
    filters: {
      user: address
    }
  }); 

  const { data: event } = useContractEvents({
    contract,
    events: [preparedEvent],
  });

  return { 
    client,
    contract,
    event
  };
};
