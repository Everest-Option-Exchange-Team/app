import React from 'react'
import './Header.css';
import { IconButton } from "@material-ui/core";
import logo from "../../ressources/logo.png";
import ConnectButton from "../ConnectButton/ConnectButton.js";

function Header() {
  return (
    <div className="header">
        <div className="header__left">
                <IconButton>
                    <img src={logo} alt="" className="header__logo"></img>
                </IconButton>
        </div>


        <div className="header__right">
            <ConnectButton />
        </div>
    </div>
  )
}

export default Header