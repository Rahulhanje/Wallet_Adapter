"use client";
import React, { FC, useMemo, useEffect, useState } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

import "@solana/wallet-adapter-react-ui/styles.css";
import RequestAirdrop from "@/components/RequestAirdrop";
import UserBalance from "@/components/UserBalance";
import SignMessage from "@/components/SignMessage";
import SendToken from "@/components/SendToken";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  // const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  // Ensure that this part only runs on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <p className="flex justify-center items-center h-full">Loading.......</p>
    ); // Or render a loader/spinner
  }

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <ToastContainer />
          <div className="flex flex-col sm:flex-row sm:justify-center gap-5 items-center m-5">
            <WalletMultiButton />
            <div>
              <WalletDisconnectButton />
            </div>
          </div>
          <div className="p-3">
            <div className="flex justify-center">
              <p className="text-red-500 font-semibold">
                This Wallet Dapp Only works with Devnet
              </p>
            </div>
            <div className="flex justify-center">
              <p className="font-bold text-xl"></p>
              <UserBalance />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
            <RequestAirdrop />
            <SignMessage />
            <SendToken />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
