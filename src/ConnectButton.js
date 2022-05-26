import React from 'react'
import { Button } from "@material-ui/core";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useSelector } from "react-redux";
import { login, selectAddress } from "./features/userSlice";
import { useDispatch } from "react-redux";

function ConnectButton() {
  const address = useSelector(selectAddress);
  const dispatch = useDispatch();

  const setAddress = (address) => {
    dispatch(login(address));
  }
  return (
    <div>
      <Button 
        className="header__connectWallet"
        startIcon={ <AccountBalanceWalletIcon fontSize="large"
        /> }>
          { address ? {address} : "Connect Wallet" }
      </Button>
    </div>
  )
}

export default ConnectButton