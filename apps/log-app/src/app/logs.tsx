import { createThirdwebClient, getContract, prepareContractCall, prepareEvent, resolveMethod } from "thirdweb";
import { LOG_CONTRACT_ADDRESS } from "../../constant/addresses";
import { useContractEvents, useReadContract, useSendTransaction } from "thirdweb/react";
import TimelineItem from "@/components/TimeLine";
import { useEffect, useState } from "react";

export default function Logs({ address }: { address?: string }) {
  const [logMessage, setLogMessage] = useState('');
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

  const preparedEvent = prepareEvent({ 
    signature: "event LogUpdated(address indexed user, string newLog, uint256 timestamp)" 
  });

  const { data: myLogs, isLoading } = useReadContract({
    contract,
    // @ts-ignore
    method: resolveMethod("getLogs"),
    params: [address]
  });

  const { mutate: sendTransaction, isPending } = useSendTransaction();

  const { data: event } = useContractEvents({ 
    contract, 
    events: [preparedEvent] 
  });

  useEffect(() => {
    console.log("event", event);  
  }, [event])

  const addLog = async () => {
    console.log('add log');
    const transaction = await prepareContractCall({
      contract,
      method: resolveMethod("addLogMsg"),
      params: [logMessage]
    });
    await sendTransaction(transaction);
    setLogMessage('')
  }

  return (
    <div>
      {
        (!isLoading) && (
          <div className="flex items-center px-3 py-2 mb-4 rounded-lg bg-gray-50 dark:bg-gray-700">
            <textarea disabled={isPending} value={logMessage}
              onChange={(e) => {
                setLogMessage(e.target.value)
              }} id="chat" rows={1} className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
            <button disabled={isPending} onClick={addLog} type="submit" className={"inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600 "  + (isPending ? "cursor-not-allowed" : "")} >
              <svg className={"w-5 h-5 rotate-90 rtl:-rotate-90"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
              </svg>
              <span className="sr-only">log message</span>
            </button>
          </div>
        )
      }
      {
        (!isLoading && address) && (
          <div>
            {(myLogs as string[])?.map((log: string) => (
              <TimelineItem key={log}>{log}</TimelineItem>
            ))}
          </div>
        )
      }

    </div>
  )
}