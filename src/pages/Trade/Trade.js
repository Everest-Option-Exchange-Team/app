import React from 'react'
import "./Trade.css";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TradeOption from "./TradeOption.js";

import TSLA from "../../ressources/TSLA.png";
import ABNB from "../../ressources/ABNB.png";
import AAPL from "../../ressources/AAPL.png";
import MSFT from "../../ressources/MSFT.png";
import GOOG from "../../ressources/GOOG.png";

function Trade() {
  return (
    <div className="trade">
      <h1>Trade</h1>

      <div className="trade__search">
            <SearchIcon />
            <input type="text" />
            <ArrowDropDownIcon className="header__inputCaret"/>
      </div>

      <div className="trade__tradeOptions">
        <TradeOption logo={TSLA} tickerSymbol="TSLA" name="Tesla, Inc." poolPrice="$1200" oraclePrice="$1000"/>
        <TradeOption logo={AAPL} tickerSymbol="AAPL" name="Apple Inc." poolPrice="$1200" oraclePrice="$1000"/>
        <TradeOption logo={MSFT} tickerSymbol="MSFT" name="Microsoft Corporation" poolPrice="$1200" oraclePrice="$1000"/>
        <TradeOption logo={GOOG} tickerSymbol="GOOG" name="Alphabet Inc." poolPrice="$1200" oraclePrice="$1000"/>
        <TradeOption logo={ABNB} tickerSymbol="ABNB" name="Airbnb Inc." poolPrice="$1200" oraclePrice="$1000"/>
      </div>

      
    </div>
  )
}

export default Trade