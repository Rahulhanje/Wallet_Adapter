
import { Wallet } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const NavBar = () => {
  return (
    <div className='flex justify-between px-5 py-3 bg-slate-100 border-b mb-3'>
      <div className='flex items-center gap-2'>
        <Wallet size={40}></Wallet>
        <p className='font-bold text-xl text-slate-800'>Wallet Dapp</p>
      </div> 
       <div>
        <a href="#"><Button>Github</Button></a>
       </div>
    </div>
  )
}

export default NavBar
