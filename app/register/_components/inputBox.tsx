'use client'

import Link from "next/link"
import { useState } from "react"

export default function InputBox(){

    const [name,setName] = useState<string>('');
    const [number,setNumber] = useState<string>('');
    const [password,setPassword] = useState<string>('');

    const registerHandle = () => {
        console.log(name,number,password)
    }

    return(
        <main className="mt-8 flex flex-col gap-10">
            <div className="flex gap-3 items-center text-white pl-10 pr-25">
                <span className="fa fa-user text-[#ea431f]"/>
                <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} type="text" placeholder="Enter Your Name" className="border-b-2 min-w-full border-[#ea431f] focus:outline-0 py-1 px-1 text-xl"/>
            </div>
            <div className="flex gap-3 items-center text-white pl-10 pr-25">
                <span className="fa fa-phone text-[#ea431f]"/>
                <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)} type="number" placeholder="Enter Your Number" className="border-b-2 min-w-full border-[#ea431f] focus:outline-0 py-1 px-1 text-xl"/>
            </div>
            <div className="flex gap-3 items-center text-white pl-10 pr-25">
                <span className="fa fa-lock text-[#ea431f]"/>
                <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} type="password" placeholder="Set Password" className="border-b-2 min-w-full border-[#ea431f] focus:outline-0 py-1 px-1 text-xl"/>
            </div>
            <div className="mt-5 flex flex-col gap-3 items-center">
                <button onClick={registerHandle} className="text-white w-60 font-sans border-2 border-[#ea431f] py-1 px-20 rounded-xl hover:bg-[#ea431f] cursor-pointer">REGISTER</button>
            </div>
            <Link href='/login' className="ml-22 text-gray-300 hover:text-white">LogIn</Link>
        </main>
    )
}