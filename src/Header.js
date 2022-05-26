import React from 'react'
import './Header.css';
import { IconButton, Button } from "@material-ui/core";
import logo from "./ressources/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function Header() {
  return (
    <div className="header">
        <div className="header__left">
                <IconButton>
                    <img src={logo} alt="" className="header__logo"></img>
                </IconButton>
            
        </div>

        <div className="header__middle">
            <SearchIcon />
            <input placeholder="Search stocks" type="text" />
            <ArrowDropDownIcon className="header__inputCaret"/>
        </div>

        <div className="header__right">
            <div >
                <Button className="header__connectWallet"
                    startIcon={ <AccountBalanceWalletIcon fontSize="large"
                    /> }>
                    Connect Wallet
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Header