export default function Hero()
{
    return(
        <>
        <div className="flex flex-col px-10 md:px-10 lg:px-16  w-full max-w-screen-xl mx-auto mt-40 z-50">
            <div className="hidden md:block text-center">
                <h1 className="text-3xl font-semibold text-[#424242]">Open a free demat and trading account online</h1>
                <p className="text-[#666666] mt-6 text-[1.3rem]">Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>
            <div className="flex  flex-col items-center  lg:flex-row mt-10 justify-evenly">
                <div className="">
                    <img src="/images/account_open.svg" alt="" className="w-[528px]" />
                </div>
                <div className="p-10 ">
                    <h1 className="text-[2rem] text-[#424242] font-semibold mb-1 mt-5">Signup now</h1>
                    <p className="text-[#666666] mb-2 ">Or track your existing application</p>
                    
                    <div className=" flex  border border-2 border-[#666666]  rounded-md">
                        <div className="flex  items-center px-3 py-4 bg-gray-100 border-r border-gray-300 rounded-md ">
                          <img src="images/india.webp "className="w-[25px] rounded-md" alt="" />
                          <span>+91</span>
                        </div>
                         <input type="text" placeholder="Enter your mobile number" className="px-5 font-medium text-[1.2rem] " />
                    </div>
                    <button className=" mt-5 bg-[#387ED1] px-10 lg:px-30 py-[0.7rem]  font-medium rounded-sm text-white font-900 text-xl hover:bg-black">Get Otp</button>
                    <p className="text-[#666666] mt-15 text-[14px]">By proceeding, you agree to the Zerodha <a href="" className="text-blue-500 hover:text-black">terms</a> & <a href="" className="text-blue-500 hover:text-black">privacy</a> policy</p>
                </div>
            </div>
        </div>
        </>
    )
}