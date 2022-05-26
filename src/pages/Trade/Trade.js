import React from 'react'
import "./Trade.css";
import TradeList from "./TradeList.js";
import Swap from "./Swap.js";


function Trade( {page}) {
  return (
    <div className="trade">
      <h1>Trade</h1>
      {page==="tradeList" && <TradeList />}
      {page==="swap" && <Swap />}
    
    </div>
  )
}

export default Trade