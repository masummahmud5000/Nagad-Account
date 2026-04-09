import Image from "next/image"
import nagad from '@/public/nagad.png'
import InputBox from "./_components/inputBox"

export default function Login(){
    return(
        <main className="bg-gray-800 min-h-screen max-h-auto pt-10">
            <div className="flex flex-col items-center gap-3">
                <Image src={nagad} alt="Nagad" height={100} width={100}/>
                <h1 className="text-red-500 text-6xl font-medium">নগদ</h1>
            </div>
            <div className="flex flex-col items-center gap-2 mt-7">
                <h1 className="text-gray-100">Mobile Number</h1>
                <h1 className="text-white text-2xl font-sans">01884-885000</h1>
            </div>
            {/* /////////////////////////// */}
            <InputBox/>
            {/* /////////////////////////// */}
        </main>
    )
}