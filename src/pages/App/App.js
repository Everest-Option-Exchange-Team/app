import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
import MyPage from '../MyPage/MyPage.js';
import Trade from '../Trade/Trade.js';
import Borrow from '../Borrow/Borrow';
import TradeSwap from "../Trade/TradeSwap";
import TSLA from "./../../ressources/TSLA.png";
import MSFT from "./../../ressources/MSFT.png";
import AAPL from "./../../ressources/AAPL.png";
import GOOG from "./../../ressources/GOOG.png";
import ABNB from "./../../ressources/ABNB.png";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
          <Route path="/" element={<Trade />}/>
            <Route path="/myPage" element={<MyPage />}/>
            <Route path="/trade/List" element={<Trade/>}/>

            <Route path="trade/TSLA" element={<TradeSwap tickerSymbol="TSLA" assetLogo={TSLA}/>} />
            <Route path="trade/MSFT" element={<TradeSwap tickerSymbol="MSFT" assetLogo={MSFT}/>} />
            <Route path="trade/AAPL" element={<TradeSwap tickerSymbol="AAPL" assetLogo={AAPL}/>} />
            <Route path="trade/GOOG" element={<TradeSwap tickerSymbol="GOOG" assetLogo={GOOG}/>} />
            <Route path="trade/ABNB" element={<TradeSwap tickerSymbol="ABNB" assetLogo={ABNB}/>} />

            <Route path="/borrow" element={<Borrow/>}/>
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
