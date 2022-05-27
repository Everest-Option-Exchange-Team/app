import React from 'react'
import USDC from "./../../ressources/USDC.png";
import Stock from "../Trade/Stock";
import "./Mint.css";
import Slider from '@mui/material/Slider';
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import TSLA from "./../../ressources/TSLA.png";
import MSFT from "./../../ressources/MSFT.png";
import AAPL from "./../../ressources/AAPL.png";
import GOOG from "./../../ressources/GOOG.png";
import ABNB from "./../../ressources/ABNB.png";

function Mint( {tickerSymbol, assetLogo}) {

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

    const valuetext = (value) => {
        return `${value}°C`;
    }
    const marks = [
        {
          value: 150,
          label: "Minimum",
        },
        {
          value: 200,
          label: "Safe",
        }
      ];
  return (
    <div className="swap">

        <div className="swap__body">
            <div className="swap__bodyLeft mint__bodyLeft">

            <div>
                <p className="mint__setCollateralRatioLabel">Enter amount to borrow</p>
                <p className="mint__setCollateralRatioSubline">Amount will have to be deposited first.</p>
            </div>
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

                <div className="mint__borderline"></div>

                <div>
                    <p className="mint__setCollateralRatioLabel">Set a Collateral Ratio</p>
                    <p className="mint__setCollateralRatioSubline">Position will be liquidated below the minimum.</p>
                </div>
                <div className="mint__slider">
                        <Slider 
                            aria-label="Custom marks"
                            defaultValue={200}
                            set={0.1}
                            valueLabelDisplay="on"
                            min={0}
                            max={300}
                            getAriaValueText={valuetext}
                            marks={marks}
                        />
                </div>

                <div>
                    <p className="mint__setCollateralRatioLabel">Confirm borrow amount</p>
                    <p className="mint__setCollateralRatioSubline">Position can be closed by repaying the borrowed amount.</p>
                </div>

                <div className="swap__toBuy">
                    <div className="swap__input">
                        <div className="swap__asset">
                            
                            <p className="swap__buyLabel">BORROW</p>
                            <img src={getAssetLogo(tickerSymbol)} alt="" className="swap__assetLogo" width="30"></img>
                            
                        </div>
                        <p className="swap__assetLabel">{tickerSymbol}</p>
                        
                        <input type="text" />
                    </div>
                </div>

                <Button className="mint__confirmButton">
                    Confirm
                </Button>

                
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

export default Mint