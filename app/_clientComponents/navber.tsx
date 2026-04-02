'use client'

import Link from "next/link"
import Image from "next/image"
import logo from '@/public/nagad-logo-white.png'
import {useEffect, useState } from "react"
import { usePage } from "./context/contextAPI"

export default function Navber(){
    const { page } = usePage();

    const [home,setHome] = useState<boolean>(false)
    const [tran,setTran] = useState<boolean>(false)
    const [profile,setProfile] = useState<boolean>(false)

    useEffect(() => {
        switch(page){
            case 'home':
                setHome(true)
                setTran(false)
                setProfile(false)
                break
                
            case 'tran':
                setHome(false)
                setTran(true)
                setProfile(false)
                break
                    
            case 'profile':
                setHome(false)
                setTran(false)
                setProfile(true)
                break

            default:
                setHome(false)
                setTran(false)
                setProfile(false)
        }
    }, [page]);
    ///////////////////////////////////////////////////
    return(
        <div className="flex gap-18 items-center justify-center bg-gray-200 text-gray-800 py-1 fixed bottom-0 left-0 w-full border-t-2 border-gray-300">
            <Link href='/home' className="flex flex-col text-center items-center justify-center cursor-pointer">
                <span className={home ? "bg-green-600 py-1.5 px-1.5 rounded-full" : "text-sm"}>
                    <Image src={logo} alt="Logo" height={20} className={home ? "invert brightness-0" : "brightness-0"}/>
                </span>
                <p className="text-sm mt-1">Home</p>
            </Link>
            <Link href='/home/tran' className="text-center cursor-pointer">
                <span className={tran ? "fa fa-receipt text-xl bg-green-600 text-white pl-2 pr-6 py-1.5 rounded-full" : "fa fa-receipt text-xl"}/>
                <p className="text-sm mt-1">Transactions</p>
            </Link>
            <Link href='/home/profile' className="text-center cursor-pointer">
                <span className={profile ? "fa fa-user text-xl bg-green-600 text-white pl-2 pr-6 py-1.5 rounded-full" : "fa fa-user text-xl"}/>
                <p className="text-sm mt-1">Profile</p>
            </Link>
        </div>
    )
}