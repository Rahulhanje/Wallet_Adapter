"use client";
import React, {  useMemo, useEffect, useState } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

import "@solana/wallet-adapter-react-ui/styles.css";
import RequestAirdrop from "@/components/RequestAirdrop";
import UserBalance from "@/components/UserBalance";
import SendToken from "@/components/SendToken";
import { ToastContainer, toast } from "react-toastify";
import { Loader } from "lucide-react";
import SignMessage from "./SignMessage";

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
      <p className="h-screen flex justify-center items-center"><Loader></Loader></p>
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
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 p-5">
            <RequestAirdrop />
            <SignMessage/>
            <SendToken/>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
