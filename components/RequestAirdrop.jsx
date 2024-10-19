"use client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { toast, ToastContainer } from "react-toastify";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import 'react-toastify/dist/ReactToastify.css'; // Ensure this is imported

const RequestAirdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);

  async function requestAirdrop() {
    if (!wallet.publicKey) {
      toast.error("Wallet not connected");
      return;
    }
    if(amount==0){
      toast.error("Amount cannot be zero or Empty");
      return
    }
    try {
      toast.info("Requesting airdrop...");
      await connection.requestAirdrop(
        wallet.publicKey,
        amount * LAMPORTS_PER_SOL
      );
      toast.success("Airdrop successful!");
      setAmount(0);
    } catch (error) {
      toast.error(`Airdrop failed: ${error.message}`);
    }
  }

  return (
    <div className="flex flex-col rounded-xl justify-center p-2 ">
      <ToastContainer /> {/* Ensure ToastContainer is rendered */}
      <div>
        <Label>Enter SOL </Label>
      </div>
      <div className="flex gap-2 items-center">
        <Input type='number'
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          placeholder="Minimum is 10 SOL's per Day "
          className="border border-slate-400 sm:w-2/3  w-full"
        ></Input>
        <Button onClick={requestAirdrop}>Airdrop</Button>
      </div>
    </div>
  );
};

export default RequestAirdrop;
