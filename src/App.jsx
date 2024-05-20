import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar.jsx";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      
      
    </div>
  )
}

export default App
