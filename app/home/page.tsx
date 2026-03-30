import Image from "next/image";
import '@/app/globals.css'
///////////////////////////////
import logo from '@/public/nagad-logo-white.png'
import logoMain from '@/public/nagad-logo.png'

import sendMoney from '@/public/sendMoney-logo.png'
import cashOut from '@/public/cashOut-logo.png'
import recharge from '@/public/mobileRecharge-logo.png'
//////////////////////////////
const NestedHome = () => {
    return(
        <main>
            <div className="relative py-3 h-45 bg-linear-to-t from-[#f55134] to-[#fb693a] overflow-hidden -z-2">
                <div className="absolute right-[-15%] bottom-[-65%] opacity-13 -z-1">
                    <Image src={logo} width={330} height={330} alt="Nagad" className="object-contain invert brightness-0"/>
                </div>

                <div className="flex relative items-center justify-center text-white">
                    <h1 className="text-4xl font-bold">নগদ</h1>
                    <span className="absolute fa fa-bell text-2xl right-5"/>
                </div>
                <p className="text-center text-white text-[13px] mt-1">ডাক বিভাগের ডিজিটাল লেনদেন</p>
                {/* ///////////////////////////////////////////////////// */}
                <div className="flex items-center justify-center mt-10 z-10">
                    <span className="flex bg-white py-0.5 px-3 gap-3 rounded-3xl">
                        <Image src={logoMain} alt="MainLogo" width={20} height={20}/>
                        <h1 className="font-bold text-[#f55134]">Tap for Balance</h1>
                    </span>
                </div>
                {/* ///////////////////////////////////////////////////// */}
            </div>
                <p className="font-bold text-md mt-1 ml-3 text-gray-500">Services</p>
            {/* ///////////////////////////////////////////////////// */}
            <div className="grid grid-cols-4 gap-3 py-4 px-7">
                <div className="text-center">
                    <div className="readyBG">
                        <Image src={sendMoney} alt="Send Money" width={60}/>
                    </div>
                    <h5 className="text-sm text-gray-600 font-semibold">Send Money</h5>
                </div>

                <div className="text-center">
                    <div className="readyBG">
                        <Image src={cashOut} alt="Send Money" width={60}/>
                    </div>
                    <h5 className="text-sm text-gray-600 font-semibold">Cash Out</h5>
                </div>

                <div className="text-center">
                    <div className="readyBG">
                        <Image src={recharge} alt="Send Money" width={60}/>
                    </div>
                    <h5 className="text-sm text-gray-600 font-semibold">Recharge</h5>
                </div>

                <div className="text-center">
                    <div className="readyBG">
                        <Image src={sendMoney} alt="Send Money" width={60}/>
                    </div>
                    <h5 className="text-sm text-gray-600 font-semibold">Send Money</h5>
                </div>
            </div>
        </main>
    )
}
export default NestedHome;