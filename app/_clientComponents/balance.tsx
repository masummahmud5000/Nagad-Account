'use client'
/////////////////////////////////
import Image from 'next/image'
import money from '@/public/money.png'
import { useState,useEffect } from 'react'
/////////////////////////////////

export default function Balance(){
    
    const [showBalance,setShowBalance] = useState<boolean>(false)
    const [balance,setBalance] = useState<string>('')
    ///////////////////////////////////////////////////
    
    useEffect(() => {
        ////////////////////////////////////////
        let tk = localStorage?.getItem('balance')
        if (tk){
            let result = Number(tk)
            let final = result.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            return setBalance(final.toString())
        }else{
            localStorage.setItem('balance','0')
            window.location.reload()
        }
    },[])
    ///////////////////////////////////////////////////

    const balanceShowHandle = () => {
        try{
            setShowBalance(true)
            setTimeout(() => setShowBalance(false),6000)
        }finally{
        }
    }

    const langHandle = () => {

    }

    return(
        <main className="flex relative items-center w-full gap-1 mt-7 ml-1 z-10">
            <div className='ml-4 flex w-fill gap-2 items-center bg-white border-2 border-gray-400 py-0.5 px-3 rounded-2xl'>

                <Image onClick={balanceShowHandle} src={money} loading='eager' alt="MainLogo" height={20} className='w-auto h-auto'/>

                <h1 onClick={balanceShowHandle} className="text-end font-bold text-lg select-none text-[#f55134] rounded-2xl">{showBalance ? `${balance} Tk.` : 'Tap for Balance'}</h1>
            </div>
            <div className='absolute right-5'>
                <h1 className='bg-white px-1.5 py-0.5 rounded-md font-bold text-green-600 select-none hover:bg-gray-200 cursor-pointer'>BN</h1>
            </div>
        </main>
    )
}
