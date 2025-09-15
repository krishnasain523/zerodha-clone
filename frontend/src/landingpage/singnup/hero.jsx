import Form from "./form";
import Otp from "./otp";

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
               {/* <Otp/> */}
               <Form/>
               
            </div>
        </div>
        </>
    )
}