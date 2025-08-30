import { useState } from "react"
const tableData = {
    Equity: [
        ["", "Equity delivery", "Equity intraday", "F&O - Futures", "F&O - Options"],
        ["Brokerage", "Zero Brokerage", "0.03% or Rs. 20/executed order whichever is lower", "0.03% or Rs. 20/executed order whichever is lower", "Flat Rs. 20 per executed order"],
        ["STT/CTT", "0.1% on buy & sell", "0.025% on the sell side", "0.02% on the sell side",
            "0.125% of the intrinsic value on options that are bought and exercised 0.1% on sell side (on premium)"],
        ["Transaction charges",
            "BSE: 0.00375%	NSE: 0.00297%",
            "BSE: 0.00375%	NSE: 0.00173%",
            "BSE: 0	NSE: 0.03503% (on premium)",
            "BSE: 0.0325% (on premium)"],
        ["GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"],
        ["SEBI charges", "₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
        ["Stamp charges", "0.015% or ₹1500 / crore on buy side", "0.003% or ₹300 / crore on buy side", "0.002% or ₹200 / crore on buy side", "0.003% or ₹300 / crore on buy side"],
    ],
    Currency: [
        ["", "Currency futures", "Currency options"],
        ["Brokerage", "0.03% or ₹ 20/executed order whichever is lower", "₹ 20/executed order"],
        ["STT/CTT", "No STT", "No STT"],
        ["Transaction charges", "NSE: 0.00035% BSE: 0.00045%", "NSE: 0.0311% BSE: 0.001%"],
        ["GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"],
        ["SEBI charges", "₹10 / crore", "₹10 / crore"],
        ["Stamp charges", "0.0001% or ₹10 / crore on buy side", "0.0001% or ₹10 / crore on buy side"],

    ],
    Commodity: [
        ["", "	Commodity futures", "Commodity options"],
        ["Brokerage", "0.03% or Rs. 20/executed order whichever is lower", "₹ 20/executed order"],
        ["STT/CTT", "0.01% on sell side(Non-Agri)", "0.05% on sell side"],
        ["GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"],
        ["Stamp charges", "0.002% or ₹200 / crore on buy side", "0.003% or ₹300 / crore on buy side"],
    ],
}

export default function Pricingtable() {
    const tabs = ["Equity", "Currency", "Commodity"];
    const [tablehead, setTablehead] = useState("Equity");
    console.log(tablehead);

    // <button onClick={()=>{setTablehead("Currency")}} >currency</button>
    // <button onClick={()=>{setTablehead("equity")}}>equity</button>
    // <button onClick={()=>{setTablehead("commodity")}}>commodity</button>
    return (
        <>
            <section className="mt-30 mb-20">
                <div className="max-w-[1100px] mx-auto p-5">
                    <div className=" flex gap-0  lg:gap-5 border-b items-start border-[#e1e1e1]">
                        {tabs.map((tab) => (
                            <button onClick={() => setTablehead(tab)} key={tab} className={` text-[20px] font-semibold p-4 ${tablehead === tab ? "text-blue-500 border-b-2  border-blue-500" : "text-[#424242]"}`}>
                                {tab}
                            </button>
                        ))}
                    </div>

                    <table className="border table-fixed mt-10 border-[#e1e1e1] text-center text-[#424242] ">
                        {tableData[tablehead].map((row, rowIndex) => (
                            // 2 perameter comes with map function ist is data value 2nd is index which is start from 0;
                            <tr key={rowIndex} className={`text-center ${rowIndex % 2 == 0 ? "bg-white" : "bg-[#fbfbfb]"} ${rowIndex === 0 ? "border border-[#e1e1e1] h-[60px] font-semibold " : "h-[90px]  "} `} >
                                {row.map((cell,cellindex) => (
                                    <td className={`px-5 ${cellindex>=2?"hidden md:table-cell":""}`}>
                                        {cell}
                                    </td>
                                ))}
                            </tr>

                        ))}
                    </table>
                </div>
            </section>

        </>
    )
}