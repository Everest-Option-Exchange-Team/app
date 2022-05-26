import React from 'react'
import "./Stock.css";

function Stock( {logo, tickerSymbol, name} ) {
  return (
    <div className="tradeOption__logo">
            <img src={logo} alt="" width="26"></img>

            <div className="tradeOption__nameANDtickerSymbol">
                <div className="tradeOption__tickerSymbol">
                    <p>{tickerSymbol}</p>
                </div>
                <div className="tradeOption__name">
                    <p>{name}</p>
                </div> 
            </div>  
    </div>
  )
}

export default Stock