import React from 'react'
import { Button } from "@material-ui/core";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useSelector } from "react-redux";
import { selectAddress, selectConnected } from "./features/userSlice";

function ConnectButton() {
  const address = useSelector(selectAddress);
  const connected = useSelector(selectConnected);
  return (
    <div>
      <Button 
        className="header__connectWallet"
        startIcon={ <AccountBalanceWalletIcon fontSize="large"
        /> }>
          { connected ? {address} : "Connect Wallet" }
      </Button>
    </div>
  )
}

export default ConnectButton