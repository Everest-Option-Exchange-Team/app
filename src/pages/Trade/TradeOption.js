import React from 'react'
import "./TradeOption.css";

function TradeOption({ logo, tickerSymbol, name, poolPrice, oraclePrice}) {
  return (
    <div className="tradeOption">
        <div className="tradeOption__logo">
            <img src={logo} alt="" width="30"></img>

            <div className="tradeOption__nameANDtickerSymbol">
                <div className="tradeOption__tickerSymbol">
                    <h3>{tickerSymbol}</h3>
                </div>
                <div className="tradeOption__name">
                    <p>{name}</p>
                </div> 
            </div>  
        </div>

        
        
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