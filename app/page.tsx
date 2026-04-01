'use client'

import Image from "next/image";
import loading from '@/public/loading.png'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  let router = useRouter();

  useEffect (() => {
    const timer = setTimeout(() => router.push('/home'),3000)
    return () => clearTimeout(timer)
  },[])
  return (
    <main className="pt-50">
      <div className="flex flex-col gap-15 items-center">
        <span className="p-3 bg-linear-to-t from-amber-400 to-white rounded-full animate-[spin_1s_infinite]"><Image src={loading} height={100} width={100} alt="Loading" className="animate-spin bg-white p-2 rounded-full"/></span>
        <h1 className="bg-linear-to-r from-amber-500 to-blue-500 py-2 bg-clip-text text-transparent text-3xl font-mono font-bold">Nagad System Run...</h1>
      </div>
    </main> 
  )
}
