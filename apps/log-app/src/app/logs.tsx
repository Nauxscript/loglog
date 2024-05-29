import { createThirdwebClient, getContract, resolveMethod } from "thirdweb";
import { LOG_CONTRACT_ADDRESS } from "../../constant/addresses";
import { useReadContract } from "thirdweb/react";
import TimelineItem from "@/components/TimeLine";

export default function Logs({ address }: { address?: string }) {
  const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID || '' });
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
    address: LOG_CONTRACT_ADDRESS,
  });

  const { data: myLogs, isLoading } = useReadContract({ 
    contract, 
    method: resolveMethod("getLogs"), 
    params: [address] 
  });

  console.log(myLogs, isLoading, address);

  return (
    <div>
      <p>{isLoading}</p>
      {/* <ul>
        {(myLogs as string[])?.map((log: string) => (
          <li key={log}>{log}</li>
        ))}
      </ul> */}
      <div>
        {myLogs?.map((log: string) => (
          <TimelineItem>{log}</TimelineItem>
        ))}
      </div>

    </div>
  )
}