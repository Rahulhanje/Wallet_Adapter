'use client'
import React, { FC, useMemo, useEffect, useState } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

import "@solana/wallet-adapter-react-ui/styles.css";
import RequestAirdrop from "@/components/RequestAirdrop";
import UserBalance from "@/components/UserBalance";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  // Ensure that this part only runs on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <p className="flex justify-center items-center h-full">Loading.......</p>; // Or render a loader/spinner
  }

  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
          
          <RequestAirdrop />
          <UserBalance />

        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
