import React from 'react'
import "./Swap.css";
import USDC from "./../../ressources/USDC.png";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Stock from "./Stock.js";

function Swap( {tickerSymbol, assetLogo} ) {
    console.log("assetLogo: " + assetLogo);
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
                            <img src={assetLogo} alt="" className="swap__assetLogo" width="30"></img>
                            
                        </div>
                        <p className="swap__assetLabel">{tickerSymbol}</p>
                        
                        <input type="text" />
                    </div>
                </div>

                
            </div>
            
            <div className="swap__bodyRight">
                <div className="swap__assetInfo">
                    <Stock logo={assetLogo} tickerSymbol={tickerSymbol} name="Tesla"/>


                    <div className="swap__infoLabelBody">
                        <div className="swap__inforLabelLeft">
                            <p className="swap__infoLabel">Oracle Price</p>
                            <p className="swap__infoLabel">Pool Price</p>
                            <p className="swap__infoLabel">Liquidity</p>
                        </div>

                        <div className="swap__inforLabelRight">
                            <p className="swap__infoLabel">1000 USDC</p>
                            <p className="swap__infoLabel">1200 USDC</p>
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