import React from 'react'
import "./TradeOption.css";
import Stock from "./Stock.js";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../features/pageSlice";
import { useNavigate } from "react-router-dom"

function TradeOption({ logo, tickerSymbol, name, poolPrice, oraclePrice}) {
  const dispatch = useDispatch();
  const page = useSelector(state => state.page);
  let navigate = useNavigate();
  return (
    <div className="tradeOption" 
    onClick={() => {navigate("/trade/" + tickerSymbol); console.log("Clicked on Tesla")}}>
        
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