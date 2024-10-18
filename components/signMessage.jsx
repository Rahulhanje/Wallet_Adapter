'use client'
import { useWallet } from '@solana/wallet-adapter-react'
import React, { useState } from 'react'

const SignMessage = () => {
    const [message,setMessage]=useState("");
  const {publicKey,signMessage}=useWallet();
async function onClick() {
    if(!publicKey)throw new Error('Wallet not Found');
    if(!signMessage)throw new Error('Wallet does not support message signing');

    
}

  return (
    <div>
      <input onChange={(e)=>{setMessage(e.target.value)}} placeholder='Enter Message'></input>
      <button onClick={onClick}>Sign Message</button>
    </div>
  )
}

export default SignMessage
