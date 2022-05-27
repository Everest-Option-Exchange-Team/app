import React from 'react'
import USDC from "./../../ressources/USDC.png";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Stock from "../Trade/Stock";
import "./Mint.css";
import Slider from '@mui/material/Slider';
import { Button } from "@material-ui/core";

function Mint( {tickerSymbol, assetLogo}) {

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
                            <img src={assetLogo} alt="" className="swap__assetLogo" width="30"></img>
                            
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

export default Mint