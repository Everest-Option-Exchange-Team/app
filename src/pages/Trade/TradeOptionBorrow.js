import React from 'react'
import "./TradeOption.css";
import Stock from "./Stock.js";
import { useNavigate } from "react-router-dom"

function TradeOptionBorrow({ logo, tickerSymbol, name, poolPrice, oraclePrice}) {
  let navigate = useNavigate();
  return (
    <div className="tradeOption" 
    onClick={() => {navigate("/borrow/" + tickerSymbol); console.log("Clicked on Tesla")}}>
        
        <Stock logo={logo} tickerSymbol={tickerSymbol} name={name}/>
        
        
        <div className="tradeOption__poolPrice">
            {poolPrice}
        </div>        
        
        <div className="tradeOption__oraclePrice">
            {oraclePrice}
        </div>
        
    </div>
  )
}

export default TradeOptionBorrow