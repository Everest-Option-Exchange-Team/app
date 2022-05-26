import React from 'react'
import "./Trade.css";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Trade() {
  return (
    <div className="trade">
      <h1>Trade</h1>

      <div className="trade__search">
            <SearchIcon />
            <input type="text" />
            <ArrowDropDownIcon className="header__inputCaret"/>
        </div>

      
    </div>
  )
}

export default Trade