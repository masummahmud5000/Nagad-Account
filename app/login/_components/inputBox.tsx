'use client'

import Link from "next/link"

export default function InputBox(){
    return(
        <main className="mt-8">
            <div className="flex gap-3 items-center text-white pl-10 pr-25">
                <span className="fa fa-lock text-[#ea431f]"/>
                <input type="password" placeholder="Password" className="border-b-2 min-w-full border-[#ea431f] focus:outline-0 py-1 px-1 text-xl"/>
            </div>
            <div className="mt-10 flex flex-col gap-3 items-center">
                <button className="text-white w-60 font-sans border-2 border-[#ea431f] py-1 px-20 rounded-xl hover:bg-[#ea431f] cursor-pointer">LOGIN</button>
                <p className="text-gray-200">Forgot PIN?</p>
            </div>
            <Link href='/register' className="ml-22 text-gray-300 hover:text-white">Register</Link>
        </main>
    )
}