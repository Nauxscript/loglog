'use client';
import { ConnectButton, ConnectEmbed, useActiveAccount } from "thirdweb/react";
import { client } from "./client";
// import { lineaSepolia } from "./lineaSepolia.config";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import Logs from "./logs";

const wallets = [
  // inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  // createWallet("me.rainbow"),
];

export default function Home() {
  const activeAccount = useActiveAccount();
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <div className="flex justify-center mb-20">
          <ConnectButton
            client={client}
            wallets={wallets}
            detailsModal={{
              hideSwitchToPersonalWallet: true,
            }}
            appMetadata={{
              name: "LogLog App",
              url: "https://github.com/Nauxscript/loglog",
            }}
            connectModal={{ size: "compact" }}
            onConnect={() => {console.log("connected")}}
            onDisconnect={() => {console.log("disconnected")}}
          />
        </div>
        <Logs address={activeAccount?.address} />
      </div>
    </main>
  );
}


function ThirdwebResources() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center">
      <ArticleCard
        title="thirdweb SDK Docs"
        href="https://portal.thirdweb.com/typescript/v5"
        description="thirdweb TypeScript SDK documentation"
      />

      <ArticleCard
        title="Components and Hooks"
        href="https://portal.thirdweb.com/typescript/v5/react"
        description="Learn about the thirdweb React components and hooks in thirdweb SDK"
      />

      <ArticleCard
        title="thirdweb Dashboard"
        href="https://thirdweb.com/dashboard"
        description="Deploy, configure, and manage your smart contracts from the dashboard."
      />
    </div>
  );
}

function ArticleCard(props: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={props.href + "?utm_source=next-template"}
      target="_blank"
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}
