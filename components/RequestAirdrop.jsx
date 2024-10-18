'use client'
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useState } from "react";

const RequestAirdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState(0);

  async function requestAirdrop() {
    try {
      await connection.requestAirdrop(
        wallet.publicKey,
        amount * LAMPORTS_PER_SOL
      );
      alert("airdrop done");
    } catch (error) {
      alert(`${error}`);
    }
  }

  return (
    <div>
      <input
        id="amount"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        type="text"
        placeholder="Amount"
      />
      <button onClick={requestAirdrop}>Airdrop</button>
    </div>
  );
};

export default RequestAirdrop;
