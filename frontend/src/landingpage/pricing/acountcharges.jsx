
 const acountopening=[
    ["Type of account","Charges"],
 ["Online account"	,"free"],
  ["Offline account",	"free"],
  ["NRI account (offline only)",	"₹ 500"],
  ["Partnership, LLP, HUF, or Corporate accounts (offline only)"	,"₹ 500"]
  ]
 const chargeservice=[
    ["Service",	"Billing Frquency","Charges"],
    ["Tickertape",	"Monthly / Annual",	"Free: 0 | Pro: 249/2399"],
    ["Smallcase",	"Per transaction",	"Buy & Invest More: 100 | SIP: 10"],
    ["Kite Connect",	"Monthly",	"Connect: 500 | Historical: 500"]
  ]
export default function Acountcharges() {
  return (
   <>
   <section className="mb-20 mt-30">
     <div className="max-w-[1000px] mx-auto p-5">
      <h1 className="text-[24px] text-[#424242] font-semibold mb-5 ml-2">Charges for account opening</h1>
      <table className="table-auto  border-2 border-[#e1e1e1]  text-[#424242] ">
        {acountopening.map((row,rowIndex)=>(
          <tr key={rowIndex} className={`${rowIndex%2!=0?"bg-[#fbfbfb]":"bg-white"} ${rowIndex===0?"h-[60px] text-[#424242] font-semibold border border-[#e1e1e1]":"h-[50px]"}`}>
            {row.map((cell)=>(
              <td className="px-10">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </table>

      <div className="mt-20">
        <h1 className="text-[24px] text-[#424242] font-semibold mb-5 ml-2">Charges for optional value added services</h1>
      <table className="table-auto  border-2 border-[#e1e1e1]  text-[#424242] ">
        {chargeservice.map((row,rowIndex)=>(
          <tr key={rowIndex} className={`${rowIndex%2!=0?"bg-[#fbfbfb]":"bg-white"} ${rowIndex===0?"h-[60px] text-[#424242] font-semibold border border-[#e1e1e1]":"h-[50px]"}`}>
            {row.map((cell,cellindex)=>(
              <td className={`px-10 ${cellindex>=2?"hidden md:table-cell":""}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </table>
      </div>
     </div>
   </section>
   </>
  );
}
