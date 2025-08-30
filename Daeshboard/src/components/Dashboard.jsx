import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import Inputform from "./inputform";

const Dashboard = () => {
     const [popup,setpopup]=useState(false);
  
  return (
    <div className="flex h-[90vh] w-[1300px] m-auto">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      {/* <div>{popup&&<Inputform setpopup={setpopup}/>}</div> */}
      <div className="p-5 overflow-y-auto basis-[68%] h-100% ">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
