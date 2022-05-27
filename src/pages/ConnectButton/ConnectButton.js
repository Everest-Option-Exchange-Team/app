import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@material-ui/core";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useSelector } from "react-redux";
import { setAddress, setConnected} from "../../features/userSlice";
import { useDispatch } from "react-redux";



function ConnectButton() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();


  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure  you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: 'eth_accounts'});

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account: ", account);
        dispatch(setAddress(account));
        dispatch(setConnected(true));
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get Metamask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts"});

      console.log("Connected", accounts[0]);
      dispatch(setAddress(accounts[0]));
      dispatch(setConnected(true));
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div>
      
      { user.connected ? 
          (<div className="bio">
            <Button 
            className="header__connectWallet"
            startIcon={ <AccountBalanceWalletIcon fontSize="large"
            /> }
            >
              {user.address.substring(0, 5) + "..." + user.address.substring(user.address.length - 4, user.address.length)}
          </Button> 
          </div>) : 
          ( <Button 
            className="header__connectWallet"
            startIcon={ <AccountBalanceWalletIcon fontSize="large"
            /> }
            onClick={connectWallet}
            >
              Connect Wallet
          </Button>)
        }
    </div>
  )
}

export default ConnectButton