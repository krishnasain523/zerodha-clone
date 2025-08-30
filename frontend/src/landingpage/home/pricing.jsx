function Pricing() {
    return ( <>
    <section className="mt-30">
        <div className="flex gap-10 lg:gap-2  flex-col lg:flex-row px-5 md:px-10 lg:px-16  w-full max-w-screen-xl mx-auto">
            <div className=" w-full lg:w-[432px]">
                <h1 className="text-4xl font-semibold text-[#424242] ">Unbeatable pricing</h1>
               <p className="text-[#424242] mt-5 mb-3 text-[1rem]">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href="" className="text-blue-500 hover:text-black font-semibold">See pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className=" flex gap-5 lg:gap-10 text-[10px] text-[#666666] flex-wrap md:flex-nowrap">
                <div className="flex justify-center max-w-[100px] md:max-w-[450px] items-center ">
                    <img src="/images/pricing0.svg"  className="w-[120px]" alt="" />
                    <p className=""> Free account opening</p>
                </div>
                <div className="flex justify-center max-w-[200px] md:max-w-[450px] items-center">
                     <img src="/images/pricing0.svg"  className="w-[120px]"alt="" />
                    <p>Free equity delivery and direct mutual funds</p>
                    </div>
                <div className="flex justify-center max-w-full md:max-w-[450px]  items-center">
                     <img src="/images/intradayTrades.svg" className="w-[120px]" alt="" />
                    <p> Intraday and F&O</p>
                </div>
            </div>
        </div>
    </section>
     
    </> );
}

export default Pricing;