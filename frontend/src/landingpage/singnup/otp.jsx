export default function Otp()
{
    return(<>
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
    </>)
}