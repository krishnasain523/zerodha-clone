const universelist=[{
    img:"/images/zerodhaFundhouse.png",
    discription:"Our asset management venture that is creating simple and transparent index funds to help you save for your goals"
},
{
    img:"/images/sensibull-logo.svg",
    discription:"Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more"

},
{
    img:"/images/tijori.svg",
    discription:"Investment research platform that offers detailed insights on stocks,sectors, supply chains, and more."
},
{
    img:"/images/streak-logo.png",
    discription:"Systematic trading platform that allows you to create and backtest strategies without coding."
},
{
    img:"/images/smallcase-logo.png",
    discription:"Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
},
{
    img:"/images/dittoLogo.png",
    discription:"Personalized advice on life and health insurance. No spam and no mis-selling.Sign up for free"
},



]



export default function Universe()
{
    return(<>
    <section className="mt-20 mb-20">
        <div className="text-center">
            <h1 className="text-[24px] text-[#424242] font-semibold ">The Zerodha Universe</h1>
        <p className="text-[16px] mt-5">Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className="grid grid-cols grid-cols-1  md:grid-cols-2 p-5 md:p-10 lg:p-5 lg:grid-cols-3 place-items-center gap-5 max-w-[1100px] mx-auto mt-5">
            {universelist.map((items,index)=>(
            <div className="flex flex-col gap-3 w-[254px] text-center items-center">
                <div className=" w-[170px] lg:w-[198px]"><img src={items.img} alt="" className=" w-[160px] lg:w-[180px]" /></div>
                <p className="text-[12px]  text-[#666666]">{items.discription}</p>
            </div>
        ))}
        </div>
        <div className="text-center"><button className=" bg-[#387ED1] px-10 py-[0.7rem]  font-medium rounded-sm text-white font-900 text-xl hover:bg-black">Sign up for free</button></div>
    </section>
    </>)
}