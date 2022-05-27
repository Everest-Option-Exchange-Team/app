import React from 'react'
import "./Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import SidebarOption from "../SidebarOption/SidebarOption.js";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { IconButton } from "@material-ui/core";
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../features/pageSlice";

function Sidebar() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
  return (
    <div className="sidebar">

        <div>
            <div onClick={() => {navigate("/myPage"); dispatch(setCurrentPage("myPage"));}}>
                <SidebarOption Icon={HomeIcon} title="My Page" id="myPage"/>
            </div>
            <div onClick={() => {navigate("/trade/List"); dispatch(setCurrentPage("trade"));}}>
                <SidebarOption Icon={CompareArrowsIcon} title="Trade" id="trade"/>
            </div>
            <div onClick={() => {navigate("/borrow"); dispatch(setCurrentPage("borrow"))}}>   
                <SidebarOption Icon={CurrencyExchangeIcon} title="Borrow" id="borrow"/>
            </div>
            
        </div>

        <div className="sidebar__footer">
            <div className="sidebar__footerIcons">
                <IconButton>
                    <GitHubIcon />
                </IconButton>
                <IconButton>
                    <TelegramIcon />
                </IconButton>
                <IconButton>
                    <TwitterIcon />
                </IconButton>
            </div>
        </div>
   </div>
  )
}

export default Sidebar