'use client'

import { useEffect,useState } from "react";
import { usePage } from "./context/contextAPI"
import { useRouter } from "next/navigation";

export default function AddMoney(){
    const router = useRouter()
    const [balance,setBalance] = useState<string>('');
    const [error,setError] = useState<boolean>(false)
    const {setPage} = usePage();

    useEffect(() => {
        setPage('')
    },[])

    const balanceHandle = async() => {
        try{
            if (balance === "" || balance === '0' || balance.startsWith('0')){
                setError(true)
                setTimeout(() => setError(false), 2500)
            }else{
                setError(false)
                let storeBalance = await localStorage?.getItem('balance')
                if (storeBalance){
                    if (storeBalance === '0'){
                        localStorage.setItem('balance', balance.toString())
                        return
                    }else{
                        let addition = parseFloat(storeBalance) + parseFloat(balance)
                        localStorage.setItem('balance', addition.toString())
                        setBalance('')
                        return router.push('/home')
                    }
                }else{
                    return localStorage.setItem('balance', balance.toString())
                }
            }
        }finally{
        }
    }

    return(
        <main className="py-15 flex flex-col px-10 items-center">
            <h1 className="text-center text-3xl text-blue-500 font-mono font-bold">Add Money</h1>
            <div className="flex flex-col gap-10 rounded-2xl mt-15 items-start bg-gray-500 text-white px-8 py-5 max-w-85">
                <div className="flex gap-5 py-1 items-center">
                    <span className="fa fa-coins text-2xl"/>

                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => setBalance(e.target.value)} type="number" placeholder="Balance Type" className={error ? "bg-gray-300 pl-2 py-1 text-black font-bold text-md w-full rounded-lg focus:outline-0 border-2 border-red-600 animate-[pulse_300ms_linear_infinite]" : "bg-gray-300 pl-2 py-1 text-black font-bold text-md w-full rounded-lg focus:outline-0 border-2 border-gray-600"}/>
                </div>
                <button onClick={balanceHandle} className={error ? "bg-red-700 font-medium text-lg px-10 py-1.5 rounded-lg w-full max-w-67 animate-[pulse_280ms_linear_infinite]" : "bg-green-500 font-medium text-lg px-10 py-1.5 rounded-lg w-full max-w-67 hover:bg-green-700 cursor-pointer"}>Add Money</button>
            </div>           
        </main>
    )
}