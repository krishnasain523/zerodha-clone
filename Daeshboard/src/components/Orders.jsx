import axios from "axios";
import React, { useEffect, useState } from "react";

import Ordernotfound from "./ordernotfound";
import Orderlist from "./orderlist";
const Orders = () => {
  const [allorders,setallorders]=useState([]);
 useEffect(()=>{
   axios.get("http://localhost:3002/allorders").then((res)=>{
    setallorders(res.data);
    
  })
 },[]);
  return (<>   
   {allorders.length>0?<Orderlist allorders={allorders}/>:<Ordernotfound/> }
</>

  );
};

export default Orders;
