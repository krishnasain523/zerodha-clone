import  { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";
//  important note => we can use components in the same file;
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";


const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // export const data = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  // datasets: [
  //   {
  //     label: "# of Votes",
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       "rgba(255, 99, 132, 0.2)",
  //       "rgba(54, 162, 235, 0.2)",
  //       "rgba(255, 206, 86, 0.2)",
  //       "rgba(75, 192, 192, 0.2)",
  //       "rgba(153, 102, 255, 0.2)",
  //       "rgba(255, 159, 64, 0.2)",
  //     ],
  //     borderColor: [
  //       "rgba(255, 99, 132, 1)",
  //       "rgba(54, 162, 235, 1)",
  //       "rgba(255, 206, 86, 1)",
  //       "rgba(75, 192, 192, 1)",
  //       "rgba(153, 102, 255, 1)",
  //       "rgba(255, 159, 64, 1)",
  //     ],
  //     borderWidth: 1,
  //   },
  // ],
  // };

  return (
    <>
      <div className="flex flex-col basis-[30%] h-[90%] overflow-y-auto">
        <div className={`flex justify-between text-[13px] font-sans h-[50px] items-center px-5 hover:bg-[#e1e1e1] border-b border-[#e1e1e1] `}>
         <p className="text-[#e1e1e1]">search egnity bse nignity,fut weekly gold mcx</p>
         <p className="text-[16px] text-[#666666] ">{watchlist.length}/50</p>
        </div>
        {
          watchlist.map((stock, index) => {
            return <Watchlistitem  stock={stock} key={index}/>
            
           
          })
        }
      </div>
    </>
  );
};

export default WatchList;

const Watchlistitem=({stock})=>
{
  const [showwatchlistactions,setshowwatchlistactions]=useState(false);
  const handlemouseenter=()=>
  {
    setshowwatchlistactions(true);
  }
   const handlemouseleave=()=>
  {
    setshowwatchlistactions(false);
    
  }
  return  <li className="h-[50px] hover:bg-[#e1e1e1] list-none flex flex-col  justify-center text-[13px] font-sans  px-5 border-b border-[#e1e1e1]" onMouseEnter={handlemouseenter} onMouseLeave={handlemouseleave}>

     <div className="  flex justify-between  ">
              <p className={`${stock.isDown ? "text-red-500" : "text-green-400"}`}>{stock.name}</p>
              <div className="flex gap-2">
                <p>{stock.percent}</p>
                <p>{stock.isDown?(<KeyboardArrowDown className="text-red-500"/>):(<KeyboardArrowUp className="text-green-400"/>)}</p>
                <p>{stock.price}</p>
                
              </div>
            </div>
        {showwatchlistactions&&<Watchlistactions uid={stock.name}/>}
  </li>
}

const Watchlistactions=({uid})=>
{ const { openBuyWindow } = useContext(GeneralContext);
  const handlebuy=()=>
  {
    openBuyWindow(uid);
  }

  return(<>
   <span className="actions ">
    <span>
      <Tooltip title="Buy (B) " placement="top" arrow TransitionComponent={Grow}>
      <button className="buy" onClick={handlebuy}>Buy</button>
    </Tooltip>
     <Tooltip title="Sell (S) " placement="top" arrow TransitionComponent={Grow}>
      <button className="sell">Sell</button>
    </Tooltip>
     <Tooltip title="Analetics(A) " placement="top" arrow TransitionComponent={Grow}>
      <button className="bg-white"><EqualizerIcon/></button>
    </Tooltip>
     <Tooltip title="More (M) " placement="top" arrow TransitionComponent={Grow}>
      <button className="bg-white"><MoreHorizIcon/></button>
    </Tooltip>
    </span>
   </span>

  </>
  )
}