import Image from "next/image";
import '@/app/globals.css'
import Marquee from 'react-fast-marquee'
import Link from "next/link";
///////////////////////////////
import logo from '@/public/nagad-logo-white.png'
import addMoneyLogo from '@/public/addMoney.png'
import remove from '@/public/delete.png'
import sendMoney from '@/public/sendMoney-logo.png'
import cashOut from '@/public/cashOut-logo.png'
import recharge from '@/public/mobileRecharge-logo.png'
import Balance from "../_clientComponents/balance"
//////////////////////////////
import merchant from '@/public/merchan.png'
import bill from '@/public/bill.png'
import toll from '@/public/toll.png'
import metro from '@/public/train.png'
import emi from '@/public/emi.png'
import zakat from '@/public/zakat.png'
import donation from '@/public/donation.png'
import limit from '@/public/limit.png'
//////////////////////////////
const NestedHome = () => {
    return(
        <main>
            <div className="relative py-3 h-38 bg-linear-to-t from-[#f55134] to-[#fb693a] overflow-hidden">
                <div className="absolute right-[-10%] bottom-[-50%] opacity-13 z-1">
                    <Image src={logo} width={250} height={250} alt="Nagad" className="object-contain invert brightness-0"/>
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
                <Marquee speed={30} className="text-green-700 font-bold">
                <div className="mr-80">
                    Unlimited Add Money System <span className="fa fa-dollar"/>++ | Masum Software Lab
                </div>
                </Marquee>
            </div>
                <p className="font-bold text-md mt-1 ml-3 text-gray-500">Services</p>
            {/* ///////////////////////////////////////////////////// */}
            <div className="grid grid-cols-3 gap-5 py-4 px-7">

                <div className="text-center">
                    <Link href='/home/addMoney' className="readyBG">
                        <Image src={addMoneyLogo} alt="Add Money" width={50}/>
                    </Link>
                    <h5 className="text-sm text-gray-600 font-semibold">Add Money</h5>
                </div>

                <div className="text-center">
                    <Link href='/home' className="readyBG">
                        <Image src={remove} alt="Send Money" width={50} className="opacity-90"/>
                    </Link>
                    <h5 className="text-sm text-gray-600 font-semibold">Remove Tk</h5>
                </div>

                <div className="text-center">
                    <Link href='/home' className="readyBG">
                        <Image src={sendMoney} alt="Send Money" width={50}/>
                    </Link>
                    <h5 className="text-sm text-gray-600 font-semibold">Send Money</h5>
                </div>

                <div className="text-center">
                    <div className="readyBG">
                        <Image src={cashOut} alt="Send Money" width={50}/>
                    </div>
                    <h5 className="text-sm text-gray-600 font-semibold">Cash Out</h5>
                </div>

                <div className="text-center">
                    <div className="readyBG">
                        <Image src={recharge} alt="Send Money" width={50}/>
                    </div>
                    <h5 className="text-sm text-gray-600 font-semibold">Recharge</h5>
                </div>
            </div>
{/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <p className="font-bold text-md mt-1 ml-3 text-gray-500">Payments</p>
            <div className="grid grid-cols-4 gap-y-3 py-4 px-7">

                <div className="text-center">
                    <Link href='/home/addMoney' className="readyBG2">
                        <Image src={merchant} alt="Add Money" width={45}/>
                    </Link>
                    <h5 className="text-[13px] text-gray-600 font-semibold">Merchant Pay</h5>
                </div>

                <div className="text-center">
                    <Link href='/home' className="readyBG2">
                        <Image src={bill} alt="Send Money" width={45} className="opacity-90"/>
                    </Link>
                    <h5 className="text-[13px] text-gray-600 font-semibold">Bill Pay</h5>
                </div>

                <div className="text-center">
                    <Link href='/home' className="readyBG2">
                        <Image src={toll} alt="Send Money" width={45}/>
                    </Link>
                    <h5 className="text-[13px] text-gray-600 font-semibold">Toll Fee</h5>
                </div>

                <div className="text-center">
                    <div className="readyBG2">
                        <Image src={metro} alt="Send Money" width={45}/>
                    </div>
                    <h5 className="text-[13px] text-gray-600 font-semibold">Metro Rapid Pass</h5>
                </div>

                <div className="text-center">
                    <div className="readyBG2">
                        <Image src={emi} alt="Send Money" width={45}/>
                    </div>
                    <h5 className="text-[13px] text-gray-600 font-semibold">EMI Payments</h5>
                </div>

                <div className="text-center">
                    <div className="readyBG2">
                        <Image src={zakat} alt="Send Money" width={45}/>
                    </div>
                    <h5 className="text-[13px] text-gray-600 font-semibold">Zakat Calculator</h5>
                </div>

                <div className="text-center">
                    <div className="readyBG2">
                        <Image src={donation} alt="Send Money" width={45}/>
                    </div>
                    <h5 className="text-[13px] text-gray-600 font-semibold">Donations</h5>
                </div>

                <div className="text-center">
                    <div className="readyBG2">
                        <Image src={limit} alt="Send Money" width={45}/>
                    </div>
                    <h5 className="text-[13px] text-gray-600 font-semibold">Limit & Charge</h5>
                </div>
            </div>
        </main>
    )
}
export default NestedHome;