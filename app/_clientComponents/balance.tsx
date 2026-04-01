'use client'
/////////////////////////////////
import Image from 'next/image'
import logoMain from '@/public/nagad-logo.png'
import { useState } from 'react'
/////////////////////////////////

export default function Balance(){
    const [showBalance,setShowBalance] = useState<boolean>(false)
    const [balance,setBalance] = useState<string>('100.45')

    const balanceShowHandle = () => {
        try{
            setShowBalance(true)
            setTimeout(() => setShowBalance(false),3000)
        }finally{
        }
    }

    return(
        <main className="flex items-center justify-center mt-7 z-10">
            <div onClick={balanceShowHandle} className="flex bg-white py-0.5 px-3 gap-3 rounded-3xl justify-center items-center">
                <Image src={logoMain} loading='eager' alt="MainLogo" height={20} className='w-auto h-auto'/>
                <h1 className="font-bold text-[#f55134] hover:cursor-pointer">{showBalance ? `${balance} Tk` : 'Tap for Balance'}</h1>
            </div>
        </main>
    )
}