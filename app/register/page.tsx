import Image from "next/image"
import nagad from '@/public/nagad.png'
import InputBox from "./_components/inputBox"

export default function Register(){
    return(
        <main className="bg-gray-800 min-h-screen max-h-auto pt-10">
            <div className="flex flex-col items-center gap-3">
                <Image src={nagad} alt="Nagad" height={100} width={100}/>
                <h1 className="text-red-500 text-6xl font-medium">নগদ</h1>
            </div>
            {/* /////////////////////////// */}
            <InputBox/>
            {/* /////////////////////////// */}
            
        </main>
    )
}