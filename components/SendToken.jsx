"use client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure this is imported
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const SendToken = () => {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState(0);

  async function SendTokens() {
    if (!wallet.publicKey) {
        toast.error("Please Connect the Wallet");
      return;
    }
    if (!to) {
      toast.error("Recipient address is required");
      return;
    }

    try {
      const transaction = new Transaction();
      transaction.add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: new PublicKey(to),
          lamports: amount * LAMPORTS_PER_SOL,
        })
      );

      const latestBlockHash = await connection.getLatestBlockhash(); // Correct usage of instance method
      transaction.recentBlockhash = latestBlockHash.blockhash;
      transaction.feePayer = wallet.publicKey; // Set feePayer correctly

      const signature = await wallet.sendTransaction(transaction, connection);
      await connection.confirmTransaction({
        signature,
        blockhash: latestBlockHash.blockhash,
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
      });

      toast.success(`Sent ${amount} SOL to ${to}`);
      setAmount(0);
      setTo("");
    } catch (error) {
    //   console.error("Transaction failed:", error);
      toast.error("Transaction failed: " + error.message);
    }
  }

  return (
    <div className="space-y-2 p-2  rounded-xl mt-2 ">
       <Label>Enter Recipient PublicKey</Label>

      <Input className="border border-slate-400 sm:w-2/3  w-full"
        type="text"
        onChange={(e) => setTo(e.target.value)}
        placeholder="Recipient Address"
      />
      <Label>Enter SOL</Label>
      <Input className="border border-slate-400 sm:w-2/3  w-full"
        type="number"
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Amount in SOL"
      />
      <Button onClick={SendTokens}>Send</Button>
    </div>
  );
};

export default SendToken;
