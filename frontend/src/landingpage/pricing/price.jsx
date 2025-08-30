const pricecardlist=[
    {
        title:"Free equity delivery",
        description:"All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.",
        img:"/images/pricing0.svg"
    },
    {
        title:"Intraday and F&O trades",
        description:"Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.",
        img:"/images/intradayTrades.svg"
    },
    {
        title:"Free direct MFy",
        description:"All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.",
        img:"/images/pricing0.svg"
    },
]

export default function Price()
{
    return(<>
     <section>
        <div className=" p-5 lg:p-0 grid grid-cols-1 lg:grid-cols-3 place-items-center max-w-[1100px] mx-auto gap-10">
            {pricecardlist.map((items,index)=>(
                <div className="flex flex-col gap-2 w-full lg:w-[337px] items-center justify-center text-center">
                    <div className="w-[250px]"><img src={items.img} alt="" className="w-[250px]" /></div>
                    <p className="text-[#424242] font-semibold text-[28px]">{items.title}</p>
                    <p className="text-[#424242] text-[16px]">{items.description}</p>
                </div>
            ))}
        </div>
     </section>
    
    </>)
}