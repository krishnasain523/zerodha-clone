
export default function Left_rightimg() {
    return (<>
        {/* section 1 right img */}
        <section className="p-5 lg:p-10 pl-5 lg:pl-30">
            <div className="max-w-[1100px]  mx-auto ">
                <div className="flex gap-2 flex-col lg:flex-row">
                    <div className="w-full lg:w-[700px]"><img src="/images/kite.png" className=" w-full lg:w-[558px]" alt="" /></div>
                    <div className="w-full lg:w-[337px] flex flex-col gap-5 py-10 ">
                        <p className="text-[#424242] font-semibold text-[28px]">Kite</p>
                        <p className="text-[#424242] text-[17px]">Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite <br /> experience seamlessly on your Android and iOS devices.</p>
                        <div className="text-[17px] text-blue-500 flex gap-6" ><a href="">Try demo </a><a href="">Learn more </a></div>
                        <div className="flex gap-3"><img src="/images/googlePlayBadge.svg" alt="" /><img src="images/appstoreBadge.svg" alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
        {/* section 2 left img */}
        <section className="p-5">
            <div className="max-w-[1100px]  mx-auto ">
                <div className="flex gap-10 lg:gap-40 flex-col lg:flex-row">
                    <div className="w-full lg:w-[337px] flex flex-col  gap-5 justify-center ">
                        <p className="text-[#424242] font-semibold text-[28px]">Console</p>
                        <p className="text-[#424242] text-[17px]">The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                        <div className="text-[17px] text-blue-500 " ><a href="">Learn more </a></div>
                    </div>
                    <div className="w-full lg:w-[700px]"><img src="/images/console.png" className="w-full lg:w-[623px]" alt="" /></div>
                </div>
            </div>
        </section>
        <section className="p-5 lg:p-10 pl-5 lg:pl-30">
            <div className="max-w-[1100px]  mx-auto ">
                <div className="flex gap-2  flex-col lg:flex-row">
                    <div className="w-full lg:w-[700px]"><img src="/images/coin.png" className=" w-full lg:w-[558px]" alt="" /></div>
                    <div className="w-full lg:w-[337px] flex flex-col gap-5 py-10 ">
                        <p className="text-[#424242] font-semibold text-[28px]">Coin</p>
                        <p className="text-[#424242] text-[17px]">Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
                        <div className="text-[17px] text-blue-500 flex gap-6" ><a href="">coin </a></div>
                        <div className="flex gap-3"><img src="/images/googlePlayBadge.svg" alt="" /><img src="images/appstoreBadge.svg" alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="p-5">
            <div className="max-w-[1100px]  mx-auto ">
                <div className="flex gap-10 lg:gap-40 flex-col lg:flex-row">
                    <div className="w-full lg:w-[337px] flex flex-col gap-5 justify-center ">
                        <p className="text-[#424242] font-semibold text-[28px]">Kite Connect API</p>
                        <p className="text-[#424242] text-[17px]">Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.</p>
                        <div className="text-[17px] text-blue-500 " ><a href="">Kite Connect  </a></div>
                    </div>
                    <div className="w-full lg:w-[700px]"><img src="/images/kiteconnect.png" className="w-full lg:w-[623px]" alt="" /></div>
                </div>
            </div>
        </section>
        <section className="p-5 lg:p-10 pl-5 lg:pl-30">
            <div className="max-w-[1100px]  mx-auto ">
                <div className="flex gap-2  flex-col lg:flex-row">
                    <div className="w-full lg:w-[700px]"><img src="/images/varsity.png" className=" w-full lg:w-[558px]" alt="" /></div>
                    <div className="w-full lg:w-[337px] flex flex-col gap-5 py-10 ">
                        <p className="text-[#424242] font-semibold text-[28px]">Varsity mobile</p>
                        <p className="text-[#424242] text-[17px]">An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
                        <div className="flex gap-3"><img src="/images/googlePlayBadge.svg" alt="" /><img src="images/appstoreBadge.svg" alt="" /></div>
                    </div>
                </div>
            </div>
            <h1 className="text-[#424242] text-[21px] text-center mt-20">Want to know more about our technology stack? Check out the <a href="" className="text-blue-500">Zerodha.tech</a> blog.</h1>
        </section>
    </>)
}