import React from 'react'
import "./BorrowMint.css";
import Mint from "./Mint.js";



function BorrowMint( {tickerSymbol} ) {
  return (
    
      <div className="trade">
      <h1 className="headline">Borrow</h1>
      <Mint tickerSymbol={tickerSymbol}/>
    </div>
  
  )
}

export default BorrowMint