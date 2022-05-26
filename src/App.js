import React from 'react';
import './App.css';
import Header from './pages/Header/Header.js';
import Sidebar from './pages/Sidebar/Sidebar.js';
import MyPage from './pages/MyPage/MyPage.js';
import Trade from './pages/Trade/Trade';
import Borrow from './pages/Borrow/Borrow';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
          <Route path="/" element={<MyPage />}/>
            <Route path="/myPage" element={<MyPage />}/>
            <Route path="/trade" element={<Trade/>}/>
            <Route path="/borrow" element={<Borrow/>}/>
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
