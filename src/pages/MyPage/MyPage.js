import React from 'react';
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { ethers, BigNumber } from "ethers";
import "./MyPage.css";
import { 
  setAddress, 
  setShowEventSnackbar, 
  setTypeOfEvent, 
  setAmountDeposit, 
  setTransactionHash,
  setTransactionBlockNumber,
  setLoadingDeposit
} from "../../features/fundCollateralSlice";

function MyPage() {
  const user = useSelector(state => state.user);
  const fundCollateral = useSelector(state => state.fundCollateral);

  const deposit = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const fundContract = new ethers.Contract(fundCollateral.address, fundCollateral.abi, signer);

        fundContract
          .fund({ value: ethers.utils.parseEther(fundCollateral.amountDeposit.toString())})
            .then((tx)=>{
              //action prior to transaction being mined
              setTypeOfEvent("sent");
              setShowEventSnackbar(true);
              /* 
              directly queue not displaying snackbar, otherwise with re-rendering page
              with the same snackbar (with withdraw the same)
              */
              setShowEventSnackbar(false);
              provider.waitForTransaction(tx.hash)
                .then((transactionReceipt)=>{
                  //action after transaction is mined
                  setShowEventSnackbar(false);
                  setTypeOfEvent("mined");
                  setTransactionHash(transactionReceipt.transactionHash);
                  setTransactionBlockNumber(transactionReceipt.blockNumber);
                  setShowEventSnackbar(true);
                  setShowEventSnackbar(false);
                  })
          })
          .catch(()=>{
              //action to perform when user clicks "reject" in the metamask interface
              setTypeOfEvent("failure");
              setLoadingDeposit(false);
              setShowEventSnackbar(true);
              setShowEventSnackbar(false);
          });
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="myPage">
      <h1 className="headline">My Page</h1>

      <div className="myPage__body">

        <div className="myPage__text">
          <p className="myPage__headline">Total Value:</p>
          <div className="myPage__value">
            <p className="myPage__number">{user.collateral}</p>
            <p className="myPage__usdc">USDC</p>
          </div>
        </div>

        <div className="myPage__buttons">
          <Button variant="primary" size="lg" className="myPage__button1" onClick={
            () => {
              deposit();
              setAmountDeposit(0);
              setLoadingDeposit(true);
            }
          }>Deposit</Button>
          <Button variant="primary" size="lg" className="myPage__button2">Withdraw</Button>
        </div>
        
      </div>
      

    </div>
  )
}

export default MyPage