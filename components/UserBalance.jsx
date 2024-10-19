'use client'
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css'; // Ensure this is imported

const UserBalance = () => {
  const [balance, setBalance] = useState(0);
  const { publicKey } = useWallet();
  const { connection } = useConnection();

  useEffect(() => {
    async function fetchBalance() {
      if (publicKey) {
        try {
          const lamports = await connection.getBalance(publicKey);
          setBalance(lamports / LAMPORTS_PER_SOL);
        } catch (error) {
          console.error("Error fetching balance:", error);
        }
      }
    }
    fetchBalance();
  }, [publicKey, connection]);

  return (
    <div>
   {publicKey? <div className="flex flex-col text-center">
    <h3 className='text-green-500'>Wallet Address: {publicKey.toBase58()}</h3>
    <p className="font-bold text-xl">Wallet Balance:{balance} SOL</p>
  </div>:null}
  </div>
  );
};

export default UserBalance;
