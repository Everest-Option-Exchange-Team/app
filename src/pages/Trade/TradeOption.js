import React from 'react'
import "./TradeOption.css";
import Stock from "./Stock.js";

function TradeOption({ logo, tickerSymbol, name, poolPrice, oraclePrice}) {
  return (
    <div className="tradeOption">
        
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

export default TradeOption