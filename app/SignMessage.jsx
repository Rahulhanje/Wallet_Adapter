"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css"; // Ensure this is imported

import bs58 from "bs58";
import { ed25519 } from "@noble/curves/ed25519";

import { toast, ToastContainer } from "react-toastify";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignMessage = () => {
  const [message, setMessage] = useState("");
  const { publicKey, signMessage } = useWallet();

  async function onClick() {
    // Error handling: Check if wallet is connected and supports message signing
    if (!publicKey) {
      toast.error("Please connect the wallet.");
      return;
    }

    if (!signMessage) {
      toast.error("Wallet does not support message signing.");
      return;
    }

    if (message === "") {
      toast.error("Please enter a message.");
      return;
    }

    try {
      const encodedMessage = new TextEncoder().encode(message);
      const signature = await signMessage(encodedMessage);

      // Verify the signature
      if (ed25519.verify(signature, encodedMessage, publicKey.toBytes())) {
        toast.success(`Message signed successfully: ${bs58.encode(signature)}`);
      } else {
        toast.error("Signature verification failed.");
      }
    } catch (error) {
      toast.error(`Error signing message: ${error.message}`);
    }
  }

  return (
    <div className="p-2 rounded-xl">
      <ToastContainer />
      <div>
        <Label>Enter Message to Sign</Label>
      </div>
      <div className="flex gap-2 items-center">
        <Input
          className="border border-slate-400 sm:w-2/3 w-full"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter Message"
        />
        <Button onClick={onClick}>Sign Message</Button>
      </div>
    </div>
  );
};

export default SignMessage;
