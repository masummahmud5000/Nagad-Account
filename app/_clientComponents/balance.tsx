'use client'
/////////////////////////////////
import Image from 'next/image'
import money from '@/public/money.png'
import { useState,useEffect } from 'react'
import { usePage } from './context/contextAPI'
/////////////////////////////////

export default function Balance(){
    let { setPage } = usePage()
    
    const [showBalance,setShowBalance] = useState<boolean>(false)
    const [balance,setBalance] = useState<string>('')
    ///////////////////////////////////////////////////
    useEffect(() => {
        setPage('home')
        ////////////////////////////////////////
        let tk = localStorage?.getItem('balance')
        if (tk){
            let result = Number(tk)
            let final = result.toLocaleString('en-US')
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

    return(
        <main className="flex w-full gap-1 mt-8 z-10">
            <div className='ml-4 flex w-fill gap-2 items-center bg-white border-2 border-gray-400 py-0.5 px-3 rounded-2xl'>

                <Image onClick={balanceShowHandle} src={money} loading='eager' alt="MainLogo" height={20} className='w-auto h-auto'/>

                <h1 onClick={balanceShowHandle} className="text-end font-bold text-lg select-none text-[#f55134] rounded-2xl">{showBalance ? `${balance} Tk.` : 'Tap for Balance'}</h1>
            </div>
        </main>
    )
}
