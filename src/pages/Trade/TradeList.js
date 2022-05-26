import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TradeOption from "./TradeOption.js";
import "./TradeList.css";

import TSLA from "../../ressources/TSLA.png";
import ABNB from "../../ressources/ABNB.png";
import AAPL from "../../ressources/AAPL.png";
import MSFT from "../../ressources/MSFT.png";
import GOOG from "../../ressources/GOOG.png";

function TradeList() {
  return (
    <div>
        <div className="tradeList__search">
            <SearchIcon />
            <input type="text" />
            <ArrowDropDownIcon className=""/>
         </div>

        <div className="tradeList__tradeOptions">
            <TradeOption logo={TSLA} tickerSymbol="TSLA" name="Tesla, Inc." poolPrice="$1200" oraclePrice="$1000"/>
            <TradeOption logo={AAPL} tickerSymbol="AAPL" name="Apple Inc." poolPrice="$1200" oraclePrice="$1000"/>
            <TradeOption logo={MSFT} tickerSymbol="MSFT" name="Microsoft Inc." poolPrice="$1200" oraclePrice="$1000"/>
            <TradeOption logo={GOOG} tickerSymbol="GOOG" name="Alphabet Inc." poolPrice="$1200" oraclePrice="$1000"/>
            <TradeOption logo={ABNB} tickerSymbol="ABNB" name="Airbnb Inc." poolPrice="$1200" oraclePrice="$1000"/>
         </div>
    </div>
  )
}

export default TradeList