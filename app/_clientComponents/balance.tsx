'use client'
/////////////////////////////////
import Image from 'next/image'
import logoMain from '@/public/nagad-logo.png'
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
            let convert = result.toFixed(2).toLocaleString();
            return setBalance(convert.toString())
        }else{
            localStorage.setItem('balance','0')
            window.location.reload()
        }
    },[])
    ///////////////////////////////////////////////////

    const balanceShowHandle = () => {
        try{
            setShowBalance(true)
            setTimeout(() => setShowBalance(false),4500)
        }finally{
        }
    }

    return(
        <main className="flex items-center gap-1 justify-center mt-7 z-10">
            <Image src={logoMain} loading='eager' alt="MainLogo" height={28} className='bg-white border-2 rounded-full border-gray-300 p-0.5'/>

            <h1 onClick={balanceShowHandle} className="font-bold select-none text-[#f55134] bg-white px-2 rounded-2xl cursor-pointer border border-gray-300">{showBalance ? `${balance} Tk.` : 'Tap for Balance'}</h1>
        </main>
    )
}