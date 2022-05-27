import React from 'react'
import "./Swap.css";
import USDC from "./../../ressources/USDC.png";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Stock from "./Stock.js";
import { useSelector } from "react-redux";
import TSLA from "./../../ressources/TSLA.png";
import MSFT from "./../../ressources/MSFT.png";
import AAPL from "./../../ressources/AAPL.png";
import GOOG from "./../../ressources/GOOG.png";
import ABNB from "./../../ressources/ABNB.png";

function Swap( {tickerSymbol, assetLogo} ) {

    const prices = useSelector(state => state.prices);

    const getOraclePrice = (tickerSymbol) => {
        switch(tickerSymbol) {
            case "TSLA":
                return prices.tsla_oracle;
            case "MSFT":
                return prices.msft_oracle;
            case "AAPL":
                return prices.aapl_oracle;
            case "GOOG":
                return prices.goog_oracle;
            case "ABNB":
                return prices.abnb_oracle;
            default:
                return undefined;
        }
    }

    const getAssetLogo = (tickerSymbol) => {
        switch(tickerSymbol) {
            case "TSLA":
                return TSLA;
            case "MSFT":
                return MSFT;
            case "AAPL":
                return AAPL;
            case "GOOG":
                return GOOG;
            case "ABNB":
                return ABNB;
            default:
                return undefined;
        }
    }

    const getPoolPrice = (tickerSymbol) => {
        switch(tickerSymbol) {
            case "TSLA":
                return prices.tsla_pool;
            case "MSFT":
                return prices.msft_pool;
            case "AAPL":
                return prices.aapl_pool;
            case "GOOG":
                return prices.goog_pool;
            case "ABNB":
                return prices.abnb_pool;
            default:
                return undefined;
        }
    }
  return (
    <div className="swap">
        <div className="swap__header">
            <div className="swap__buy">
                <p>Buy</p>
            </div>
            <div className="swap__sell">
                <p>Sell</p>
            </div>
        </div>

        <div className="swap__body">
            <div className="swap__bodyLeft">
                <div className="swap__pay">
                    
                    <div className="swap__input">
                        <div className="swap__usdc">
                            
                            <p className="swap__payLabel">PAY</p>
                            <img src={USDC} alt="" className="swap__usdcLogo" width="30"></img>
                            
                        </div>
                        
                        <p className="swap__usdcLabel">USDC</p>
                        
                        
                    
                        <input type="text" />
                    </div>
                </div>

                <div className="swap__arrow">
                    <ArrowDownwardIcon />
                </div>  

                <div className="swap__toBuy">
                    <div className="swap__input">
                        <div className="swap__asset">
                            
                            <p className="swap__buyLabel">BUY</p>
                            <img src={getAssetLogo(tickerSymbol)} alt="" className="swap__assetLogo" width="30"></img>
                            
                        </div>
                        <p className="swap__assetLabel">{tickerSymbol}</p>
                        
                        <input type="text" />
                    </div>
                </div>

                
            </div>
            
            <div className="swap__bodyRight">
                <div className="swap__assetInfo">
                    <Stock logo={getAssetLogo(tickerSymbol)} tickerSymbol={tickerSymbol} name="Tesla"/>


                    <div className="swap__infoLabelBody">
                        <div className="swap__inforLabelLeft">
                            <p className="swap__infoLabel">Oracle Price</p>
                            <p className="swap__infoLabel">Pool Price</p>
                            <p className="swap__infoLabel">Liquidity</p>
                        </div>

                        <div className="swap__inforLabelRight">
                            <p className="swap__infoLabel">{getOraclePrice(tickerSymbol)} USDC</p>
                            <p className="swap__infoLabel">{getPoolPrice(tickerSymbol)} USDC</p>
                            <p className="swap__infoLabel">0 USDC</p>
                        </div>
                    </div>
                    
                    
                    
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Swap