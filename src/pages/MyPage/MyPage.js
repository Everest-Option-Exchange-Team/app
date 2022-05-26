import React from 'react'
import "./MyPage.css";
import { Checkbox } from "@material-ui/core";

function MyPage() {
  return (
    <div className="myPage">
        <div className="myPage__settings">
            <div className="myPage__settingsLeft">
                <Checkbox />

            </div>
        </div>
    </div>
  )
}

export default MyPage