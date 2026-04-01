'use client'
/////////////////////////////////
import Image from 'next/image'
import logoMain from '@/public/nagad-logo.png'

export default function Balance(){
    return(
        <div className="flex items-center justify-center mt-7 z-10">
            <span className="flex bg-white py-0.5 px-3 gap-3 rounded-3xl">
                <Image src={logoMain} alt="MainLogo" width={20} height={7}/>
                <h1 className="font-bold text-[#f55134]">Tap for Balance</h1>
            </span>
        </div>
    )
}