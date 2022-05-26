import React from 'react'
import "./MyPage.css";

function MyPage() {
  return (
    <div className="myPage">
      <h1 className="headline">My Page</h1>
      <div className="myPage__body">
        <p className="myPage__headline">Total Value:</p>

        <div className="myPage__value">
          <p className="myPage__number">1682.92</p>
          <p className="myPage__usdc">USDC</p>
        </div>
        
      </div>
    </div>
  )
}

export default MyPage