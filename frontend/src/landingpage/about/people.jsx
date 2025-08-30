export default function People()
{
    return(<>
    <section className=" p-2 lg:p-10 mb-20">
        <h1 className="text-[24px] text-[#424242] font-semibold text-center">
            People
        </h1>
        <div className="flex flex-col items-center lg:flex-row gap-15 mt-10 p-1 lg:p-5 text-[17px] justify-center text-[#424242] font-normal max-w-6xl mx-auto">
            <div className="flex flex-col gap-2  items-center">
                <div className=" w-[295px] h-[295px] ">
                    <img src="/images/nithin-kamath.jpg" className=" rounded-[50%]" alt="" />
                </div>
                <p>Nithin Kamath</p>
                <p className="text-[14px] text-[#666666]">Founder, CEO</p>
            </div>
            <div className="w-full lg:max-w-[510px] flex flex-col  gap-5 px-5 ">
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                hurdles he faced during his decade long stint as a trader. Today,
                Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on <a href="" className="text-blue-500">Homepage </a>/ <a href="" className="text-blue-500">TradingQnA</a> / <a href="" className="text-blue-500">Twitter</a></p>
            </div>
        </div>
    </section>
        
    <section>
                
    </section>   
    
    </>)
}