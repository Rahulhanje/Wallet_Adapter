"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css"; // Ensure this is imported

import bs58 from "bs58";
import { ed25519 } from "@noble/curves/ed25519";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { toast, ToastContainer } from "react-toastify";

const SignMessage = () => {
  const [message, setMessage] = useState("");
  const { publicKey, signMessage } = useWallet();
  async function onClick() {
    if (!publicKey){
            toast.error("Please Connect the Wallet");
    }
    if (!signMessage)
          toast.error("Wallet does not support message signing");
    // if (message=="")
    //       toast.error("Please Enter Message");
    //     return
    try {
      const encodedMessage = new TextEncoder().encode(message);
      const signature = await signMessage(encodedMessage);
         toast.success(`message sent ${bs58.encode(signature)}`);
      if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes()))
        toast.success("success", `Message signature: ${bs58.encode(signature)}`);
    } catch (error) {
        toast.error(error);
    }
  }

  return (
    <div className="p-2  rounded-xl">
      <ToastContainer/>
      <div>
        <Label>Enter Message to Sign</Label>
      </div>
      <div className="flex gap-2 items-center">
        <Input
          className="border border-slate-400 sm:w-2/3 w-full"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Enter Message"
        ></Input>
        <Button onClick={onClick}>Sign Message</Button>
      </div>
    </div>
  );
};

export default SignMessage;
