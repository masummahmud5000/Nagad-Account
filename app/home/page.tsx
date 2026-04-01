import Image from "next/image";
import '@/app/globals.css'
import Marquee from 'react-fast-marquee'
///////////////////////////////
import logo from '@/public/nagad-logo-white.png'
// import logoMain from '@/public/nagad-logo.png'

import sendMoney from '@/public/sendMoney-logo.png'
import cashOut from '@/public/cashOut-logo.png'
import recharge from '@/public/mobileRecharge-logo.png'
import Balance from "../_clientComponents/balance";
//////////////////////////////
const NestedHome = () => {
    return(
        <main>
            <div className="relative py-3 h-38 bg-linear-to-t from-[#f55134] to-[#fb693a] overflow-hidden -z-2">
                <div className="absolute right-[-15%] bottom-[-60%] opacity-13 -z-1">
                    <Image src={logo} width={270} height={270} alt="Nagad" className="object-contain invert brightness-0"/>
                </div>

                <div className="flex relative items-center justify-center text-white">
                    <h1 className="text-4xl font-bold">নগদ</h1>
                    <span className="absolute fa fa-bell text-2xl right-5"/>
                </div>
                <p className="text-center text-white text-[13px] mt-0.5">ডাক বিভাগের ডিজিটাল লেনদেন</p>
                {/* ///////////////////////////////////////////////////// */}
                <Balance/>
                {/* ///////////////////////////////////////////////////// */}
            </div>
            <div className="bg-gray-200 flex items-center pr-2">
                <span className="fa fa-alarm-clock bg-green-600 py-2 pl-2 pr-7 text-white rounded-r-2xl"/>
                <Marquee speed={50} className="text-green-700 font-bold">Masum Mahmud</Marquee>
            </div>
                <p className="font-bold text-md mt-1 ml-3 text-gray-500">Services</p>
            {/* ///////////////////////////////////////////////////// */}
            <div className="grid grid-cols-3 py-4 px-7">
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
            </div>
        </main>
    )
}
export default NestedHome;