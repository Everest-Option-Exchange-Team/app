import React from 'react'
import "./Trade.css";
import TradeList from "./TradeList.js";
import Swap from "./Swap.js";
import Uniswap from "./Uniswap.js";



function Trade() {
  return (
    
      <div className="trade">
      <h1 className="headline">Trade</h1>
      <TradeList />
    </div>
  
  )
}

export default Trade