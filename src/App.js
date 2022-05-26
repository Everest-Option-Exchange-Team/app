import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import MyPage from './MyPage.js';
import Trade from './Trade';
import Borrow from './Borrow';
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
