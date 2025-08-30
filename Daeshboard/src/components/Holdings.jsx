
// import { VerticalGraph } from "./VerticalGraph";

import { useState } from "react";
import { holdings } from "../data/data";
import { useEffect } from "react";
import axios from 'axios';
import { VerticalGraph } from "./VerticalGraph";
import { data } from "react-router-dom";
const Holdings = () => {
  const[allholdings,setallholdings]=useState([]);
  useEffect(()=>
  { axios.get("http://localhost:3002/allholdings").then((res)=>
  {
     setallholdings(res.data);
  })
     
  },[])


  const labels = allholdings.map((subaaray)=>subaaray["name"]);

 const data = {
  labels,
  datasets: [
    {
      label: 'price',
      data:allholdings.map((stock)=>stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }// },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};
  return (
    <>
      <h3 className="title">Holdings ({allholdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {
            allholdings.map((stock, index) => {
              const currval = stock.price * stock.qty;
              const isprofit = currval - stock.avg * stock.qty >= 0.0;
              const profitclass = isprofit ? "profit" : "loss";
              const dayclass = stock.isLoss ? "loss" : "profit";
                 return(
                  <>
                   <tr key={index} className="items">
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{currval.toFixed(2)}</td>
            <td className={profitclass}>{(currval - stock.avg * stock.qty).toFixed(2)}</td>
            <td className={profitclass}>{stock.net}</td>
            <td className={dayclass}>{stock.day}</td>
          </tr>
                  </>
                 )

            
               })}   </table>
                </div><div className="row">
                    <div className="col">
                      <h5>
                        29,875.<span>55</span>{" "}
                      </h5>
                      <p>Total investment</p>
                    </div>
                    <div className="col">
                      <h5>
                        31,428.<span>95</span>{" "}
                      </h5>
                      <p>Current value</p>
                    </div>
                    <div className="col">
                      <h5>1,553.40 (+5.20%)</h5>
                      <p>P&L</p>
                    </div>
                  </div>
                  <VerticalGraph data={data}/>
                  </>
        );
};

        export default Holdings;
